import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react'
import {
  generateInitialAttributes,
  calculateOverall,
  generateSeasonCalendar,
  calculateWeeklySalary,
  calculateTransferValue,
  saveGame,
  loadGame,
  applyTraining,
  simulateMatchEvents,
  checkMilestones,
} from '../data/gameLogic.js'
import { CLUBS, SPONSORS, CAREER_MILESTONES, DIFFICULTY_LEVELS, SEASON_MONTHS } from '../data/gameData.js'

const GameContext = createContext(null)

const initialState = {
  player: null,
  career: {
    year: 1,
    week: 1,
    day: 1,
    month: 0,
    season: 2024,
    matches: [],
    calendar: [],
    history: [],
    milestones: [],
    reputation: 30,
    fanSupport: 50,
    coachRelation: 50,
    teamRelation: 50,
    mediaRelation: 50,
    nationalTeam: { called: false, caps: 0, goals: 0 },
    injuries: [],
    suspensions: [],
    awards: [],
    titles: [],
  },
  finances: {
    balance: 0,
    weeklySalary: 0,
    sponsorIncome: 0,
    bonusIncome: 0,
    expenses: 0,
    transactions: [],
  },
  sponsors: [],
  settings: {
    difficulty: 'normal',
    autoSave: true,
    soundEnabled: true,
    notifications: true,
    language: 'pt-BR',
  },
  hasSave: false,
  currentPage: 'menu',
  notifications: [],
}

let notifId = 0

function gameReducer(state, action) {
  switch (action.type) {
    case 'CREATE_PLAYER': {
      const player = action.payload
      const club = CLUBS.find(c => c.id === player.clubId)
      const weeklySalary = calculateWeeklySalary(player.overall, 30, club.budget)
      const calendar = generateSeasonCalendar(player.clubId, player.season || 2024)
      const newState = {
        ...state,
        player,
        career: {
          ...state.career,
          year: 1,
          week: 1,
          season: player.season || 2024,
          calendar,
          reputation: 30,
        },
        finances: {
          ...state.finances,
          balance: weeklySalary * 4,
          weeklySalary,
          transactions: [
            {
              id: Date.now(),
              date: 'Início',
              description: 'Salário inicial',
              amount: weeklySalary * 4,
              type: 'income',
            },
          ],
        },
        sponsors: [],
        currentPage: 'dashboard',
      }
      if (newState.settings.autoSave) saveGame(newState)
      return newState
    }

    case 'SET_PAGE':
      return { ...state, currentPage: action.payload }

    case 'UPDATE_PLAYER': {
      const newState = { ...state, player: { ...state.player, ...action.payload } }
      if (newState.settings.autoSave) saveGame(newState)
      return newState
    }

    case 'PLAY_MATCH': {
      const { matchResult } = action.payload
      const updatedMatches = [...state.career.matches, matchResult]
      const updatedCalendar = state.career.calendar.map(m =>
        m.id === matchResult.matchId ? { ...m, played: true, result: matchResult } : m
      )

      const updatedPlayer = { ...state.player }
      if (matchResult.playerGoals) updatedPlayer.goals = (updatedPlayer.goals || 0) + matchResult.playerGoals
      if (matchResult.playerAssists) updatedPlayer.assists = (updatedPlayer.assists || 0) + matchResult.playerAssists
      updatedPlayer.matches = (updatedPlayer.matches || 0) + 1

      const updatedCareer = { ...state.career, matches: updatedMatches, calendar: updatedCalendar, week: state.career.week + 1 }
      if (matchResult.result === 'win') {
        updatedCareer.fanSupport = Math.min(100, updatedCareer.fanSupport + 3)
        updatedCareer.coachRelation = Math.min(100, updatedCareer.coachRelation + 2)
        updatedCareer.reputation = Math.min(100, updatedCareer.reputation + 1)
      } else if (matchResult.result === 'loss') {
        updatedCareer.fanSupport = Math.max(0, updatedCareer.fanSupport - 2)
        updatedCareer.coachRelation = Math.max(0, updatedCareer.coachRelation - 1)
      } else {
        updatedCareer.fanSupport = Math.min(100, updatedCareer.fanSupport + 1)
      }

      const newMilestones = checkMilestones(updatedPlayer, updatedCareer)
      const newlyAchieved = newMilestones.filter(m => !state.career.milestones.includes(m))
      updatedCareer.milestones = newMilestones

      const bonus = matchResult.result === 'win' ? state.finances.weeklySalary * 0.5 : 0
      const updatedFinances = {
        ...state.finances,
        balance: state.finances.balance + state.finances.weeklySalary + bonus,
        transactions: [
          ...state.finances.transactions,
          {
            id: Date.now(),
            date: `Semana ${state.career.week}`,
            description: 'Salário semanal',
            amount: state.finances.weeklySalary,
            type: 'income',
          },
          ...(bonus > 0 ? [{
            id: Date.now() + 1,
            date: `Semana ${state.career.week}`,
            description: 'Bônus por vitória',
            amount: bonus,
            type: 'income',
          }] : []),
        ],
      }

      const newNotifications = [
        ...state.notifications,
        ...newlyAchieved.map(m => {
          const milestone = CAREER_MILESTONES.find(x => x.id === m)
          return {
            id: `notif_${notifId++}`,
            type: 'milestone',
            title: `🏆 ${milestone.name}`,
            message: milestone.description,
            timestamp: Date.now(),
          }
        }),
      ]

      const newState = {
        ...state,
        player: updatedPlayer,
        career: updatedCareer,
        finances: updatedFinances,
        notifications: newNotifications.slice(-10),
      }
      if (newState.settings.autoSave) saveGame(newState)
      return newState
    }

    case 'TRAIN': {
      const { trainingType, improvements, totalImprovement, energyCost, newAttributes, newOverall, newEnergy } = action.payload
      const updatedPlayer = {
        ...state.player,
        attributes: newAttributes,
        overall: newOverall,
        energy: newEnergy,
      }

      const newState = {
        ...state,
        player: updatedPlayer,
        career: {
          ...state.career,
          week: state.career.week + 1,
        },
      }
      if (newState.settings.autoSave) saveGame(newState)
      return newState
    }

    case 'SIGN_SPONSOR': {
      const sponsor = action.payload
      const newSponsors = [...state.sponsors, { ...sponsor, signedAt: Date.now() }]
      const updatedFinances = {
        ...state.finances,
        sponsorIncome: newSponsors.reduce((sum, s) => sum + s.bonus, 0),
        balance: state.finances.balance + sponsor.bonus,
        transactions: [
          ...state.finances.transactions,
          {
            id: Date.now(),
            date: `Semana ${state.career.week}`,
            description: `Contrato com ${sponsor.name}`,
            amount: sponsor.bonus,
            type: 'income',
          },
        ],
      }
      const newNotifications = [
        ...state.notifications,
        {
          id: `notif_${notifId++}`,
          type: 'success',
          title: 'Patrocinador Assinado',
          message: `Você assinou com ${sponsor.name} (+$${sponsor.bonus.toLocaleString()}/semana)`,
          timestamp: Date.now(),
        },
      ]
      const newState = { ...state, sponsors: newSponsors, finances: updatedFinances, notifications: newNotifications.slice(-10) }
      if (newState.settings.autoSave) saveGame(newState)
      return newState
    }

    case 'END_SPONSOR': {
      const sponsorId = action.payload
      const removed = state.sponsors.find(s => s.id === sponsorId)
      const newSponsors = state.sponsors.filter(s => s.id !== sponsorId)
      const updatedFinances = {
        ...state.finances,
        sponsorIncome: newSponsors.reduce((sum, s) => sum + s.bonus, 0),
        transactions: [
          ...state.finances.transactions,
          {
            id: Date.now(),
            date: `Semana ${state.career.week}`,
            description: `Fim de contrato com ${removed?.name || 'Patrocinador'}`,
            amount: 0,
            type: 'expense',
          },
        ],
      }
      const newState = { ...state, sponsors: newSponsors, finances: updatedFinances }
      if (newState.settings.autoSave) saveGame(newState)
      return newState
    }

    case 'TRANSFER': {
      const { clubId, transferFee } = action.payload
      const newClub = CLUBS.find(c => c.id === clubId)
      const newSalary = calculateWeeklySalary(state.player.overall, state.career.reputation, newClub.budget)
      const updatedPlayer = {
        ...state.player,
        clubId,
        clubName: newClub.name,
        previousClub: state.player.clubId,
      }
      const newCalendar = generateSeasonCalendar(clubId, state.career.season)
      const updatedFinances = {
        ...state.finances,
        weeklySalary: newSalary,
        balance: state.finances.balance + transferFee,
        transactions: [
          ...state.finances.transactions,
          {
            id: Date.now(),
            date: `Semana ${state.career.week}`,
            description: `Transferência para ${newClub.name}`,
            amount: transferFee,
            type: 'income',
          },
        ],
      }
      const newState = {
        ...state,
        player: updatedPlayer,
        career: {
          ...state.career,
          calendar: newCalendar,
          transfers: (state.career.transfers || 0) + 1,
        },
        finances: updatedFinances,
      }
      if (newState.settings.autoSave) saveGame(newState)
      return newState
    }

    case 'UPDATE_SETTINGS': {
      const newState = { ...state, settings: { ...state.settings, ...action.payload } }
      if (newState.settings.autoSave) saveGame(newState)
      return newState
    }

    case 'LOAD_GAME': {
      const saved = loadGame()
      if (saved && saved.player) {
        return {
          ...state,
          player: saved.player,
          career: saved.career || state.career,
          finances: saved.finances || state.finances,
          sponsors: saved.sponsors || [],
          settings: saved.settings || state.settings,
          hasSave: true,
          currentPage: 'dashboard',
        }
      }
      return state
    }

    case 'CHECK_SAVE': {
      const saved = loadGame()
      return { ...state, hasSave: !!(saved && saved.player) }
    }

    case 'SAVE_GAME': {
      if (state.player) saveGame(state)
      return state
    }

    case 'RESET_GAME': {
      localStorage.removeItem('futebolCareer_save')
      return { ...initialState, hasSave: false }
    }

    case 'ADD_NOTIFICATION': {
      return {
        ...state,
        notifications: [...state.notifications, { ...action.payload, id: `notif_${notifId++}`, timestamp: Date.now() }].slice(-10),
      }
    }

    case 'DISMISS_NOTIFICATION': {
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload),
      }
    }

    default:
      return state
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  useEffect(() => {
    dispatch({ type: 'CHECK_SAVE' })
  }, [])

  useEffect(() => {
    if (state.settings.autoSave && state.player) {
      saveGame(state)
    }
  }, [state.player, state.career, state.finances, state.sponsors, state.settings.autoSave])

  const addNotification = useCallback((notification) => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification })
  }, [])

  const dismissNotification = useCallback((id) => {
    dispatch({ type: 'DISMISS_NOTIFICATION', payload: id })
  }, [])

  return (
    <GameContext.Provider value={{ ...state, dispatch, addNotification, dismissNotification }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}

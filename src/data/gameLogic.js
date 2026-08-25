import { MATCH_EVENTS, CLUBS, CAREER_MILESTONES, COMPETITIONS } from './gameData.js'

// Generate random attributes based on position and potential
export function generateInitialAttributes(position, potential = 70) {
  const base = Math.max(40, potential - 20)
  const attrs = {}
  const allAttrs = [
    'pace', 'acceleration', 'stamina', 'strength', 'agility', 'jumping',
    'dribbling', 'passing', 'shooting', 'heading', 'longShots', 'freeKick', 'penalty', 'crossing',
    'vision', 'positioning', 'composure', 'leadership', 'workRate', 'decisions',
    'tackling', 'marking', 'interception', 'aerial',
    'reflexes', 'handling', 'positioningGK', 'kicking', 'oneOnOne'
  ]
  allAttrs.forEach(attr => {
    const variance = Math.floor(Math.random() * 15) - 7
    attrs[attr] = Math.min(99, Math.max(30, base + variance))
  })
  // Boost position-relevant attributes
  if (position === 'GK') {
    ['reflexes', 'handling', 'positioningGK', 'kicking', 'oneOnOne'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 15))
  } else if (['CB'].includes(position)) {
    ['tackling', 'marking', 'interception', 'aerial', 'strength', 'heading'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 12))
  } else if (['LB', 'RB'].includes(position)) {
    ['pace', 'stamina', 'crossing', 'tackling', 'marking'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 10))
  } else if (['CDM', 'CM'].includes(position)) {
    ['passing', 'vision', 'tackling', 'interception', 'stamina', 'workRate'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 12))
  } else if (['CAM'].includes(position)) {
    ['vision', 'passing', 'dribbling', 'shooting', 'composure'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 12))
  } else if (['LM', 'RM', 'LW', 'RW'].includes(position)) {
    ['pace', 'acceleration', 'dribbling', 'crossing', 'stamina'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 12))
  } else if (['ST', 'CF'].includes(position)) {
    ['shooting', 'heading', 'pace', 'strength', 'positioning', 'composure'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 15))
  }
  return attrs
}

// Calculate overall rating
export function calculateOverall(attrs, position) {
  let total = 0
  let count = 0
  const weights = {
    GK: { reflexes: 0.25, handling: 0.2, positioningGK: 0.2, kicking: 0.15, oneOnOne: 0.15, composure: 0.05 },
    CB: { tackling: 0.2, marking: 0.2, interception: 0.15, aerial: 0.15, strength: 0.1, heading: 0.1, positioning: 0.1 },
    LB: { pace: 0.2, stamina: 0.15, crossing: 0.15, tackling: 0.15, marking: 0.15, dribbling: 0.1, passing: 0.1 },
    RB: { pace: 0.2, stamina: 0.15, crossing: 0.15, tackling: 0.15, marking: 0.15, dribbling: 0.1, passing: 0.1 },
    CDM: { tackling: 0.2, interception: 0.15, passing: 0.15, vision: 0.1, stamina: 0.15, strength: 0.1, workRate: 0.15 },
    CM: { passing: 0.2, vision: 0.15, stamina: 0.15, dribbling: 0.1, tackling: 0.1, workRate: 0.15, composure: 0.15 },
    CAM: { vision: 0.2, passing: 0.15, dribbling: 0.15, shooting: 0.15, composure: 0.15, positioning: 0.1, pace: 0.1 },
    LM: { pace: 0.2, dribbling: 0.15, crossing: 0.15, stamina: 0.15, passing: 0.1, shooting: 0.1, acceleration: 0.15 },
    RM: { pace: 0.2, dribbling: 0.15, crossing: 0.15, stamina: 0.15, passing: 0.1, shooting: 0.1, acceleration: 0.15 },
    LW: { pace: 0.2, dribbling: 0.2, shooting: 0.15, acceleration: 0.15, crossing: 0.1, composure: 0.1, stamina: 0.1 },
    RW: { pace: 0.2, dribbling: 0.2, shooting: 0.15, acceleration: 0.15, crossing: 0.1, composure: 0.1, stamina: 0.1 },
    ST: { shooting: 0.3, heading: 0.15, positioning: 0.15, pace: 0.1, strength: 0.1, composure: 0.15 },
    CF: { shooting: 0.2, dribbling: 0.15, vision: 0.1, passing: 0.1, positioning: 0.15, pace: 0.1, composure: 0.1, strength: 0.1 },
  }
  const w = weights[position] || weights.CM
  Object.entries(w).forEach(([attr, weight]) => {
    const val = attrs[attr] || 50
    total += val * weight
    count += weight
  })
  return Math.round(total / count)
}

// Generate match events with difficulty modifier
export function simulateMatchEvents(player, opponent, minutes, position, difficulty = 'normal') {
  const events = []
  const playerClub = CLUBS.find(c => c.id === player.clubId)
  const opponentClub = CLUBS.find(c => c.id === opponent.clubId) || { name: opponent.name, reputation: 70 }
  const diffMultipliers = { easy: 1.15, normal: 1.0, hard: 0.85, legend: 0.7 }
  const diffMult = diffMultipliers[difficulty] || 1.0
  const playerStrength = (player.overall + playerClub.reputation) / 2 * diffMult
  const oppStrength = (opponent.overall || 70) + opponentClub.reputation / 2
  const strengthDiff = playerStrength - oppStrength
  let playerGoals = 0
  let opponentGoals = 0
  let playerEvents = []
  let matchStats = {
    shots: 0,
    shotsOnTarget: 0,
    passes: 0,
    tackles: 0,
    saves: 0,
    cards: 0,
  }

  // Generate events throughout the match
  for (let m = 1; m <= minutes; m++) {
    // Goal chance
    if (Math.random() < 0.008 + (strengthDiff * 0.0001)) {
      const isPlayerTeam = Math.random() < 0.5 + (strengthDiff * 0.005)
      if (isPlayerTeam) {
        playerGoals++
        const scorer = Math.random() < 0.3 ? player.name : `${playerClub.name} (Jogador)`
        events.push({
          minute: m,
          type: 'goal',
          team: 'player',
          text: `⚽ GOL! ${scorer} marca para ${playerClub.name}`,
          isPlayerGoal: scorer === player.name,
        })
        if (scorer === player.name) {
          playerEvents.push({ type: 'goal', minute: m })
          matchStats.shots++
          matchStats.shotsOnTarget++
        }
      } else {
        opponentGoals++
        events.push({
          minute: m,
          type: 'goal',
          team: 'opponent',
          text: `⚽ GOL! ${opponentClub.name} marca`,
        })
      }
    }
    // Player-specific events based on position
    const playerEventChance = 0.02 + (player.overall / 5000)
    if (Math.random() < playerEventChance) {
      const eventType = getPositionEventType(position)
      if (eventType) {
        events.push({
          minute: m,
          type: eventType.type,
          team: 'player',
          text: eventType.text,
          isPlayerEvent: true,
        })
        playerEvents.push({ type: eventType.type, minute: m })
        if (eventType.type === 'shotOnTarget') { matchStats.shots++; matchStats.shotsOnTarget++ }
        if (eventType.type === 'save') { matchStats.saves++ }
        if (eventType.type === 'tackle') { matchStats.tackles++ }
        if (eventType.type === 'keyPass') { matchStats.passes++ }
      }
    }
    // Card events
    if (Math.random() < 0.003) {
      const isYellow = Math.random() < 0.85
      const isPlayer = Math.random() < 0.3
      events.push({
        minute: m,
        type: isYellow ? 'yellowCard' : 'redCard',
        team: isPlayer ? 'player' : 'opponent',
        text: isYellow ? `🟨 Cartão amarelo para ${isPlayer ? player.name : opponentClub.name}` : `🟥 Cartão vermelho!`,
        isPlayerCard: isPlayer,
      })
      if (isPlayer) {
        playerEvents.push({ type: isYellow ? 'yellowCard' : 'redCard', minute: m })
        matchStats.cards++
      }
    }
    // Substitution
    if (Math.random() < 0.005 && m > 60) {
      events.push({
        minute: m,
        type: 'substitution',
        team: 'player',
        text: `🔄 Substituição no ${playerClub.name}`,
      })
    }
  }
  // Calculate match rating
  const rating = calculateMatchRating(playerEvents, position, minutes)
  return {
    playerGoals,
    opponentGoals,
    events: events.sort((a, b) => a.minute - b.minute),
    playerEvents,
    rating,
    result: playerGoals > opponentGoals ? 'win' : playerGoals < opponentGoals ? 'loss' : 'draw',
    stats: matchStats,
  }
}

function getPositionEventType(position) {
  const events = {
    GK: [
      { type: 'save', text: '🧤 Grande defesa do goleiro!' },
      { type: 'save', text: '🧤 Defesa espetacular!' },
    ],
    CB: [
      { type: 'tackle', text: '💪 Desarme perfeito!' },
      { type: 'interception', text: '🛡️ Interceptação crucial!' },
      { type: 'aerial', text: '👤 Cabeceio defensivo!' },
    ],
    LB: [
      { type: 'tackle', text: '💪 Desarme na lateral!' },
      { type: 'crossing', text: '⚡ Cruzamento perigoso!' },
    ],
    RB: [
      { type: 'tackle', text: '💪 Desarme na lateral!' },
      { type: 'crossing', text: '⚡ Cruzamento perigoso!' },
    ],
    CDM: [
      { type: 'tackle', text: '💪 Desarme no meio!' },
      { type: 'interception', text: '🛡️ Interceptação!' },
      { type: 'keyPass', text: '🔑 Passe decisivo!' },
    ],
    CM: [
      { type: 'keyPass', text: '🔑 Passe decisivo!' },
      { type: 'dribble', text: '✨ Drible elegante!' },
      { type: 'tackle', text: '💪 Recuperação de bola!' },
    ],
    CAM: [
      { type: 'keyPass', text: '🔑 Passe em profundidade!' },
      { type: 'dribble', text: '✨ Drible mágico!' },
      { type: 'assist', text: '🎯 Assistência! Que passe!' },
    ],
    LM: [
      { type: 'crossing', text: '⚡ Cruzamento da esquerda!' },
      { type: 'dribble', text: '✨ Finta na ponta!' },
      { type: 'assist', text: '🎯 Assistência!' },
    ],
    RM: [
      { type: 'crossing', text: '⚡ Cruzamento da direita!' },
      { type: 'dribble', text: '✨ Finta na ponta!' },
      { type: 'assist', text: '🎯 Assistência!' },
    ],
    LW: [
      { type: 'dribble', text: '✨ Arrancada pela esquerda!' },
      { type: 'shotOnTarget', text: '🎯 Chute no gol!' },
      { type: 'assist', text: '🎯 Assistência!' },
    ],
    RW: [
      { type: 'dribble', text: '✨ Arrancada pela direita!' },
      { type: 'shotOnTarget', text: '🎯 Chute no gol!' },
      { type: 'assist', text: '🎯 Assistência!' },
    ],
    ST: [
      { type: 'shotOnTarget', text: '🎯 Grande chance!' },
      { type: 'heading', text: '👤 Cabeceio perigoso!' },
      { type: 'dribble', text: '✨ Finta do centroavante!' },
    ],
    CF: [
      { type: 'shotOnTarget', text: '🎯 Chute perigoso!' },
      { type: 'keyPass', text: '🔑 Passe para o gol!' },
      { type: 'dribble', text: '✨ Drible no ataque!' },
    ],
  }
  const posEvents = events[position] || events.CM
  return posEvents[Math.floor(Math.random() * posEvents.length)]
}

function calculateMatchRating(playerEvents, position, minutes) {
  let rating = 6.0
  playerEvents.forEach(e => {
    if (e.type === 'goal') rating += 1.5
    else if (e.type === 'assist') rating += 1.0
    else if (e.type === 'save') rating += 0.4
    else if (e.type === 'tackle') rating += 0.2
    else if (e.type === 'keyPass') rating += 0.3
    else if (e.type === 'interception') rating += 0.2
    else if (e.type === 'dribble') rating += 0.15
    else if (e.type === 'shotOnTarget') rating += 0.2
    else if (e.type === 'yellowCard') rating -= 0.5
    else if (e.type === 'redCard') rating -= 2.0
  })
  // Position-specific bonuses
  if (position === 'GK') {
    const saves = playerEvents.filter(e => e.type === 'save').length
    if (saves >= 3) rating += 0.5
  }
  return Math.min(10, Math.max(4, Math.round(rating * 10) / 10))
}

// Training logic - immutable
export function applyTraining(player, trainingType, difficulty = 'normal') {
  const multipliers = { easy: 1.5, normal: 1.0, hard: 0.7, legend: 0.4 }
  const mult = multipliers[difficulty] || 1.0
  const improvements = {}
  let totalImprovement = 0
  const newAttributes = { ...player.attributes }
  trainingType.attributes.forEach(attr => {
    if (newAttributes[attr] !== undefined && newAttributes[attr] < 99) {
      const baseGain = Math.random() * 2 + 0.5
      const gain = Math.round(baseGain * mult * 10) / 10
      const newVal = Math.min(99, newAttributes[attr] + gain)
      improvements[attr] = Math.round((newVal - newAttributes[attr]) * 10) / 10
      newAttributes[attr] = newVal
      totalImprovement += improvements[attr]
    }
  })
  const newOverall = calculateOverall(newAttributes, player.position)
  const energyCost = trainingType.energyCost
  let newEnergy = player.energy
  if (energyCost > 0) {
    newEnergy = Math.max(0, player.energy - energyCost)
  } else {
    newEnergy = Math.min(100, player.energy - energyCost)
  }
  return { improvements, totalImprovement, energyCost, newAttributes, newOverall, newEnergy }
}

// Financial calculations
export function calculateWeeklySalary(overall, reputation, clubBudget) {
  const base = 1000
  const overallBonus = overall * 50
  const repBonus = reputation * 20
  const clubBonus = clubBudget * 10
  return Math.round((base + overallBonus + repBonus + clubBonus) / 100) * 100
}

export function calculateTransferValue(overall, age, potential) {
  const base = overall * 100000
  const ageFactor = age < 23 ? 1.5 : age < 28 ? 1.2 : age < 32 ? 0.8 : 0.4
  const potentialFactor = potential > 85 ? 1.3 : potential > 75 ? 1.1 : 1.0
  return Math.round((base * ageFactor * potentialFactor) / 100000) * 100000
}

// Check milestone achievements
export function checkMilestones(player, career) {
  const achieved = []
  CAREER_MILESTONES.forEach(m => {
    const req = m.requirement
    let met = false
    if (req.type === 'matches') met = (player.matches || 0) >= req.value
    else if (req.type === 'goals') met = (player.goals || 0) >= req.value
    else if (req.type === 'assists') met = (player.assists || 0) >= req.value
    else if (req.type === 'titles') met = (career.titles?.length || 0) >= req.value
    else if (req.type === 'transfers') met = (career.transfers || 0) >= req.value
    else if (req.type === 'nationalTeam') met = career.nationalTeam?.called || false
    else if (req.type === 'worldCup') met = career.titles?.some(t => t.competition === 'world_cup')
    else if (req.type === 'champions') met = career.titles?.some(t => t.competition === 'champions')
    else if (req.type === 'ballonDor') met = career.awards?.some(a => a.type === 'ballon_dor')
    if (met) achieved.push(m.id)
  })
  return achieved
}

// Season calendar generation - CORRIGIDO
export function generateSeasonCalendar(clubId, year) {
  const club = CLUBS.find(c => c.id === clubId)
  // ✅ CORREÇÃO: filtra pela MESMA LIGA, não apenas pelo país
  const opponents = CLUBS.filter(c => c.id !== clubId && c.league === club.league)
  const calendar = []
  let month = 0 // Janeiro
  let day = 15

  // League matches - rodada dupla (ida e volta)
  const numRounds = Math.min(opponents.length * 2, 38)
  for (let round = 1; round <= numRounds; round++) {
    const oppIndex = (round - 1) % opponents.length
    const opp = opponents[oppIndex]
    calendar.push({
      id: `match_${round}`,
      date: { day, month, year },
      type: 'league',
      competition: club.league,
      round,
      opponent: opp,
      home: round % 2 === 1,
      played: false,
    })
    day += 7
    if (day > 28) {
      day = 5
      month++
      if (month > 11) { month = 0; year++ }
    }
  }

  // Cup matches - usa a copa nacional do país
  const cupNames = {
    'Brasil': 'Copa do Brasil',
    'Espanha': 'Copa del Rey',
    'Inglaterra': 'FA Cup',
    'Alemanha': 'DFB-Pokal',
    'Itália': 'Copa Italia',
    'França': 'Coupe de France',
    'Portugal': 'Taça de Portugal',
    'Holanda': 'KNVB Cup',
    'Bélgica': 'Croky Cup',
    'Turquia': 'Türkiye Kupasi',
    'Escócia': 'Scottish Cup',
  }
  const cupName = cupNames[club.country] || 'Copa Nacional'
  for (let cupRound = 1; cupRound <= 4; cupRound++) {
    const allCupOpponents = CLUBS.filter(c => c.id !== clubId && c.country === club.country)
    const opp = allCupOpponents[Math.floor(Math.random() * allCupOpponents.length)]
    calendar.push({
      id: `cup_${cupRound}`,
      date: { day: Math.floor(Math.random() * 20) + 5, month: cupRound + 2, year },
      type: 'cup',
      competition: cupName,
      round: cupRound,
      opponent: opp,
      home: Math.random() > 0.5,
      played: false,
    })
  }

  // Continental matches (if applicable - reputation > 80)
  if (club.reputation > 80) {
    const isSouthAmerican = club.country === 'Brasil'
    const compName = isSouthAmerican ? 'Libertadores' : 'Champions League'
    const contOpps = CLUBS.filter(c => c.country !== club.country && c.reputation > 75)
    for (let contRound = 1; contRound <= 6; contRound++) {
      const opp = contOpps[Math.floor(Math.random() * contOpps.length)] || opponents[0]
      calendar.push({
        id: `continental_${contRound}`,
        date: { day: Math.floor(Math.random() * 20) + 5, month: (contRound + 4) % 12, year },
        type: 'continental',
        competition: compName,
        round: contRound,
        opponent: opp,
        home: contRound % 2 === 1,
        played: false,
      })
    }
  }

  return calendar.sort((a, b) => {
    const dateA = a.date.month * 30 + a.date.day
    const dateB = b.date.month * 30 + b.date.day
    return dateA - dateB
  })
}

// Save/Load - persist everything
export function saveGame(state) {
  const data = {
    player: state.player,
    career: state.career,
    finances: state.finances,
    sponsors: state.sponsors,
    settings: state.settings,
    timestamp: Date.now(),
  }
  localStorage.setItem('futebolCareer_save', JSON.stringify(data))
  return true
}

export function loadGame() {
  const data = localStorage.getItem('futebolCareer_save')
  if (!data) return null
  try {
    return JSON.parse(data)
  } catch {
    return null
  }
}

export function deleteSave() {
  localStorage.removeItem('futebolCareer_save')
}
// Calculate player potential based on current attributes and position
export function calculatePotential(attrs, position) {
  const overall = calculateOverall(attrs, position)
  const variance = Math.floor(Math.random() * 11) + 15
  return Math.min(99, overall + variance)
}

// Assign an initial club based on nationality and position
export function assignInitialClub(nationality, position) {
  if (nationality === 'Brasil') {
    const brazilClubs = CLUBS.filter(c => c.country === 'Brasil')
    return brazilClubs[Math.floor(Math.random() * brazilClubs.length)]?.id || 'pal'
  }
  const europeClubs = CLUBS.filter(c => c.country !== 'Brasil')
  return europeClubs[Math.floor(Math.random() * europeClubs.length)]?.id || 'rea'
}



import React, { useState, useEffect, useRef } from 'react'
import { useGame } from '../context/GameContext.jsx'
import { simulateMatchEvents } from '../data/gameLogic.js'
import { CLUBS } from '../data/gameData.js'
import { Trophy, Clock, Play, RotateCcw, Home } from 'lucide-react'

export default function Match() {
  const { player, career, dispatch } = useGame()
  const [phase, setPhase] = useState('preview') // preview, playing, finished
  const [minute, setMinute] = useState(0)
  const [events, setEvents] = useState([])
  const [score, setScore] = useState({ player: 0, opponent: 0 })
  const [matchRating, setMatchRating] = useState(6.0)
  const [playerEvents, setPlayerEvents] = useState([])
  const [fixedOpponent, setFixedOpponent] = useState(null)
  const intervalRef = useRef(null)

  const nextMatch = career.calendar?.find(m => !m.played)
  const club = CLUBS.find(c => c.id === player.clubId)
  
  // Fix opponent when entering preview phase
  useEffect(() => {
    if (phase === 'preview' && nextMatch?.opponent && !fixedOpponent) {
      setFixedOpponent(nextMatch.opponent)
    }
  }, [phase, nextMatch, fixedOpponent])
  
  const opponent = fixedOpponent || nextMatch?.opponent || { name: 'Adversário', reputation: 70 }

  const startMatch = () => {
    // Fix opponent at match start
    const currentOpponent = nextMatch?.opponent || { name: 'Adversário', reputation: 70 }
    setFixedOpponent(currentOpponent)
    
    setPhase('playing')
    setMinute(0)
    setEvents([])
    setScore({ player: 0, opponent: 0 })
    setPlayerEvents([])

    const result = simulateMatchEvents(player, currentOpponent, 90, player.position)

    let currentMinute = 0
    intervalRef.current = setInterval(() => {
      currentMinute += 1
      setMinute(currentMinute)

      // Add events at their minute
      const newEvents = result.events.filter(e => e.minute === currentMinute)
      if (newEvents.length > 0) {
        setEvents(prev => [...prev, ...newEvents])
        newEvents.forEach(e => {
          if (e.team === 'player' && e.type === 'goal') {
            setScore(s => ({ ...s, player: s.player + 1 }))
          } else if (e.team === 'opponent' && e.type === 'goal') {
            setScore(s => ({ ...s, opponent: s.opponent + 1 }))
          }
        })
      }

      if (currentMinute >= 90) {
        clearInterval(intervalRef.current)
        setPhase('finished')
        setMatchRating(result.rating)
        setPlayerEvents(result.playerEvents)

        const playerGoals = result.playerEvents.filter(e => e.type === 'goal').length
        const playerAssists = result.playerEvents.filter(e => e.type === 'assist').length

        dispatch({
          type: 'PLAY_MATCH',
          payload: {
            matchResult: {
              matchId: nextMatch?.id,
              opponent: currentOpponent.name,
              playerGoals: playerGoals,
              playerAssists: playerAssists,
              playerScore: result.playerGoals,
              opponentScore: result.opponentGoals,
              rating: result.rating,
              result: result.result,
              events: result.events,
              date: career.week,
            },
          },
        })
      }
    }, 80) // ~7 seconds for full match
  }

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const getEventClass = (type) => {
    if (type === 'goal') return 'goal'
    if (type === 'assist') return 'assist'
    if (type === 'yellowCard') return 'yellow'
    if (type === 'redCard') return 'red'
    if (type === 'substitution') return 'sub'
    return ''
  }

  const getEventColor = (type) => {
    const colors = {
      goal: '#22c55e', assist: '#3b82f6', yellowCard: '#f59e0b',
      redCard: '#ef4444', substitution: '#10b981', save: '#3b82f6',
      tackle: '#22c55e', keyPass: '#3b82f6', dribble: '#10b981',
      shotOnTarget: '#f59e0b', shotOffTarget: '#ef4444',
    }
    return colors[type] || 'var(--text-muted)'
  }

  return (
    <div className="page animate-fade-in">
      <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px' }}>
        <Trophy size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Partida
      </h1>

      {/* Scoreboard */}
      <div className="card" style={{ marginBottom: '24px', textAlign: 'center' }}>
        <div className="match-scoreboard" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', marginBottom: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 700 }}>{club?.name}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Casa</div>
          </div>
          <div className="match-score" style={{
            fontSize: '48px', fontWeight: 900, fontFamily: 'monospace',
            background: 'var(--bg-tertiary)', padding: '8px 24px', borderRadius: 'var(--radius-lg)'
          }}>
            {score.player} - {score.opponent}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 700 }}>{opponent.name}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{nextMatch?.competition || 'Amistoso'}</div>
          </div>
        </div>

        {/* Timer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
          <Clock size={18} color="var(--primary)" />
          <span style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'monospace' }}>
            {phase === 'preview' ? "0'" : `${minute}'`}
          </span>
        </div>

        {/* Progress bar */}
        <div className="progress-bar">
          <div className="progress-bar-fill primary" style={{ width: `${(minute / 90) * 100}%`, transition: 'width 0.1s linear' }} />
        </div>

        {/* Controls */}
        <div style={{ marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {phase === 'preview' && (
            <button onClick={startMatch} className="btn btn-primary btn-lg">
              <Play size={20} /> Iniciar Partida
            </button>
          )}
          {phase === 'finished' && (
            <>
              <button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'dashboard' })} className="btn btn-primary">
                <Home size={18} /> Voltar ao Painel
              </button>
              <button onClick={startMatch} className="btn btn-secondary">
                <RotateCcw size={18} /> Jogar Novamente
              </button>
            </>
          )}
        </div>
      </div>

      {/* Match Result Summary */}
      {phase === 'finished' && (
        <div className="card animate-fade-in" style={{ marginBottom: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px' }}>
            {score.player > score.opponent ? 'Vitória!' : score.player < score.opponent ? 'Derrota' : 'Empate'}
          </div>
          <div style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
            Nota: <span style={{ fontWeight: 800, color: 'var(--primary)' }}>{matchRating}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '12px', flexWrap: 'wrap' }}>
            <div><span style={{ color: 'var(--success)', fontWeight: 700 }}>{playerEvents.filter(e => e.type === 'goal').length}</span> gols</div>
            <div><span style={{ color: 'var(--secondary)', fontWeight: 700 }}>{playerEvents.filter(e => e.type === 'assist').length}</span> assistências</div>
          </div>
        </div>
      )}

      {/* Events Feed */}
      <div className="card">
        <div className="card-header">
          <span className="card-title">Lances da Partida</span>
          <span className="badge badge-secondary">{events.length} eventos</span>
        </div>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {events.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px' }}>
              {phase === 'preview' ? 'A partida ainda não começou' : 'Aguardando lances...'}
            </p>
          ) : (
            events.map((event, idx) => (
              <div key={idx} className={`match-event ${getEventClass(event.type)} animate-fade-in`}>
                <span className="match-event-time">{event.minute}'</span>
                <div className="match-event-icon" style={{ background: `${getEventColor(event.type)}20`, color: getEventColor(event.type) }}>
                  <span style={{ fontSize: '14px' }}>
                    {event.type === 'goal' ? '⚽' : event.type === 'yellowCard' ? '🟨' : event.type === 'redCard' ? '🟥' : event.type === 'substitution' ? '🔄' : '•'}
                  </span>
                </div>
                <span className="match-event-text">{event.text}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

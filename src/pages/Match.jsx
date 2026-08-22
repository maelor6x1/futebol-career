import React, { useState, useEffect, useCallback } from 'react'
import { useGame } from '../context/GameContext.jsx'
import { simulateMatch } from '../data/gameLogic.js'
import { Trophy, Clock, Play, RotateCcw, Home } from 'lucide-react'

export default function Match() {
  const { player, currentMatch, dispatch, settings } = useGame()
  const [phase, setPhase] = useState('preview')
  const [minute, setMinute] = useState(0)
  const [events, setEvents] = useState([])
  const [matchResult, setMatchResult] = useState(null)
  const [timer, setTimer] = useState(null)

  if (!player || !currentMatch) return null

  const { opponent, competition, isHome } = currentMatch

  const startMatch = () => {
    setPhase('playing')
    setMinute(0)
    setEvents([])
    setMatchResult(null)

    let currentMinute = 0
    const matchEvents = []
    const interval = setInterval(() => {
      currentMinute += 1
      setMinute(currentMinute)

      if (currentMinute === 90) {
        clearInterval(interval)
        const result = simulateMatch(player, opponent, settings.difficulty, matchEvents)
        setMatchResult(result)
        setPhase('finished')
        dispatch({ type: 'FINISH_MATCH', payload: result })
      }
    }, 50)

    setTimer(interval)
  }

  const resetMatch = () => {
    if (timer) clearInterval(timer)
    setPhase('preview')
    setMinute(0)
    setEvents([])
    setMatchResult(null)
    dispatch({ type: 'RESET_MATCH' })
  }

  const getScore = () => {
    if (!matchResult) return { home: 0, away: 0 }
    return {
      home: isHome ? matchResult.playerGoals : matchResult.opponentGoals,
      away: isHome ? matchResult.opponentGoals : matchResult.playerGoals,
    }
  }

  const score = getScore()

  return (
    <div className="page animate-fade-in">
      <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
        <Trophy size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        {competition}
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
        {isHome ? 'Em casa' : 'Fora de casa'} vs {opponent.name}
      </p>

      {/* Scoreboard */}
      <div className="card" style={{ marginBottom: '24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px', marginBottom: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>
              {isHome ? player.club?.name || 'Seu Time' : opponent.name}
            </div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--primary)' }}>
              {score.home}
            </div>
          </div>
          <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-muted)' }}>×</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>
              {isHome ? opponent.name : player.club?.name || 'Seu Time'}
            </div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--primary)' }}>
              {score.away}
            </div>
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
        <div style={{ marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
          {phase === 'preview' && (
            <button onClick={startMatch} className="btn btn-primary btn-lg">
              <Play size={20} /> Iniciar Partida
            </button>
          )}
          {phase === 'finished' && (
            <>
              <button onClick={resetMatch} className="btn btn-secondary btn-lg">
                <RotateCcw size={18} /> Revanche
              </button>
              <button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'dashboard' })} className="btn btn-primary btn-lg">
                <Home size={18} /> Voltar ao Painel
              </button>
            </>
          )}
        </div>
      </div>

      {/* Match Events */}
      {events.length > 0 && (
        <div className="card">
          <div className="card-header">
            <span className="card-title">Lances da Partida</span>
          </div>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {events.map((evt, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '10px 0', borderBottom: '1px solid var(--border)',
                color: evt.type === 'goal' ? 'var(--success)' : evt.type === 'yellowCard' ? 'var(--accent)' : 'var(--text-secondary)'
              }}>
                <span style={{ fontFamily: 'monospace', fontWeight: 700, minWidth: '40px' }}>{evt.minute}'</span>
                <span>{evt.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Match Result */}
      {matchResult && (
        <div className="card animate-fade-in" style={{ marginTop: '24px', borderColor: 'var(--primary)' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>
              {matchResult.result === 'win' ? 'Vitória!' : matchResult.result === 'draw' ? 'Empate' : 'Derrota'}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              {matchResult.playerGoals > 0 && (
                <span className="badge badge-success">Gols: {matchResult.playerGoals}</span>
              )}
              {matchResult.assists > 0 && (
                <span className="badge badge-primary">Assistências: {matchResult.assists}</span>
              )}
              {matchResult.rating && (
                <span className="badge badge-accent">Nota: {matchResult.rating}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

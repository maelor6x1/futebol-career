import React from 'react'
import { useGame } from '../context/GameContext.jsx'
import { CalendarDays, Trophy, CheckCircle, Circle } from 'lucide-react'

export default function Calendar() {
  const { calendar, player, dispatch } = useGame()

  if (!calendar || calendar.length === 0) {
    return (
      <div className="page animate-fade-in">
        <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px' }}>
          <CalendarDays size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Calendário
        </h1>
        <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ color: 'var(--text-muted)' }}>Nenhuma partida agendada</p>
        </div>
      </div>
    )
  }

  const handlePlay = (match) => {
    dispatch({ type: 'START_MATCH', payload: match })
    dispatch({ type: 'SET_PAGE', payload: 'match' })
  }

  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  return (
    <div className="page animate-fade-in">
      <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px' }}>
        <CalendarDays size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Calendário
      </h1>

      <div className="grid grid-2">
        {calendar.map((match, idx) => {
          const isPlayed = match.played
          const isHome = match.isHome
          const opponent = match.opponent

          return (
            <div key={idx} className="card" style={{
              opacity: isPlayed ? 0.7 : 1,
              borderColor: isPlayed ? 'var(--border)' : 'var(--primary)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Trophy size={16} color="var(--accent)" />
                  <span style={{ fontWeight: 700, fontSize: '14px' }}>{match.competition}</span>
                </div>
                {isPlayed ? (
                  <CheckCircle size={16} color="var(--success)" />
                ) : (
                  <Circle size={16} color="var(--text-muted)" />
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    {isHome ? (player.club?.name || 'Seu Time') : opponent.name}
                  </div>
                </div>
                <div style={{ fontWeight: 800, fontSize: '20px', padding: '0 16px' }}>
                  {isPlayed ? `${match.result.home} - ${match.result.away}` : 'vs'}
                </div>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    {isHome ? opponent.name : (player.club?.name || 'Seu Time')}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {match.day} de {months[match.month]} · {isHome ? 'Casa' : 'Fora'}
                </span>
                {!isPlayed && (
                  <button onClick={() => handlePlay(match)} className="btn btn-primary btn-sm">
                    Jogar
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

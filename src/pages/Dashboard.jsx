import React from 'react'
import { useGame } from '../context/GameContext.jsx'
import { ATTRIBUTES } from '../data/gameData.js'
import {
  Zap, Battery, Heart, TrendingUp, Trophy, Calendar,
  Users, Newspaper, Star
} from 'lucide-react'

export default function Dashboard() {
  const { player, career, finances, dispatch } = useGame()

  if (!player) return null

  const nextMatch = career.calendar?.find(m => !m.played)
  const club = { name: player.clubName || 'Clube' }

  const getBarColor = (val) => {
    if (val >= 80) return 'var(--success)'
    if (val >= 60) return 'var(--accent)'
    return 'var(--danger)'
  }

  return (
    <div className="page animate-fade-in">
      <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px' }}>
        Painel Principal
      </h1>

      {/* Top Stats Cards */}
      <div className="grid grid-4" style={{ marginBottom: '24px' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Overall</div>
          <div style={{ fontSize: '36px', fontWeight: 900, color: 'var(--primary)' }}>{player.overall}</div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>OVR</div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Energia</div>
          <div style={{ fontSize: '36px', fontWeight: 900, color: getBarColor(player.energy) }}>{player.energy}%</div>
          <div className="progress-bar" style={{ marginTop: '8px' }}>
            <div className="progress-bar-fill primary" style={{ width: `${player.energy}%`, background: getBarColor(player.energy) }} />
          </div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Moral</div>
          <div style={{ fontSize: '36px', fontWeight: 900, color: getBarColor(player.morale) }}>{player.morale}%</div>
          <div className="progress-bar" style={{ marginTop: '8px' }}>
            <div className="progress-bar-fill primary" style={{ width: `${player.morale}%`, background: getBarColor(player.morale) }} />
          </div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Saldo</div>
          <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--primary)' }}>
            ${(finances.balance || 0).toLocaleString()}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>semanal: ${(finances.weeklySalary || 0).toLocaleString()}</div>
        </div>
      </div>

      <div className="grid grid-2">
        {/* Attributes */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">Atributos</span>
            <span className="badge badge-primary">{player.position}</span>
          </div>
          {Object.entries(ATTRIBUTES).map(([category, attrs]) => (
            <div key={category} style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                {category === 'physical' ? 'Físico' : category === 'technical' ? 'Técnico' : category === 'mental' ? 'Mental' : category === 'defensive' ? 'Defensivo' : 'Goleiro'}
              </div>
              {attrs.map(attr => {
                const val = player.attributes?.[attr.id] || 50
                return (
                  <div key={attr.id} className="stat-row">
                    <span className="stat-label">{attr.name}</span>
                    <div className="stat-bar">
                      <div className="stat-bar-fill" style={{
                        width: `${val}%`,
                        background: val >= 80 ? 'var(--success)' : val >= 60 ? 'var(--accent)' : 'var(--danger)'
                      }} />
                    </div>
                    <span className="stat-value">{Math.round(val)}</span>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Next Match */}
          <div className="card">
            <div className="card-header">
              <span className="card-title">Próxima Partida</span>
              <Calendar size={18} color="var(--text-muted)" />
            </div>
            {nextMatch ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 700 }}>{club.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Casa</div>
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--text-muted)' }}>VS</div>
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 700 }}>{nextMatch.opponent?.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{nextMatch.competition}</div>
                  </div>
                </div>
                <button
                  onClick={() => dispatch({ type: 'SET_PAGE', payload: 'match' })}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Trophy size={16} /> Jogar Partida
                </button>
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>Nenhuma partida agendada</p>
            )}
          </div>

          {/* Relationships */}
          <div className="card">
            <div className="card-header">
              <span className="card-title">Relacionamentos</span>
              <Users size={18} color="var(--text-muted)" />
            </div>
            {[
              { label: 'Torcida', value: career.fanSupport, icon: Heart },
              { label: 'Técnico', value: career.coachRelation, icon: Star },
              { label: 'Elenco', value: career.teamRelation, icon: Users },
              { label: 'Mídia', value: career.mediaRelation, icon: Newspaper },
            ].map(rel => {
              const RelIcon = rel.icon
              return (
                <div key={rel.label} style={{ marginBottom: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <RelIcon size={14} /> {rel.label}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 700 }}>{rel.value}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill primary" style={{
                      width: `${rel.value}%`,
                      background: rel.value >= 70 ? 'var(--success)' : rel.value >= 40 ? 'var(--accent)' : 'var(--danger)'
                    }} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Career Stats */}
          <div className="card">
            <div className="card-header">
              <span className="card-title">Estatísticas da Carreira</span>
              <TrendingUp size={18} color="var(--text-muted)" />
            </div>
            <div className="grid grid-3" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary)' }}>{player.matches || 0}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Jogos</div>
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--success)' }}>{player.goals || 0}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Gols</div>
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--secondary)' }}>{player.assists || 0}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Assistências</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

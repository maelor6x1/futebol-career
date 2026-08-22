import React from 'react'
import { useGame } from '../context/GameContext.jsx'
import { TrendingUp, Trophy, Star, Award, Shield, Globe } from 'lucide-react'

export default function Career() {
  const { player, career } = useGame()

  if (!player) return null

  const { stats, history, titles, nationalTeam } = career || {}

  return (
    <div className="page animate-fade-in">
      <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px' }}>
        <TrendingUp size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Carreira
      </h1>

      {/* Career Stats */}
      <div className="grid grid-3" style={{ marginBottom: '24px' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <Trophy size={24} color="var(--accent)" style={{ marginBottom: '8px' }} />
          <div style={{ fontSize: '28px', fontWeight: 800 }}>{stats?.matches || 0}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Partidas</div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Star size={24} color="var(--primary)" style={{ marginBottom: '8px' }} />
          <div style={{ fontSize: '28px', fontWeight: 800 }}>{stats?.goals || 0}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Gols</div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Award size={24} color="var(--success)" style={{ marginBottom: '8px' }} />
          <div style={{ fontSize: '28px', fontWeight: 800 }}>{stats?.assists || 0}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Assistências</div>
        </div>
      </div>

      {/* Club History */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div className="card-header">
          <Shield size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          <span className="card-title">Histórico de Clubes</span>
        </div>
        {history && history.length > 0 ? (
          <div>
            {history.map((entry, idx) => (
              <div key={idx} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px 0', borderBottom: '1px solid var(--border)',
              }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{entry.clubName}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {entry.seasonStart}-{entry.seasonEnd || 'Atual'}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {entry.matches} jogos · {entry.goals} gols
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px' }}>
            Nenhum histórico de clubes
          </p>
        )}
      </div>

      {/* Titles */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div className="card-header">
          <Trophy size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          <span className="card-title">Títulos</span>
          <span className="badge badge-accent">{titles?.length || 0}</span>
        </div>
        {titles && titles.length > 0 ? (
          <div>
            {titles.map((title, idx) => (
              <div key={idx} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px 0', borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Trophy size={16} color="var(--accent)" />
                  <span style={{ fontWeight: 700 }}>{title.name}</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{title.season}</span>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px' }}>
            Nenhum título conquistado ainda
          </p>
        )}
      </div>

      {/* National Team */}
      <div className="card">
        <div className="card-header">
          <Globe size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          <span className="card-title">Seleção Nacional</span>
        </div>
        {nationalTeam ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontWeight: 700 }}>{nationalTeam.country}</span>
              <span className="badge badge-primary">{nationalTeam.appearances} jogos</span>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: 800 }}>{nationalTeam.goals}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Gols</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: 800 }}>{nationalTeam.assists}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Assistências</div>
              </div>
            </div>
          </div>
        ) : (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px' }}>
            Ainda não convocado para a seleção
          </p>
        )}
      </div>
    </div>
  )
}

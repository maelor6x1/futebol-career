import React, { useState } from 'react'
import { useGame } from '../context/GameContext.jsx'
import { CLUBS } from '../data/gameData.js'
import { ArrowLeftRight, Globe, MapPin, Star, DollarSign } from 'lucide-react'

export default function Transfers() {
  const { player, dispatch } = useGame()
  const [filter, setFilter] = useState('all')

  if (!player) return null

  const currentClub = player.club
  const availableClubs = CLUBS.filter(c => c.id !== currentClub?.id)

  const filteredClubs = filter === 'all'
    ? availableClubs
    : availableClubs.filter(c => c.country === filter)

  const countries = [...new Set(CLUBS.map(c => c.country))]

  const handleTransfer = (club) => {
    if (window.confirm(`Deseja se transferir para ${club.name}?`)) {
      dispatch({ type: 'TRANSFER', payload: club })
    }
  }

  return (
    <div className="page animate-fade-in">
      <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
        <ArrowLeftRight size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Transferências
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
        Clube atual: <span style={{ fontWeight: 700 }}>{currentClub?.name || 'Sem clube'}</span>
      </p>

      {/* Filter */}
      <div style={{ marginBottom: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setFilter('all')}
          className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
        >
          <Globe size={14} style={{ marginRight: '4px' }} /> Todos
        </button>
        {countries.map(country => (
          <button
            key={country}
            onClick={() => setFilter(country)}
            className={`btn btn-sm ${filter === country ? 'btn-primary' : 'btn-secondary'}`}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Clubs Grid */}
      <div className="grid grid-3">
        {filteredClubs.map(club => {
          const canAfford = club.budget >= (player.marketValue || 0) * 0.5
          const reputationDiff = club.reputation - (currentClub?.reputation || 0)

          return (
            <div key={club.id} className="card" style={{
              borderColor: reputationDiff > 5 ? 'var(--accent)' : 'var(--border)',
              opacity: canAfford ? 1 : 0.6,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: 700, fontSize: '16px' }}>{club.name}</span>
                <span className="badge badge-secondary" style={{ fontSize: '10px' }}>{club.league}</span>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                  <MapPin size={12} color="var(--text-muted)" />
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{club.country}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                  <Star size={12} color="var(--accent)" />
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Reputação {club.reputation}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <DollarSign size={12} color="var(--primary)" />
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Orçamento ${club.budget}M</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <div style={{
                  width: '100%', height: '6px', borderRadius: '3px',
                  background: 'var(--bg-tertiary)', overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${club.reputation}%`, height: '100%',
                    background: club.reputation >= 85 ? 'var(--accent)' : club.reputation >= 70 ? 'var(--primary)' : 'var(--text-muted)',
                    borderRadius: '3px',
                  }} />
                </div>
              </div>

              <button
                onClick={() => handleTransfer(club)}
                disabled={!canAfford}
                className="btn btn-primary btn-sm"
                style={{ width: '100%' }}
              >
                {canAfford ? 'Propor Transferência' : 'Fora de Alcance'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

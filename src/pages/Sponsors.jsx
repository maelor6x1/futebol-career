import React from 'react'
import { useGame } from '../context/GameContext.jsx'
import { SPONSORS } from '../data/gameData.js'
import { HeartHandshake, Check, X, Star, DollarSign } from 'lucide-react'

export default function Sponsors() {
  const { sponsors, dispatch } = useGame()
  const signedIds = new Set(sponsors.map(s => s.id))

  const availableSponsors = SPONSORS.filter(s => !signedIds.has(s.id))

  const handleSign = (sponsor) => {
    dispatch({ type: 'SIGN_SPONSOR', payload: sponsor })
  }

  const handleEnd = (sponsorId) => {
    dispatch({ type: 'END_SPONSOR', payload: sponsorId })
  }

  const getTypeLabel = (type) => {
    const labels = {
      boots: 'Chuteiras', energy: 'Energético', beverage: 'Bebida',
      gaming: 'Games', betting: 'Apostas', tech: 'Tecnologia',
      luxury: 'Luxo', car: 'Automóvel',
    }
    return labels[type] || type
  }

  return (
    <div className="page animate-fade-in">
      <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px' }}>
        <HeartHandshake size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Patrocinadores
      </h1>

      {/* Active Sponsors */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div className="card-header">
          <span className="card-title">Patrocinadores Ativos</span>
          <span className="badge badge-primary">{sponsors.length}</span>
        </div>
        {sponsors.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px' }}>
            Nenhum patrocinador ativo
          </p>
        ) : (
          <div className="grid grid-2">
            {sponsors.map(sponsor => (
              <div key={sponsor.id} className="card" style={{ borderColor: 'var(--primary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 700, fontSize: '16px' }}>{sponsor.name}</span>
                  <span className="badge badge-primary">{getTypeLabel(sponsor.type)}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                  <DollarSign size={14} color="var(--primary)" />
                  <span style={{ fontWeight: 700, color: 'var(--primary)' }}>${sponsor.bonus.toLocaleString()}</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>/semana</span>
                </div>
                <button onClick={() => handleEnd(sponsor.id)} className="btn btn-danger btn-sm" style={{ width: '100%' }}>
                  <X size={14} /> Encerrar Contrato
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Available Sponsors */}
      <div className="card">
        <div className="card-header">
          <span className="card-title">Disponíveis</span>
          <span className="badge badge-secondary">{availableSponsors.length}</span>
        </div>
        <div className="grid grid-3">
          {availableSponsors.map(sponsor => (
            <div key={sponsor.id} className="card" style={{ opacity: 0.9 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: 700 }}>{sponsor.name}</span>
                <span className="badge badge-secondary" style={{ fontSize: '10px' }}>{getTypeLabel(sponsor.type)}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                <Star size={12} color="var(--accent)" />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Reputação {sponsor.reputation}</span>
              </div>
              <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '12px' }}>
                ${sponsor.bonus.toLocaleString()}/semana
              </div>
              <button onClick={() => handleSign(sponsor)} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                <Check size={14} /> Assinar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { useGame } from '../context/GameContext.jsx'
import { TRAINING_TYPES } from '../data/gameData.js'
import { applyTraining } from '../data/gameLogic.js'
import { Dumbbell, Zap, BatteryCharging, Check, AlertTriangle } from 'lucide-react'

const iconMap = {
  Dumbbell: Dumbbell,
  Footprints: Zap,
  Brain: Zap,
  Shield: Zap,
  Hand: Zap,
  Flag: Zap,
  BatteryCharging: BatteryCharging,
}

export default function Training() {
  const { player, dispatch, settings } = useGame()
  const [result, setResult] = useState(null)
  const [training, setTraining] = useState(false)

  if (!player) return null

  const handleTrain = (trainingType) => {
    if (player.energy < trainingType.energyCost && trainingType.energyCost > 0) {
      setResult({ error: 'Energia insuficiente!' })
      return
    }

    setTraining(true)
    const res = applyTraining(player, trainingType, settings.difficulty)

    dispatch({
      type: 'TRAIN',
      payload: { trainingType, ...res },
    })

    setResult({
      type: trainingType,
      improvements: res.improvements,
      totalImprovement: res.totalImprovement,
      energyCost: res.energyCost,
    })

    setTimeout(() => setTraining(false), 500)
  }

  return (
    <div className="page animate-fade-in">
      <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
        <Dumbbell size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Centro de Treinamento
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
        Energia atual: <span style={{ fontWeight: 700, color: player.energy > 30 ? 'var(--success)' : 'var(--danger)' }}>{player.energy}%</span>
      </p>

      {result?.error && (
        <div className="card" style={{ borderColor: 'var(--danger)', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--danger)' }}>
            <AlertTriangle size={18} /> {result.error}
          </div>
        </div>
      )}

      {result && !result.error && (
        <div className="card animate-fade-in" style={{ marginBottom: '24px', borderColor: 'var(--primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Check size={20} color="var(--success)" />
            <span style={{ fontWeight: 700 }}>Treino concluído: {result.type.name}</span>
          </div>
          {Object.entries(result.improvements).length > 0 ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {Object.entries(result.improvements).map(([attr, gain]) => (
                <span key={attr} className="badge badge-primary">
                  {attr}: +{gain}
                </span>
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--text-secondary)' }}>Energia recuperada!</p>
          )}
          <div style={{ marginTop: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
            Energia: {result.energyCost > 0 ? `-${result.energyCost}%` : `+${Math.abs(result.energyCost)}%`}
          </div>
        </div>
      )}

      <div className="grid grid-3">
        {TRAINING_TYPES.map(tt => {
          const Icon = iconMap[tt.icon] || Dumbbell
          const canTrain = tt.energyCost <= 0 || player.energy >= tt.energyCost
          return (
            <div key={tt.id} className="card" style={{ opacity: canTrain ? 1 : 0.6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Icon size={20} color="var(--primary)" />
                </div>
                <div>
                  <div style={{ fontWeight: 700 }}>{tt.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{tt.description}</div>
                </div>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Atributos:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {tt.attributes.map(attr => (
                    <span key={attr} className="badge badge-secondary" style={{ fontSize: '10px', padding: '2px 6px' }}>
                      {attr}
                    </span>
                  ))}
                  {tt.attributes.length === 0 && (
                    <span className="badge badge-accent" style={{ fontSize: '10px' }}>Recuperação</span>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: tt.energyCost > 0 ? 'var(--accent)' : 'var(--success)' }}>
                  {tt.energyCost > 0 ? `-${tt.energyCost}% energia` : `+${Math.abs(tt.energyCost)}% energia`}
                </span>
                <button
                  onClick={() => handleTrain(tt)}
                  disabled={!canTrain || training}
                  className="btn btn-primary btn-sm"
                >
                  {training ? '...' : 'Treinar'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

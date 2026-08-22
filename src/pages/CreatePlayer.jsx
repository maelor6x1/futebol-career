import React, { useState } from 'react'
import { useGame } from '../context/GameContext.jsx'
import { POSITIONS, NATIONALITIES, CLUBS } from '../data/gameData.js'
import { generateInitialAttributes, calculateOverall } from '../data/gameLogic.js'
import { ChevronRight, ChevronLeft, Check } from 'lucide-react'

export default function CreatePlayer() {
  const { dispatch } = useGame()
  const [step, setStep] = useState(1)
  const [playerData, setPlayerData] = useState({
    name: '',
    nationality: 'Brasil',
    age: 18,
    position: 'ST',
    clubId: 'pal',
    height: 180,
    weight: 75,
    preferredFoot: 'right',
    potential: 75,
  })

  const update = (field, value) => setPlayerData(p => ({ ...p, [field]: value }))

  const handleCreate = () => {
    const attributes = generateInitialAttributes(playerData.position, playerData.potential)
    const overall = calculateOverall(attributes, playerData.position)
    const club = CLUBS.find(c => c.id === playerData.clubId)

    dispatch({
      type: 'CREATE_PLAYER',
      payload: {
        ...playerData,
        attributes,
        overall,
        energy: 100,
        morale: 80,
        goals: 0,
        assists: 0,
        matches: 0,
        clubName: club.name,
        season: 2024,
      },
    })
  }

  const brazilClubs = CLUBS.filter(c => c.country === 'Brasil')
  const europeClubs = CLUBS.filter(c => c.country !== 'Brasil')

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px', background: 'var(--bg-primary)' }}>
      <div className="animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, textAlign: 'center', marginBottom: '8px' }}>
          Nova Carreira
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '32px' }}>
          Passo {step} de 4
        </p>

        {/* Progress */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
          {[1,2,3,4].map(s => (
            <div key={s} style={{
              flex: 1,
              height: '4px',
              borderRadius: '2px',
              background: s <= step ? 'var(--primary)' : 'var(--bg-tertiary)',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="card animate-fade-in">
            <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Informações Básicas</h2>
            <div className="form-group">
              <label>Nome do Jogador</label>
              <input
                value={playerData.name}
                onChange={e => update('name', e.target.value)}
                placeholder="Ex: João Silva"
              />
            </div>
            <div className="form-group">
              <label>Nacionalidade</label>
              <select value={playerData.nationality} onChange={e => update('nationality', e.target.value)}>
                {NATIONALITIES.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Idade: {playerData.age} anos</label>
              <input
                type="range" min={16} max={35} value={playerData.age}
                onChange={e => update('age', parseInt(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label>Potencial: {playerData.potential}</label>
              <input
                type="range" min={50} max={99} value={playerData.potential}
                onChange={e => update('potential', parseInt(e.target.value))}
              />
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Potencial define o teto de evolução do jogador
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Position & Club */}
        {step === 2 && (
          <div className="card animate-fade-in">
            <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Posição e Clube</h2>
            <div className="form-group">
              <label>Posição</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {POSITIONS.map(pos => (
                  <button
                    key={pos.id}
                    onClick={() => update('position', pos.id)}
                    style={{
                      padding: '10px',
                      borderRadius: 'var(--radius-md)',
                      border: playerData.position === pos.id ? '2px solid var(--primary)' : '1px solid var(--border)',
                      background: playerData.position === pos.id ? 'rgba(16,185,129,0.1)' : 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    <div>{pos.abbr}</div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 400 }}>{pos.name}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Clube Inicial</label>
              <select value={playerData.clubId} onChange={e => update('clubId', e.target.value)}>
                <optgroup label="Brasil">
                  {brazilClubs.map(c => <option key={c.id} value={c.id}>{c.name} · {c.league}</option>)}
                </optgroup>
                <optgroup label="Europa">
                  {europeClubs.map(c => <option key={c.id} value={c.id}>{c.name} · {c.league}</option>)}
                </optgroup>
              </select>
            </div>
          </div>
        )}

        {/* Step 3: Physical */}
        {step === 3 && (
          <div className="card animate-fade-in">
            <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Características Físicas</h2>
            <div className="form-group">
              <label>Altura: {playerData.height} cm</label>
              <input
                type="range" min={160} max={210} value={playerData.height}
                onChange={e => update('height', parseInt(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label>Peso: {playerData.weight} kg</label>
              <input
                type="range" min={55} max={110} value={playerData.weight}
                onChange={e => update('weight', parseInt(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label>Pé Preferido</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['right', 'left', 'both'].map(foot => (
                  <button
                    key={foot}
                    onClick={() => update('preferredFoot', foot)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      borderRadius: 'var(--radius-md)',
                      border: playerData.preferredFoot === foot ? '2px solid var(--primary)' : '1px solid var(--border)',
                      background: playerData.preferredFoot === foot ? 'rgba(16,185,129,0.1)' : 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                  >
                    {foot === 'right' ? 'Direito' : foot === 'left' ? 'Esquerdo' : 'Ambos'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Summary */}
        {step === 4 && (
          <div className="card animate-fade-in">
            <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Resumo</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Nome</span>
                <span style={{ fontWeight: 600 }}>{playerData.name || 'Não definido'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Nacionalidade</span>
                <span style={{ fontWeight: 600 }}>{playerData.nationality}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Posição</span>
                <span style={{ fontWeight: 600 }}>{POSITIONS.find(p => p.id === playerData.position)?.name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Clube</span>
                <span style={{ fontWeight: 600 }}>{CLUBS.find(c => c.id === playerData.clubId)?.name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Idade / Potencial</span>
                <span style={{ fontWeight: 600 }}>{playerData.age} anos / {playerData.potential}</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
          <button
            onClick={() => setStep(s => Math.max(1, s - 1))}
            disabled={step === 1}
            className="btn btn-secondary"
          >
            <ChevronLeft size={18} /> Anterior
          </button>

          {step < 4 ? (
            <button onClick={() => setStep(s => s + 1)} className="btn btn-primary">
              Próximo <ChevronRight size={18} />
            </button>
          ) : (
            <button
              onClick={handleCreate}
              disabled={!playerData.name.trim()}
              className="btn btn-primary"
            >
              <Check size={18} /> Criar Jogador
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

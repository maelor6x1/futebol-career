import React, { useState } from 'react'
import { useGame } from '../context/GameContext.jsx'
import { POSITIONS, NATIONALITIES } from '../data/gameData.js'
import { generateInitialAttributes, calculateOverall, calculatePotential, assignInitialClub } from '../data/gameLogic.js'
import { User, MapPin, Shirt, Ruler, Weight, Calendar, ChevronRight, ChevronLeft, Check, RefreshCw, Dice5 } from 'lucide-react'

export default function CreatePlayer() {
  const { dispatch } = useGame()
  const [step, setStep] = useState(1)
  
  const generateRandomPlayer = () => {
    const nationality = NATIONALITIES[Math.floor(Math.random() * NATIONALITIES.length)]
    const age = Math.floor(Math.random() * 6) + 16 // 16-21
    const position = POSITIONS[Math.floor(Math.random() * POSITIONS.length)].id
    const preferredFoot = Math.random() < 0.7 ? 'right' : Math.random() < 0.85 ? 'left' : 'both'
    
    let height, weight
    if (position === 'GK') {
      height = Math.floor(Math.random() * 15) + 185 // 185-200
      weight = Math.floor(Math.random() * 15) + 80 // 80-95
    } else if (['CB', 'CDM', 'ST'].includes(position)) {
      height = Math.floor(Math.random() * 18) + 178 // 178-196
      weight = Math.floor(Math.random() * 18) + 72 // 72-90
    } else if (['LB', 'RB', 'LM', 'RM', 'LW', 'RW'].includes(position)) {
      height = Math.floor(Math.random() * 15) + 170 // 170-185
      weight = Math.floor(Math.random() * 15) + 65 // 65-80
    } else {
      height = Math.floor(Math.random() * 18) + 170 // 170-188
      weight = Math.floor(Math.random() * 18) + 65 // 65-83
    }
    
    const potential = calculatePotential(age, height, weight, nationality, position)
    const attributes = generateInitialAttributes(position, potential)
    const overall = calculateOverall(attributes, position)
    const club = assignInitialClub(overall, potential, nationality)
    
    return {
      name: '',
      nationality,
      age,
      position,
      height,
      weight,
      preferredFoot,
      potential,
      overall,
      attributes,
      clubId: club.id,
      clubName: club.name,
    }
  }
  
  const [playerData, setPlayerData] = useState(() => generateRandomPlayer())
  const [isGenerating, setIsGenerating] = useState(false)

  const update = (field, value) => setPlayerData(p => ({ ...p, [field]: value }))
  
  const handleRandomize = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setPlayerData(generateRandomPlayer())
      setIsGenerating(false)
    }, 300)
  }

  const handleCreate = () => {
    if (!playerData.name.trim()) return
    
    dispatch({
      type: 'CREATE_PLAYER',
      payload: {
        ...playerData,
        energy: 100,
        morale: 80,
        goals: 0,
        assists: 0,
        matches: 0,
        season: 2024,
        contractYears: Math.floor(Math.random() * 3) + 2, // 2-4 anos
      },
    })
  }

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px', background: 'var(--bg-primary)' }}>
      <div className="animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, textAlign: 'center', marginBottom: '8px' }}>
          Nova Carreira
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '32px' }}>
          Passo {step} de 3
        </p>

        {/* Progress */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
          {[1,2,3].map(s => (
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
                type="range" min={16} max={21} value={playerData.age}
                onChange={e => {
                  const age = parseInt(e.target.value)
                  const potential = calculatePotential(age, playerData.height, playerData.weight, playerData.nationality, playerData.position)
                  const attributes = generateInitialAttributes(playerData.position, potential)
                  const overall = calculateOverall(attributes, playerData.position)
                  const club = assignInitialClub(overall, potential, playerData.nationality)
                  setPlayerData(p => ({ ...p, age, potential, overall, attributes, clubId: club.id, clubName: club.name }))
                }}
              />
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Jovens têm mais potencial de evolução
              </p>
            </div>
            <div className="form-group">
              <label>Potencial Calculado: <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{playerData.potential}</span></label>
              <div className="progress-bar" style={{ marginTop: '8px' }}>
                <div className="progress-bar-fill primary" style={{ width: `${playerData.potential}%` }} />
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                O potencial é calculado automaticamente pela idade, físico e nacionalidade
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Position & Physical */}
        {step === 2 && (
          <div className="card animate-fade-in">
            <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Posição e Físico</h2>
            <div className="form-group">
              <label>Posição</label>
              <div className="position-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {POSITIONS.map(pos => (
                  <button
                    key={pos.id}
                    onClick={() => {
                      const attributes = generateInitialAttributes(pos.id, playerData.potential)
                      const overall = calculateOverall(attributes, pos.id)
                      const club = assignInitialClub(overall, playerData.potential, playerData.nationality)
                      update('position', pos.id)
                      setPlayerData(p => ({ ...p, position: pos.id, overall, attributes, clubId: club.id, clubName: club.name }))
                    }}
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
              <label>Altura: {playerData.height} cm</label>
              <input
                type="range" min={160} max={210} value={playerData.height}
                onChange={e => {
                  const height = parseInt(e.target.value)
                  const potential = calculatePotential(playerData.age, height, playerData.weight, playerData.nationality, playerData.position)
                  const attributes = generateInitialAttributes(playerData.position, potential)
                  const overall = calculateOverall(attributes, playerData.position)
                  const club = assignInitialClub(overall, potential, playerData.nationality)
                  setPlayerData(p => ({ ...p, height, potential, overall, attributes, clubId: club.id, clubName: club.name }))
                }}
              />
            </div>
            <div className="form-group">
              <label>Peso: {playerData.weight} kg</label>
              <input
                type="range" min={55} max={110} value={playerData.weight}
                onChange={e => {
                  const weight = parseInt(e.target.value)
                  const potential = calculatePotential(playerData.age, playerData.height, weight, playerData.nationality, playerData.position)
                  const attributes = generateInitialAttributes(playerData.position, potential)
                  const overall = calculateOverall(attributes, playerData.position)
                  const club = assignInitialClub(overall, potential, playerData.nationality)
                  setPlayerData(p => ({ ...p, weight, potential, overall, attributes, clubId: club.id, clubName: club.name }))
                }}
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

        {/* Step 3: Summary */}
        {step === 3 && (
          <div className="card animate-fade-in">
            <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Resumo da Carreira</h2>
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
                <span style={{ color: 'var(--text-secondary)' }}>Clube Inicial</span>
                <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{playerData.clubName}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Idade / Potencial</span>
                <span style={{ fontWeight: 600 }}>{playerData.age} anos / {playerData.potential}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Overall Inicial</span>
                <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{playerData.overall}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Físico</span>
                <span style={{ fontWeight: 600 }}>{playerData.height}cm / {playerData.weight}kg / {playerData.preferredFoot === 'right' ? 'Direito' : playerData.preferredFoot === 'left' ? 'Esquerdo' : 'Ambos'}</span>
              </div>
            </div>
            
            <button
              onClick={handleRandomize}
              disabled={isGenerating}
              className="btn btn-secondary"
              style={{ width: '100%', marginTop: '16px' }}
            >
              <RefreshCw size={18} style={{ animation: isGenerating ? 'spin 1s linear infinite' : 'none' }} />
              Gerar Novo Jogador Aleatório
            </button>
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

          {step < 3 ? (
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

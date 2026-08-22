import React from 'react'
import { useGame } from '../context/GameContext.jsx'
import { ATTRIBUTES } from '../data/gameData.js'
import { BarChart3, TrendingUp, Award } from 'lucide-react'

export default function Stats() {
  const { player, career } = useGame()

  if (!player) return null

  const stats = career?.stats || {}

  // Calculate category averages
  const categoryAverages = {}
  Object.entries(ATTRIBUTES).forEach(([cat, attrs]) => {
    const values = attrs.map(a => player.attributes?.[a.id] || 50)
    categoryAverages[cat] = Math.round(values.reduce((a, b) => a + b, 0) / values.length)
  })

  const getCatColor = (cat) => {
    const avg = categoryAverages[cat]
    return avg >= 80 ? 'var(--success)' : avg >= 60 ? 'var(--accent)' : 'var(--danger)'
  }

  const getCatLabel = (cat) => {
    return {
      physical: 'Físico',
      technical: 'Técnico',
      mental: 'Mental',
      defensive: 'Defensivo',
      goalkeeper: 'Goleiro',
    }[cat] || cat
  }

  return (
    <div className="page animate-fade-in">
      <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px' }}>
        <BarChart3 size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Estatísticas
      </h1>

      {/* Career Stats */}
      <div className="grid grid-4" style={{ marginBottom: '24px' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <TrendingUp size={20} color="var(--primary)" style={{ marginBottom: '6px' }} />
          <div style={{ fontSize: '24px', fontWeight: 800 }}>{stats.matches || 0}</div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Partidas</div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Award size={20} color="var(--accent)" style={{ marginBottom: '6px' }} />
          <div style={{ fontSize: '24px', fontWeight: 800 }}>{stats.goals || 0}</div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Gols</div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <TrendingUp size={20} color="var(--success)" style={{ marginBottom: '6px' }} />
          <div style={{ fontSize: '24px', fontWeight: 800 }}>{stats.assists || 0}</div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Assistências</div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <BarChart3 size={20} color="var(--primary)" style={{ marginBottom: '6px' }} />
          <div style={{ fontSize: '24px', fontWeight: 800 }}>
            {stats.matches > 0 ? ((stats.goals || 0) / stats.matches).toFixed(2) : '0.00'}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Média de Gols</div>
        </div>
      </div>

      {/* Category Averages */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div className="card-header">
          <span className="card-title">Médias por Categoria</span>
        </div>
        <div className="grid grid-3">
          {Object.entries(categoryAverages).map(([cat, avg]) => (
            <div key={cat} style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>
                {getCatLabel(cat)}
              </div>
              <div style={{
                fontSize: '36px', fontWeight: 800,
                color: getCatColor(cat),
              }}>
                {avg}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Attributes by Category */}
      <div className="card" style={{ marginTop: '24px' }}>
        <div className="card-header">
          <span className="card-title">Todos os Atributos</span>
        </div>
        <div className="grid grid-2">
          {Object.entries(ATTRIBUTES).map(([category, attrs]) => (
            <div key={category} style={{ marginBottom: '16px' }}>
              <div style={{
                fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px',
                color: 'var(--text-muted)', marginBottom: '10px', fontWeight: 700,
              }}>
                {getCatLabel(category)}
              </div>
              {attrs.map(attr => {
                const val = player.attributes?.[attr.id] || 50
                return (
                  <div key={attr.id} className="stat-row">
                    <span className="stat-label">{attr.name}</span>
                    <div className="stat-bar">
                      <div className="stat-bar-fill" style={{
                        width: `${val}%`,
                        background: getCatColor(category),
                      }} />
                    </div>
                    <span className="stat-value">{Math.round(val)}</span>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

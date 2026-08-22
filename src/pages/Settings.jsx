import React, { useState } from 'react'
import { useGame } from '../context/GameContext.jsx'
import { Settings, Volume2, Bell, Save, Globe, RotateCcw, AlertTriangle } from 'lucide-react'

export default function SettingsPage() {
  const { settings, dispatch } = useGame()
  const [localSettings, setLocalSettings] = useState(settings || {})
  const [saved, setSaved] = useState(false)

  const handleChange = (key, value) => {
    setLocalSettings(prev => ({ ...prev, [key]: value }))
    setSaved(false)
  }

  const handleSave = () => {
    dispatch({ type: 'UPDATE_SETTINGS', payload: localSettings })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    if (window.confirm('Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.')) {
      dispatch({ type: 'RESET_GAME' })
    }
  }

  return (
    <div className="page animate-fade-in">
      <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px' }}>
        <Settings size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Configurações
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Game Settings */}
        <div className="card">
          <div className="card-header">
            <Globe size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <span className="card-title">Jogo</span>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
              Dificuldade
            </label>
            <select
              value={localSettings.difficulty || 'normal'}
              onChange={e => handleChange('difficulty', e.target.value)}
              style={{
                width: '100%', padding: '10px 12px', borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border)', background: 'var(--bg-secondary)',
                color: 'var(--text-primary)', fontSize: '14px',
              }}
            >
              <option value="easy">Fácil</option>
              <option value="normal">Normal</option>
              <option value="hard">Difícil</option>
              <option value="legend">Lenda</option>
            </select>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
              Velocidade da Partida
            </label>
            <select
              value={localSettings.matchSpeed || 'normal'}
              onChange={e => handleChange('matchSpeed', e.target.value)}
              style={{
                width: '100%', padding: '10px 12px', borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border)', background: 'var(--bg-secondary)',
                color: 'var(--text-primary)', fontSize: '14px',
              }}
            >
              <option value="slow">Lenta</option>
              <option value="normal">Normal</option>
              <option value="fast">Rápida</option>
            </select>
          </div>
        </div>

        {/* Audio & Notifications */}
        <div className="card">
          <div className="card-header">
            <Volume2 size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <span className="card-title">Áudio & Notificações</span>
          </div>

          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Volume2 size={16} color="var(--text-muted)" />
              <span style={{ fontSize: '14px' }}>Som</span>
            </div>
            <button
              onClick={() => handleChange('sound', !localSettings.sound)}
              className={`btn btn-sm ${localSettings.sound ? 'btn-primary' : 'btn-secondary'}`}
            >
              {localSettings.sound ? 'Ligado' : 'Desligado'}
            </button>
          </div>

          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bell size={16} color="var(--text-muted)" />
              <span style={{ fontSize: '14px' }}>Notificações</span>
            </div>
            <button
              onClick={() => handleChange('notifications', !localSettings.notifications)}
              className={`btn btn-sm ${localSettings.notifications ? 'btn-primary' : 'btn-secondary'}`}
            >
              {localSettings.notifications ? 'Ligado' : 'Desligado'}
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
        <button onClick={handleSave} className="btn btn-primary">
          <Save size={16} style={{ marginRight: '6px' }} />
          {saved ? 'Salvo!' : 'Salvar Configurações'}
        </button>
      </div>

      {/* Danger Zone */}
      <div className="card" style={{ marginTop: '32px', borderColor: 'var(--danger)' }}>
        <div className="card-header">
          <AlertTriangle size={18} color="var(--danger)" style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          <span className="card-title" style={{ color: 'var(--danger)' }}>Zona de Perigo</span>
        </div>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '13px' }}>
          Resetar o jogo apagará todo o seu progresso. Esta ação não pode ser desfeita.
        </p>
        <button onClick={handleReset} className="btn btn-danger">
          <RotateCcw size={16} style={{ marginRight: '6px' }} />
          Resetar Jogo
        </button>
      </div>
    </div>
  )
}

import React from 'react'
import { useGame } from '../context/GameContext.jsx'
import { Trophy, Play, Settings, RotateCcw } from 'lucide-react'

export default function Menu() {
  const { hasSave, dispatch } = useGame()

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, var(--bg-primary) 0%, #064e3b 100%)',
      padding: '40px 20px',
    }}>
      <div className="animate-fade-in" style={{ textAlign: 'center', maxWidth: '480px', width: '100%' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'var(--primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          boxShadow: '0 0 40px rgba(16,185,129,0.3)',
        }}>
          <Trophy size={40} color="white" />
        </div>

        <h1 style={{ fontSize: '42px', fontWeight: 900, marginBottom: '8px', letterSpacing: '-1px' }}>
          Futebol Career
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '16px' }}>
          Sua jornada para a glória começa aqui
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            onClick={() => dispatch({ type: 'SET_PAGE', payload: 'createPlayer' })}
            className="btn btn-primary btn-lg"
            style={{ justifyContent: 'center', width: '100%' }}
          >
            <Play size={20} />
            Nova Carreira
          </button>

          {hasSave && (
            <button
              onClick={() => dispatch({ type: 'LOAD_GAME' })}
              className="btn btn-secondary btn-lg"
              style={{ justifyContent: 'center', width: '100%' }}
            >
              <RotateCcw size={20} />
              Continuar Carreira
            </button>
          )}

          <button
            onClick={() => dispatch({ type: 'SET_PAGE', payload: 'settings' })}
            className="btn btn-secondary"
            style={{ justifyContent: 'center', width: '100%' }}
          >
            <Settings size={18} />
            Configurações
          </button>
        </div>

        <p style={{ marginTop: '32px', fontSize: '12px', color: 'var(--text-muted)' }}>
          v1.0.0 · Crie seu jogador, evolua e conquiste títulos
        </p>
      </div>
    </div>
  )
}

import React from 'react'
import { useGame } from '../context/GameContext.jsx'
import {
  LayoutDashboard, Trophy, Dumbbell, CalendarDays,
  TrendingUp, ArrowLeftRight, HeartHandshake, Wallet,
  BarChart3, Settings, LogOut
} from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'Painel', icon: LayoutDashboard },
  { id: 'match', label: 'Partida', icon: Trophy },
  { id: 'training', label: 'Treino', icon: Dumbbell },
  { id: 'calendar', label: 'Calendário', icon: CalendarDays },
  { id: 'career', label: 'Carreira', icon: TrendingUp },
  { id: 'transfers', label: 'Transferências', icon: ArrowLeftRight },
  { id: 'sponsors', label: 'Patrocinadores', icon: HeartHandshake },
  { id: 'finances', label: 'Finanças', icon: Wallet },
  { id: 'stats', label: 'Estatísticas', icon: BarChart3 },
  { id: 'settings', label: 'Configurações', icon: Settings },
]

export default function Navigation() {
  const { currentPage, dispatch, player } = useGame()

  return (
    <nav style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '260px',
      height: '100vh',
      background: 'var(--bg-secondary)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 0',
      zIndex: 100,
    }}>
      <div style={{ padding: '0 20px 20px', borderBottom: '1px solid var(--border)', marginBottom: '12px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary)' }}>Futebol Career</h2>
        {player && (
          <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
            {player.name} · OVR {player.overall}
          </div>
        )}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 12px' }}>
        {navItems.map(item => {
          const Icon = item.icon
          const active = currentPage === item.id
          return (
            <button
              key={item.id}
              onClick={() => dispatch({ type: 'SET_PAGE', payload: item.id })}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                background: active ? 'rgba(16,185,129,0.15)' : 'transparent',
                color: active ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                marginBottom: '4px',
                textAlign: 'left',
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--bg-tertiary)' }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
            >
              <Icon size={20} />
              {item.label}
            </button>
          )
        })}
      </div>

      <div style={{ padding: '12px 20px 0', borderTop: '1px solid var(--border)' }}>
        <button
          onClick={() => dispatch({ type: 'SET_PAGE', payload: 'menu' })}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            border: 'none',
            background: 'transparent',
            color: 'var(--text-muted)',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <LogOut size={20} />
          Sair
        </button>
      </div>
    </nav>
  )
}

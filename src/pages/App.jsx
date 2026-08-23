import React from 'react'
import { useGame } from '../context/GameContext.jsx'
import Navigation from '../components/Navigation.jsx'
import Menu from '../components/Menu.jsx'
import Dashboard from './Dashboard.jsx'
import Match from './Match.jsx'
import Training from './Training.jsx'
import Calendar from './Calendar.jsx'
import Career from './Career.jsx'
import Transfers from './Transfers.jsx'
import Sponsors from './Sponsors.jsx'
import Finances from './Finances.jsx'
import Stats from './Stats.jsx'
import Settings from './Settings.jsx'
import CreatePlayer from './CreatePlayer.jsx'

export default function App() {
  const { currentPage, player } = useGame()

  if (!player) {
    return <CreatePlayer />
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navigation />
      <main className="main-content" style={{
        flex: 1,
        padding: '32px',
        maxWidth: '1200px',
      }}>
        {currentPage === 'menu' && <Menu />}
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'match' && <Match />}
        {currentPage === 'training' && <Training />}
        {currentPage === 'calendar' && <Calendar />}
        {currentPage === 'career' && <Career />}
        {currentPage === 'transfers' && <Transfers />}
        {currentPage === 'sponsors' && <Sponsors />}
        {currentPage === 'finances' && <Finances />}
        {currentPage === 'stats' && <Stats />}
        {currentPage === 'settings' && <Settings />}
      </main>
    </div>
  )
}

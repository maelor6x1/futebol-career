import React from 'react'
import { useGame } from '../context/GameContext.jsx'
import { Wallet, ArrowUpRight, ArrowDownRight, TrendingUp, DollarSign } from 'lucide-react'

export default function Finances() {
  const { player, finances } = useGame()

  if (!player) return null

  const transactions = finances?.transactions || []
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0)
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0)

  return (
    <div className="page animate-fade-in">
      <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px' }}>
        <Wallet size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Finanças
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-3" style={{ marginBottom: '24px' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <DollarSign size={24} color="var(--primary)" style={{ marginBottom: '8px' }} />
          <div style={{ fontSize: '28px', fontWeight: 800 }}>${(player.money || 0).toLocaleString()}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Saldo Atual</div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <ArrowUpRight size={24} color="var(--success)" style={{ marginBottom: '8px' }} />
          <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--success)' }}>${totalIncome.toLocaleString()}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Receitas</div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <ArrowDownRight size={24} color="var(--danger)" style={{ marginBottom: '8px' }} />
          <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--danger)' }}>${totalExpense.toLocaleString()}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Despesas</div>
        </div>
      </div>

      {/* Wage & Market Value */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div className="card-header">
          <TrendingUp size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          <span className="card-title">Contrato & Mercado</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Salário Semanal</div>
            <div style={{ fontSize: '24px', fontWeight: 800 }}>${(player.wage || 0).toLocaleString()}</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Valor de Mercado</div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent)' }}>${(player.marketValue || 0).toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="card">
        <div className="card-header">
          <span className="card-title">Histórico de Transações</span>
          <span className="badge badge-secondary">{transactions.length}</span>
        </div>
        {transactions.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px' }}>
            Nenhuma transação registrada
          </p>
        ) : (
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {transactions.map((t, idx) => (
              <div key={idx} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px 0', borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {t.type === 'income' ? (
                    <ArrowUpRight size={16} color="var(--success)" />
                  ) : (
                    <ArrowDownRight size={16} color="var(--danger)" />
                  )}
                  <div>
                    <div style={{ fontWeight: 600 }}>{t.description}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{t.date}</div>
                  </div>
                </div>
                <span style={{
                  fontWeight: 700,
                  color: t.type === 'income' ? 'var(--success)' : 'var(--danger)',
                }}>
                  {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

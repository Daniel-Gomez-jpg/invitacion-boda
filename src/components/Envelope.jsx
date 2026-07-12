import React, { useState } from 'react'
import { CornerFlourishTopLeft, CornerFlourishBottomRight } from './Botanicals.jsx'

export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false)

  const handleClick = () => {
    if (opening) return
    setOpening(true)
    setTimeout(() => {
      onOpen()
    }, 900)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        borderRadius: '20px',
        cursor: 'pointer',
        userSelect: 'none',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 16px 40px rgba(60, 52, 30, 0.08)',
      }}
    >
      <CornerFlourishTopLeft style={{ position: 'absolute', top: '-10px', left: '-10px', width: '110px', height: 'auto', opacity: 0.7, pointerEvents: 'none' }} />
      <CornerFlourishBottomRight style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '110px', height: 'auto', opacity: 0.7, pointerEvents: 'none' }} />

      <div
        style={{
          textAlign: 'center',
          animation: opening ? 'none' : 'envFloat 3s ease-in-out infinite',
          transform: opening ? 'scale(1.08)' : 'scale(1)',
          opacity: opening ? 0 : 1,
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        {/* El sobre con sombra y capas para dar relieve */}
        <svg width="220" height="160" viewBox="0 0 220 160" aria-hidden="true">
          <defs>
            <filter id="envShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#2c2c2a" floodOpacity="0.28" />
            </filter>
            <linearGradient id="envBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fffdf8" />
              <stop offset="100%" stopColor="#f3efe4" />
            </linearGradient>
            <linearGradient id="envFlap" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbf8f0" />
              <stop offset="100%" stopColor="#ece5d4" />
            </linearGradient>
          </defs>

          <g filter="url(#envShadow)">
            <rect x="10" y="25" width="200" height="125" rx="8" fill="url(#envBody)" stroke="#c9c4b4" strokeWidth="1" />
            <path d="M10 30 L110 100 L210 30" fill="none" stroke="#c9c4b4" strokeWidth="1.5" />
            <path
              d="M10 28 C 10 28, 110 -10, 210 28 L210 30 L110 100 L10 30 Z"
              fill="url(#envFlap)"
              stroke="#c9c4b4"
              strokeWidth="1"
              style={{
                transformOrigin: '110px 28px',
                animation: opening ? 'flapOpen 0.7s ease forwards' : 'none',
              }}
            />
            <circle cx="110" cy="63" r="16" fill="#f0997b" opacity="0.3" stroke="#993c1d" strokeWidth="1" />
            <text x="110" y="69" textAnchor="middle" fontSize="14" fill="#712b13" fontFamily="Cormorant Garamond, serif">
              G&amp;J
            </text>
          </g>
        </svg>
        <p className="serif" style={{ fontSize: '17px', marginTop: '18px', color: '#5f5e5a' }}>
          Toca el sobre para abrir tu invitación
        </p>
      </div>
      <style>{`
        @keyframes flapOpen {
          from { transform: rotateX(0deg); }
          to { transform: rotateX(180deg); opacity: 0; }
        }
        @keyframes envFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  )
}

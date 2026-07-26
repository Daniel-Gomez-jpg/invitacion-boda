import React, { useState } from 'react'
import { CornerFlourishTopLeft, CornerFlourishBottomRight } from './Botanicals.jsx'

export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false)

  const handleClick = () => {
    if (opening) return
    setOpening(true)
    setTimeout(() => onOpen(), 1000)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //background: 'linear-gradient(160deg, #f8f6f0 0%, #eee8da 100%)',
        background: '#364573',
        borderRadius: '20px',
        cursor: 'pointer',
        userSelect: 'none',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(61,77,133,0.13)',
      }}
    >
      <CornerFlourishTopLeft style={{ position: 'absolute', top: '-10px', left: '-10px', width: '130px', height: 'auto', opacity: 0.55, pointerEvents: 'none' }} />
      <CornerFlourishBottomRight style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '130px', height: 'auto', opacity: 0.55, pointerEvents: 'none' }} />

      <div
        style={{
          textAlign: 'center',
          animation: opening ? 'none' : 'envFloat 3.5s ease-in-out infinite',
          transform: opening ? 'scale(1.06)' : 'scale(1)',
          opacity: opening ? 0 : 1,
          transition: 'opacity 0.9s ease, transform 0.9s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src="https://invitacion.celebremos.click/wp-content/uploads/2025/07/SobreB.png" alt="sobre" style={{maxWidth: '300px', clipPath: `inset(0 0 20px 0)`}}  />
        {/* <svg width="260" height="190" viewBox="0 0 260 190" aria-hidden="true">
          <defs>
            <filter id="envShadow" x="-25%" y="-25%" width="150%" height="150%">
              <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#1a2240" floodOpacity="0.32" />
            </filter>
            <filter id="sealShadow" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#1a2240" floodOpacity="0.4" />
            </filter>
            <linearGradient id="envBody" x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0%" stopColor="#4a5a9a" />
              <stop offset="100%" stopColor="#2e3c6e" />
            </linearGradient>
            <linearGradient id="envFlap" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5566a8" />
              <stop offset="100%" stopColor="#3D4D85" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8c97a" />
              <stop offset="100%" stopColor="#c8a44a" />
            </linearGradient>
          </defs>

          <g filter="url(#envShadow)">
            <rect x="10" y="30" width="240" height="148" rx="6" fill="url(#envBody)" />
            <rect x="10" y="30" width="240" height="148" rx="6" fill="none" stroke="url(#goldGrad)" strokeWidth="1.2" />
            <rect x="18" y="38" width="224" height="132" rx="4" fill="none" stroke="#c8a44a" strokeWidth="0.6" strokeOpacity="0.5" />

            <path d="M10 178 L95 110" fill="none" stroke="#c8a44a" strokeWidth="0.7" strokeOpacity="0.4" />
            <path d="M250 178 L165 110" fill="none" stroke="#c8a44a" strokeWidth="0.7" strokeOpacity="0.4" />

            <path d="M18 36 L28 36 M18 36 L18 46" fill="none" stroke="#e8c97a" strokeWidth="1.2" strokeOpacity="0.8" />
            <path d="M242 36 L232 36 M242 36 L242 46" fill="none" stroke="#e8c97a" strokeWidth="1.2" strokeOpacity="0.8" />
            <path d="M18 172 L28 172 M18 172 L18 162" fill="none" stroke="#e8c97a" strokeWidth="1.2" strokeOpacity="0.8" />
            <path d="M242 172 L232 172 M242 172 L242 162" fill="none" stroke="#e8c97a" strokeWidth="1.2" strokeOpacity="0.8" />

            <path
              d="M11 32 C 11 32, 130 -8, 249 32 L249 34 L130 112 L11 34 Z"
              fill="url(#envFlap)"
              stroke="#c8a44a"
              strokeWidth="1"
              style={{
                transformOrigin: '130px 32px',
                animation: opening ? 'flapOpen 0.8s ease forwards' : 'none',
              }}
            />
            <path d="M11 34 L130 112 L249 34" fill="none" stroke="#c8a44a" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          <g filter="url(#sealShadow)" transform="translate(130, 105)">
            <path d="M0,-22 L5,-8 L20,-8 L8,1 L13,15 L0,6 L-13,15 L-8,1 L-20,-8 L-5,-8 Z"
              fill="#c8a44a" opacity="0.4" />
            <circle cx="0" cy="0" r="18" fill="url(#goldGrad)" />
            <circle cx="0" cy="0" r="14" fill="none" stroke="#8a6010" strokeWidth="0.8" strokeOpacity="0.7" />
            <text x="0" y="5" textAnchor="middle" fontSize="13" fontWeight="500"
              fill="#2e3c6e" fontFamily="Cormorant Garamond, serif" letterSpacing="1">
              G&amp;J
            </text>
          </g>
        </svg> */}

        <p className="serif" style={{
          fontSize: '16px',
          marginTop: '20px',
          color: 'white',
          letterSpacing: '0.5px',
          opacity: 0.85,
        }}>
          Toca el sobre para abrir tu invitación
        </p>

        <svg width="100" height="16" viewBox="0 0 100 16" style={{ marginTop: '4px', opacity: 0.4 }} aria-hidden="true">
          <line x1="0" y1="8" x2="38" y2="8" stroke="white" strokeWidth="0.8" />
          <circle cx="50" cy="8" r="3" fill="white" />
          <line x1="62" y1="8" x2="100" y2="8" stroke="white" strokeWidth="0.8" />
        </svg>
      </div>

      <style>{`
        @keyframes flapOpen {
          0%   { transform: rotateX(0deg); opacity: 1; }
          60%  { transform: rotateX(-160deg); opacity: 0.4; }
          100% { transform: rotateX(-180deg); opacity: 0; }
        }
        @keyframes envFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}
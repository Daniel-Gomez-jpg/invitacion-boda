import React from 'react'

const stroke = '#8a8367'

export function RingsIcon({ style, className }) {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" style={style} className={className} aria-hidden="true">
      <circle cx="17" cy="24" r="11" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="27" cy="24" r="11" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M22 9 L24 14 L20 14 Z" fill={stroke} />
    </svg>
  )
}

export function TuxedoIcon({ style, className }) {
  return (
    <svg width="40" height="48" viewBox="0 0 40 48" style={style} className={className} aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round">
        <path d="M8 8 L20 16 L32 8 L36 14 L32 46 L8 46 L4 14 Z" />
        <path d="M20 16 L16 46" />
        <path d="M20 16 L24 46" />
        <path d="M16 10 L20 22 L24 10" />
      </g>
      <circle cx="20" cy="26" r="1.4" fill={stroke} stroke="none" />
      <circle cx="20" cy="33" r="1.4" fill={stroke} stroke="none" />
      <circle cx="20" cy="40" r="1.4" fill={stroke} stroke="none" />
    </svg>
  )
}

export function DressIcon({ style, className }) {
  return (
    <svg width="36" height="48" viewBox="0 0 36 48" style={style} className={className} aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round">
        <path d="M13 4 C 13 8, 11 9, 11 13 C 11 16, 14 17, 18 17 C 22 17, 25 16, 25 13 C 25 9, 23 8, 23 4" />
        <path d="M11 13 C 4 20, 2 36, 4 46 L 32 46 C 34 36, 32 20, 25 13" />
        <path d="M14 13 C 13 24, 13 36, 15 46" opacity="0.5" />
        <path d="M22 13 C 23 24, 23 36, 21 46" opacity="0.5" />
      </g>
    </svg>
  )
}

export function GiftIcon({ style, className, animate = false }) {
  return (
    <>
      <style>{`
        @keyframes draw { to { stroke-dashoffset: 0; } }
        .gift-box   { stroke-dasharray:252; stroke-dashoffset:252; }
        .gift-lid   { stroke-dasharray:172; stroke-dashoffset:172; }
        .gift-vline { stroke-dasharray:60;  stroke-dashoffset:60;  }
        .gift-hline { stroke-dasharray:72;  stroke-dashoffset:72;  }
        .gift-bl    { stroke-dasharray:55;  stroke-dashoffset:55;  }
        .gift-br    { stroke-dasharray:55;  stroke-dashoffset:55;  }
        .gift-knot  { stroke-dasharray:28;  stroke-dashoffset:28;  }
        .gift-playing .gift-box   { animation: draw 0.7s cubic-bezier(.4,0,.2,1) forwards 0s;    }
        .gift-playing .gift-lid   { animation: draw 0.5s cubic-bezier(.4,0,.2,1) forwards 0.75s; }
        .gift-playing .gift-vline { animation: draw 0.35s ease forwards 1.25s; }
        .gift-playing .gift-hline { animation: draw 0.35s ease forwards 1.25s; }
        .gift-playing .gift-bl    { animation: draw 0.4s cubic-bezier(.4,0,.2,1) forwards 1.6s;  }
        .gift-playing .gift-br    { animation: draw 0.4s cubic-bezier(.4,0,.2,1) forwards 1.8s;  }
        .gift-playing .gift-knot  { animation: draw 0.3s ease forwards 2.2s; }
      `}</style>
      <svg
        width="48" height="48"
        viewBox="-44 -14 88 90"
        style={style}
        className={`${className || ''} ${animate ? 'gift-playing' : ''}`}
        aria-hidden="true"
      >
        <g fill="none" stroke="#8a8367" strokeLinecap="round" strokeLinejoin="round">
          <rect className="gift-box"   x="-36" y="20" width="72" height="54" rx="4" strokeWidth="1.6"/>
          <rect className="gift-lid"   x="-36" y="14" width="72" height="14" rx="3" strokeWidth="1.6"/>
          <line className="gift-vline" x1="0" y1="14" x2="0"    y2="74" strokeWidth="1.4"/>
          <line className="gift-hline" x1="-36" y1="21" x2="36" y2="21" strokeWidth="1.4"/>
          <path className="gift-bl"    d="M0 14 C-6 6,-18 0,-20 6 C-22 12,-14 16,0 14 Z" strokeWidth="1.5"/>
          <path className="gift-br"    d="M0 14 C6 6,18 0,20 6 C22 12,14 16,0 14 Z"    strokeWidth="1.5"/>
          <path className="gift-knot"  d="M0 14 C-4 8,-4 2,0 0 C4 2,4 8,0 14 Z"        strokeWidth="1.2"/>
        </g>
      </svg>
    </>
  )
}

export function BoyIcon(){
  return(
    <>
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true" style={{ margin: '0 auto 4px' }}>
                      <g fill="none" stroke="#785353" strokeWidth="1.5" strokeLinecap="round">
                        {/* Silueta de niño */}
                        <circle cx="22" cy="10" r="5" />
                        <path d="M15 22 C15 16, 29 16, 29 22 L27 34 L22 31 L17 34 Z" />
                        <path d="M17 34 L15 42" />
                        <path d="M27 34 L29 42" />
                        <path d="M15 24 L9 28" />
                        <path d="M29 24 L35 28" />
                        {/* Círculo prohibido */}
                        <circle cx="22" cy="22" r="19" stroke="#785353" strokeWidth="1.6" />
                        {/* <line x1="6" y1="6" x2="38" y2="38" stroke="#785353" strokeWidth="1.6" /> */}
                      </g>
                    </svg>
    </>
  )
}

export function ToastIcon({ style, className }) {
  return (
    <svg width="64" height="64" viewBox="0 0 130 145" style={style} className={className} aria-hidden="true">
      <g fill="none" stroke="#8a8367" strokeLinecap="round" strokeLinejoin="round">

        {/* Copa izquierda */}
        <g transform="rotate(22, 60, 75)">
          <path d="M24 10 Q18 46,36 62 L36 110 L20 122 L54 122 L38 110 L38 62 Q56 46,52 10 Z" strokeWidth="2.6"/>
          <path d="M26 18 Q28 38,36 52" strokeWidth="1.3" opacity="0.35"/>
          <path d="M40 18 Q42 30,38 44" strokeWidth="1" opacity="0.25"/>
          <circle cx="32" cy="26" r="2.2" fill="#8a8367" stroke="none" opacity="0.5"/>
          <circle cx="30" cy="38" r="1.6" fill="#8a8367" stroke="none" opacity="0.4"/>
          <circle cx="34" cy="48" r="1.2" fill="#8a8367" stroke="none" opacity="0.3"/>
        </g>

        {/* Copa derecha */}
        <g transform="rotate(-22, 70, 75)">
          <path d="M106 10 Q112 46,94 62 L94 110 L110 122 L76 122 L92 110 L92 62 Q74 46,78 10 Z" strokeWidth="2.6"/>
          <path d="M104 18 Q102 38,94 52" strokeWidth="1.3" opacity="0.35"/>
          <path d="M90 18 Q88 30,92 44" strokeWidth="1" opacity="0.25"/>
          <circle cx="98" cy="26" r="2.2" fill="#8a8367" stroke="none" opacity="0.5"/>
          <circle cx="100" cy="38" r="1.6" fill="#8a8367" stroke="none" opacity="0.4"/>
          <circle cx="96" cy="48" r="1.2" fill="#8a8367" stroke="none" opacity="0.3"/>
        </g>

        {/* Destellos */}
        <line x1="65" y1="2"  x2="65" y2="14"  strokeWidth="2.6"/>
        <line x1="53" y1="6"  x2="58" y2="16"  strokeWidth="2.6"/>
        <line x1="77" y1="6"  x2="72" y2="16"  strokeWidth="2.6"/>
        <line x1="45" y1="14" x2="51" y2="22"  strokeWidth="1.8" opacity="0.55"/>
        <line x1="85" y1="14" x2="79" y2="22"  strokeWidth="1.8" opacity="0.55"/>
        <circle cx="65" cy="1" r="2" fill="#8a8367" stroke="none" opacity="0.4"/>

      </g>
    </svg>
  )
}
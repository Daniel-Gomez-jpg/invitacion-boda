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

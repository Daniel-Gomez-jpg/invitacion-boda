import React from 'react'

/*
 * Ilustraciones florales en línea, dibujadas en SVG (originales, sin derechos de autor),
 * inspiradas en estilo "wreath" / guirnalda floral hecha a mano.
 */

const stroke = '#8a8367'
const fillLeaf = '#cdc6a8'

function LeafCluster({ rotate = 0, scale = 1 }) {
  return (
    <g transform={`rotate(${rotate}) scale(${scale})`} fill={fillLeaf} stroke={stroke} strokeWidth="1.2" opacity="0.9">
      <path d="M0 0 C 14 -6, 26 -2, 32 6 C 22 8, 10 8, 0 0 Z" />
      <path d="M0 0 C 12 6, 14 16, 10 24 C 2 18, -2 8, 0 0 Z" />
      <path d="M0 0 C -10 -8, -22 -8, -30 -2 C -20 4, -8 6, 0 0 Z" />
      <circle cx="0" cy="0" r="2.2" fill={stroke} stroke="none" />
    </g>
  )
}

export function CornerFlourishTopLeft({ style, className }) {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" style={style} className={className} aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" opacity="0.7">
        <path d="M4 100 C 10 60, 40 14, 100 6" />
        <path d="M20 96 C 26 64, 50 30, 96 22" />
      </g>
      <g opacity="0.85">
        <g transform="translate(14,92)"><LeafCluster rotate="-40" scale="0.8" /></g>
        <g transform="translate(38,58)"><LeafCluster rotate="-15" scale="0.9" /></g>
        <g transform="translate(70,30)"><LeafCluster rotate="20" scale="0.85" /></g>
        <g transform="translate(102,14)"><LeafCluster rotate="55" scale="0.75" /></g>
      </g>
    </svg>
  )
}

export function CornerFlourishBottomRight({ style, className }) {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" style={style} className={className} aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" opacity="0.7">
        <path d="M216 120 C 210 160, 180 206, 120 214" />
        <path d="M200 124 C 194 156, 170 190, 124 198" />
      </g>
      <g opacity="0.85">
        <g transform="translate(206,128)"><LeafCluster rotate="140" scale="0.8" /></g>
        <g transform="translate(182,162)"><LeafCluster rotate="165" scale="0.9" /></g>
        <g transform="translate(150,190)"><LeafCluster rotate="200" scale="0.85" /></g>
        <g transform="translate(118,206)"><LeafCluster rotate="235" scale="0.75" /></g>
      </g>
    </svg>
  )
}

export function OrnateDivider({ style, className }) {
  return (
    <svg width="220" height="40" viewBox="0 0 220 40" style={style} className={className} aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="1.4" opacity="0.8">
        <path d="M6 20 C 40 8, 70 8, 96 20" />
        <path d="M124 20 C 150 8, 180 8, 214 20" />
        <path d="M104 28 C 107 22, 113 22, 116 28 C 119 22, 125 22, 128 28 C 128 33, 116 38, 110 38 C 104 38, 104 33, 104 28 Z" fill={fillLeaf} />
      </g>
      <g transform="translate(40,18)"><LeafCluster rotate="0" scale="0.45" /></g>
      <g transform="translate(180,18)"><LeafCluster rotate="180" scale="0.45" /></g>
    </svg>
  )
}

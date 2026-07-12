import React, { useState } from 'react'

/**
 * Espacio para una foto, con efecto hover y modal al hacer clic.
 * Para personalizar:
 * 1. Coloca tu imagen dentro de /public/fotos/, ej: /public/fotos/principal.jpg
 * 2. Pasa la ruta en la prop `src`, ej: src="/fotos/principal.jpg"
 * Si `src` no se define, se muestra el marcador punteado (no es clicable).
 */
export default function PhotoSlot({ src, alt, label, aspect = '4 / 3', big = false }) {
  const [hover, setHover] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => src && setOpen(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: '100%',
          aspectRatio: aspect,
          borderRadius: big ? '16px' : '10px',
          overflow: 'hidden',
          background: '#fffdf8',
          border: src ? 'none' : '1.5px dashed #b4b2a9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          color: '#888780',
          cursor: src ? 'pointer' : 'default',
          position: 'relative',
        }}
      >
        {src ? (
          <>
            <img
              src={src}
              alt={alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: hover ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.4s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(44,44,42,0.25)',
                opacity: hover ? 1 : 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fffdf8',
                fontSize: big ? '14px' : '11px',
                letterSpacing: '1px',
              }}
            >
              Ver foto
            </div>
          </>
        ) : (
          <>
            <span style={{ fontSize: big ? '24px' : '18px' }}>📷</span>
            <span style={{ fontSize: big ? '13px' : '10px', textAlign: 'center', padding: '0 6px' }}>{label}</span>
          </>
        )}
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(20,20,18,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: '100%',
              maxHeight: '90vh',
              borderRadius: '8px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          />
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              fontSize: '18px',
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}

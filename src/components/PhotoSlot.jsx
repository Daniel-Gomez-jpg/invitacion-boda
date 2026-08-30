import React, { useState } from 'react'

/**
 * Espacio para una foto, con efecto hover y modal al hacer clic.
 * Para personalizar:
 * 1. Coloca tu imagen dentro de /public/fotos/, ej: /public/fotos/principal.jpg
 * 2. Pasa la ruta en la prop `src`, ej: src="/fotos/principal.jpg"
 * Si `src` no se define, se muestra el marcador punteado (no es clicable).
 */
export default function PhotoSlot({ src, alt, aspect = '4 / 3', isMain = false }) {

  if(isMain){
    return (
      <div
  style={{
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '24px',
    cursor: 'zoom-out',
  }}
>
  <div style={{ position: 'relative', display: 'inline-block' }}>
    {/* Copia de fondo, difuminada, que genera el "glow" */}
    <img
      src={src}
      alt=""
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'blur(30px) saturate(1.5)',
        transform: 'scale(1.05)',
        opacity: 0.7,
        zIndex: -1,
      }}
    />
    <img
      src={src}
      alt={alt}
      style={{
        maxWidth: '100%',
        maxHeight: '60vh',
        borderRadius: '8px',
        display: 'block',
        position: 'relative',
      }}
    />
  </div>
</div>
    )
  }


 return (
  <div
    style={{
      position: 'relative',
      width: '100%',
      aspectRatio: aspect,
    }}
  >
    {/* Glow difuminado: más grande que el contenedor, sin overflow hidden que lo recorte */}
    {src && (
      <img
        src={src}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          
          width: 'calc(100% + 21px)',
          height: 'calc(100% + 10px)',
          objectFit: 'cover',
          filter: 'blur(16px) saturate(1.4)',
          opacity: 0.6,
          zIndex: 0,
        }}
      />
    )}

    {/* Capa visible: foto nítida, recortada, encima del glow */}
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        overflow: 'hidden',
        background: '#fffdf8',
        border: src ? 'none' : '1.5px dashed #b4b2a9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.4s ease',
        }}
      />
    </div>
  </div>
)
}

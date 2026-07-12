import React, { useState } from 'react'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxkwcGa-B9KF3Fo9J4sx0-QPogUAvkgCqO--Y-5twpftlDxU1nZcCPxXI6ntT1odogdHQ/exec'

function primerNombre(nombre) {
  const primero = nombre.trim().split(/\s+/)[0]
  return primero.charAt(0).toUpperCase() + primero.slice(1).toLowerCase()
}

export default function RsvpForm({ guestCount = 1 }) {
  const [status, setStatus] = useState('idle') // idle | loading | ok | duplicate | error
  const [data, setData] = useState({
    name: '',
    attend: 'si',
    bringsCompanion: 'si'
  })

  const handleChange = (field) => (e) => {
    setData({ ...data, [field]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('loading')

  try {
    // Si no asiste, el acompañante también es "no" automáticamente
    const companion = data.attend !== 'si' 
      ? 'no' 
      : guestCount === 2 ? data.bringsCompanion : 'N/A'

    const params = new URLSearchParams({
      action: 'register',
      name: data.name,
      attend: data.attend,
      companion,
      guestCount,
    })

    const response = await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`)
    const result = await response.json()
    setStatus(result.status === 'duplicate' ? 'duplicate' : 'ok')

  } catch (err) {
    setStatus('error')
  }
}

  const inputStyle = {
    width: '100%',
    padding: '9px 10px',
    marginBottom: '14px',
    borderRadius: '8px',
    border: '1px solid #d3d1c7',
    background: '#fffdf8',
  }

  if (status === 'loading') {
    return (
      <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
        <p style={{ color: '#5f5e5a', fontSize: '14px' }}>Enviando confirmación...</p>
      </div>
    )
  }

  if (status === 'ok') {
    const msg = data.attend !== 'si'
      ? 'Lamentamos que no puedas acompañarnos. ¡Gracias por tu confirmación!'
      : guestCount === 2 && data.bringsCompanion === 'si'
        ? 'Te esperamos junto a tu acompañante.'
        : 'Te esperamos en nuestra boda.'
    return (
      <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
        <div style={{ fontSize: '28px' }}>✓</div>
        <p style={{ fontWeight: 500, margin: '8px 0 4px' }}>¡Gracias por confirmar, {primerNombre(data.name)}!</p>
        <p style={{ fontSize: '13px', color: '#5f5e5a', margin: 0 }}>{msg}</p>
      </div>
    )
  }

  if (status === 'duplicate') {
    return (
      <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
        <div style={{ fontSize: '28px' }}>📋</div>
        <p style={{ fontWeight: 500, margin: '8px 0 4px' }}>¡Ya estás registrado, {primerNombre(data.name)}!</p>
        <p style={{ fontSize: '13px', color: '#5f5e5a', margin: 0 }}>
          Tu confirmación ya fue recibida anteriormente. ¡Gracias!
        </p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
        <div style={{ fontSize: '28px' }}>⚠️</div>
        <p style={{ fontWeight: 500, margin: '8px 0 4px' }}>Ocurrió un error</p>
        <p style={{ fontSize: '13px', color: '#5f5e5a', margin: 0 }}>
          Por favor intenta de nuevo o contacta a los novios.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{ marginTop: '12px', padding: '8px 20px', borderRadius: '8px', border: '1px solid #d3d1c7', background: 'transparent', cursor: 'pointer' }}
        >
          Intentar de nuevo
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ fontSize: '13px', color: '#5f5e5a', display: 'block', marginBottom: '4px' }}>
        Nombre completo
      </label>
      <input
        type="text"
        required
        placeholder="Tu nombre"
        value={data.name}
        onChange={handleChange('name')}
        style={inputStyle}
      />

      <label style={{ fontSize: '13px', color: '#5f5e5a', display: 'block', marginBottom: '4px' }}>
        ¿Asistirás?
      </label>
      <select value={data.attend} onChange={handleChange('attend')} style={inputStyle}>
        <option value="si">Sí, ahí estaré 🎉</option>
        <option value="no">No podré asistir</option>
      </select>

      {guestCount === 2 && data.attend === 'si' && (
        <>
          <label style={{ fontSize: '13px', color: '#5f5e5a', display: 'block', marginBottom: '4px' }}>
            ¿Llevarás a tu acompañante?
          </label>
          <select value={data.bringsCompanion} onChange={handleChange('bringsCompanion')} style={inputStyle}>
            <option value="si">Sí, iremos los dos</option>
            <option value="no">No, asistiré solo/a</option>
          </select>
        </>
      )}

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '11px',
          borderRadius: '8px',
          border: 'none',
          background: '#993c1d',
          color: '#fff',
          fontWeight: 500,
        }}
      >
        Enviar confirmación
      </button>
    </form>
  )
}
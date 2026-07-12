import React, { useState } from 'react'

/**
 * guestCount: 1 o 2.
 * - 1: solo se pregunta si asistirá (invitación individual, sin acompañante).
 * - 2: además se pregunta si llevará a su acompañante (invitación doble).
 */
export default function RsvpForm({ guestCount = 1 }) {
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState({
    name: '',
    attend: 'si',
    bringsCompanion: 'si',
    diet: '',
  })

  const handleChange = (field) => (e) => {
    setData({ ...data, [field]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      name: data.name,
      attend: data.attend,
      guestCount,
      bringsCompanion: guestCount === 2 ? data.bringsCompanion : null,
      diet: data.diet,
    }
    // Aquí puedes conectar con tu backend (Google Apps Script, Formspree, etc.)
    // Por ejemplo: fetch('https://tu-endpoint.com/rsvp', { method: 'POST', body: JSON.stringify(payload) })
    console.log('Confirmación recibida:', payload)
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '9px 10px',
    marginBottom: '14px',
    borderRadius: '8px',
    border: '1px solid #d3d1c7',
    background: '#fffdf8',
  }

  if (submitted) {
    let summary
    if (data.attend !== 'si') {
      summary = 'Lamentamos que no puedas acompañarnos.'
    } else if (guestCount === 2) {
      summary =
        data.bringsCompanion === 'si'
          ? 'Te esperamos junto a tu acompañante.'
          : 'Te esperamos, anotado que asistirás solo/a.'
    } else {
      summary = 'Te esperamos en nuestra boda.'
    }

    return (
      <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
        <div style={{ fontSize: '28px' }}>✓</div>
        <p style={{ fontWeight: 500, margin: '8px 0 4px' }}>¡Gracias por confirmar, {data.name || 'invitado'}!</p>
        <p style={{ fontSize: '13px', color: '#5f5e5a', margin: 0 }}>{summary}</p>
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

      {/* Esta pregunta solo aparece cuando la invitación es para 2 personas */}
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

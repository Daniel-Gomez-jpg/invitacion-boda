import React, { useState, useEffect } from 'react'
import Envelope from './components/Envelope.jsx'
import PhotoSlot from './components/PhotoSlot.jsx'
import RsvpForm from './components/RsvpForm.jsx'
import Reveal from './components/Reveal.jsx'
import { CornerFlourishTopLeft, CornerFlourishBottomRight, OrnateDivider } from './components/Botanicals.jsx'
import { RingsIcon, TuxedoIcon, DressIcon, GiftIcon } from './components/Icons.jsx'
import useInView from './hooks/useInView.js'

/**
 * ====== PERSONALIZA AQUÍ ======
 */
const EVENTO = {
  novios: 'Gaby & Jorge',
  fecha: 'Sábado 14 de noviembre, 2026 · 5:00 pm',
  ceremonia: {
    lugar: 'Parque la Satelite, San Salvador',
    hora: '5:00 pm',
  },
  recepcion: {
    lugar: 'Jardines del recuerdo, San Salvador',
    hora: '6:30 pm',
  },
  vestimenta: {
    titulo: 'Formal',
    hombres: 'Traje oscuro, se sugiere corbata o moño.',
    mujeres: 'Vestido largo o de coctel, evitar el blanco.',
  },
  fechaLimiteRsvp: '1 de octubre',
}

/**
 * ====== TUS FOTOS ======
 * Coloca tus imágenes en /public/fotos/ y escribe aquí el nombre de archivo.
 * Ejemplo: "/fotos/principal.jpg". Déjalo en null para mostrar el marcador.
 */
const FOTOS = {
  principal: null,
  foto2: null,
  foto3: null,
  foto4: null,
}

/**
 * ====== INVITADOS POR LINK ======
 * El número de invitados se lee de la URL, ej:
 *   tusitio.com/?invitados=1   -> invitación individual, sin pregunta de acompañante
 *   tusitio.com/?invitados=2   -> invitación doble, pregunta si llevará acompañante
 * Si no se especifica en la URL, se usa el valor por defecto de abajo.
 */
const INVITADOS_POR_DEFECTO = 1

function useGuestCount() {
  const [guestCount, setGuestCount] = useState(INVITADOS_POR_DEFECTO)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const value = parseInt(params.get('guests'), 10)
    if (value === 1 || value === 2) {
      setGuestCount(value)
    }
  }, [])

  return guestCount
}

function GiftSection() {
  const [giftRef, giftInView] = useInView()
  const [giftAnimate, setGiftAnimate] = useState(false)

  useEffect(() => {
    if (giftInView && !giftAnimate) {
      const t = setTimeout(() => setGiftAnimate(true), 900)
      return () => clearTimeout(t)
    }
  }, [giftInView])

  return (
    <div className="gift-card" style={{backgroundColor:'#fffafaaf'}}>
      <div ref={giftRef}>
        <GiftIcon animate={giftAnimate} style={{ marginBottom: '6px' }} />
      </div>
      <p style={{ fontWeight: 500, margin: '8px 0 4px' }}>Sobre de regalo</p>
      <p style={{ fontSize: '13px', color: '#5f5e5a', margin: 0, lineHeight: 1.6 }}>
        Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros,
        agradecemos de corazón un sobre con tu contribución el día del evento.
      </p>
    </div>
  )
}

export default function App() {
  const [giftRef, giftInView] = useInView()
const [giftAnimate, setGiftAnimate] = useState(false)
  const [opened, setOpened] = useState(false)
  const guestCount = useGuestCount()

  useEffect(() => {
  if (giftInView && !giftAnimate) {
    const t = setTimeout(() => setGiftAnimate(true), 900)
    return () => clearTimeout(t)
  }
}, [giftInView])

  return (
    <div className={`page${!opened ? ' centered' : ''}`} style={{backgroundColor:'#fffafaaf'}}>
      {/* Capa fija de decoración floral, siempre visible detrás de la tarjeta */}
      <div className="botanical-layer" aria-hidden="true">
        <CornerFlourishTopLeft className="botanical botanical-tl" />
        <CornerFlourishBottomRight className="botanical botanical-br" />
      </div>

      <div className="page-inner">
        {!opened && <Envelope onOpen={() => setOpened(true)} />}

        {opened && (
          <div className="invite-card">
            {/* Hojas decorativas en los márgenes internos de la tarjeta blanca */}
            <CornerFlourishTopLeft className="botanical-margin botanical-margin-tr" aria-hidden="true" />
            <CornerFlourishBottomRight className="botanical-margin botanical-margin-bl" aria-hidden="true" />

            <div className="invite-content">
              <Reveal effect="fade">
                <PhotoSlot src={FOTOS.principal} alt="Foto principal de la pareja" label="FOTO PRINCIPAL — pareja" big />
              </Reveal>

              <Reveal effect="fade" delay={0.1}>
                <div style={{ textAlign: 'center' }}>
                  <p className="serif" style={{ fontSize: '13px', letterSpacing: '2px', color: '#5f5e5a', margin: '20px 0 4px' }}>
                    NOS CASAMOS
                  </p>
                  <h1 className="serif title" style={{ fontSize: '34px', fontWeight: 'bold', margin: '0 0 8px', color:'#000080' }}>
                    {EVENTO.novios}
                  </h1>
                  <p style={{ fontSize: '15px', color: '#5f5e5a', margin: '0 0 4px' }}>{EVENTO.fecha}</p>

                  <OrnateDivider style={{ margin: '4px auto 22px', display: 'block' }} />
                </div>
              </Reveal>

              <Reveal effect="fade" delay={0.15}>
                <div className="photo-grid">
                  <PhotoSlot src={FOTOS.foto2} alt="Foto 2" label="FOTO 2" aspect="1 / 1" />
                  <PhotoSlot src={FOTOS.foto3} alt="Foto 3" label="FOTO 3" aspect="1 / 1" />
                  <PhotoSlot src={FOTOS.foto4} alt="Foto 4" label="FOTO 4" aspect="1 / 1" />
                </div>
              </Reveal>

              {/* Sección de detalles: ceremonia, recepción y código de vestimenta */}
              <Reveal effect="slide-left" delay={0.05}>
                <div className="details-card" style={{backgroundColor:'#fffafaaf'}}>
                  <div className="detail-block">
                    <RingsIcon />
                    <h4 className="serif detail-title">Ceremonia</h4>
                    <p className="detail-text" style={{fontSize:'32px'}}>{EVENTO.ceremonia.lugar}</p>
                    <p className="detail-text detail-hour" >{EVENTO.ceremonia.hora}</p>
                  </div>

                  <div className="detail-divider" />

                  <div className="detail-block">
                    <RingsIcon />
                    <h4 className="serif detail-title">Recepción</h4>
                    <p className="detail-text">{EVENTO.recepcion.lugar}</p>
                    <p className="detail-text detail-hour">{EVENTO.recepcion.hora}</p>
                  </div>

                  <div className="detail-divider" />

                  <div className="detail-block">
                    <h4 className="serif detail-title">Código de vestimenta — {EVENTO.vestimenta.titulo}</h4>
                    <div className="dress-code-row">
                      <div className="dress-code-col">
                        <TuxedoIcon />
                        <p className="detail-text">{EVENTO.vestimenta.hombres}</p>
                      </div>
                      <div className="dress-code-col">
                        <DressIcon />
                        <p className="detail-text">{EVENTO.vestimenta.mujeres}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal effect="slide-right" delay={0.1}>
                <GiftSection />
              </Reveal>

              <Reveal effect="slide-up" delay={0.15}>
                <div className="rsvp-section">
                  <h3 className="serif" style={{ margin: '0 0 4px', textAlign: 'center', fontSize: '22px' }}>
                    Confirma tu asistencia
                  </h3>
                  <p style={{ fontSize: '13px', color: '#5f5e5a', textAlign: 'center', margin: '0 0 1.25rem' }}>
                    Por favor confirma antes del {EVENTO.fechaLimiteRsvp}
                  </p>
                  <RsvpForm guestCount={guestCount} />
                </div>
              </Reveal>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

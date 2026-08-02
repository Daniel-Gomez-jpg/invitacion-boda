import React, { useState, useEffect } from 'react'
import Envelope from './components/Envelope.jsx'
import PhotoSlot from './components/PhotoSlot.jsx'
import RsvpForm from './components/RsvpForm.jsx'
import Reveal from './components/Reveal.jsx'
import { CornerFlourishTopLeft, CornerFlourishBottomRight, OrnateDivider, SimpleDivider } from './components/Botanicals.jsx'
import { RingsIcon, TuxedoIcon, DressIcon, GiftIcon, BoyIcon, ToastIcon } from './components/Icons.jsx'
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
  principal: "/fotos/couple-main.jpeg",
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
    <div className="gift-card" style={{backgroundColor:'rgb(244 227 227 / 69%)'}}>
      <div ref={giftRef}>
        <GiftIcon animate={giftAnimate} style={{ marginBottom: '6px' }} />
      </div>
      <p style={{ fontWeight: 500, margin: '8px 0 4px', fontFamily: '"Cormorant Upright", serif', fontSize: '22px', color: '#E1B3B9'}}>Regalo de sobre</p>
      <p style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '17px', color: '#364573', margin: 0, lineHeight: 1.6 }}>
        Si deseas tener un detalle con nosotros,
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
        {!opened && <Envelope onOpen={() => setOpened(true)} guests={guestCount}/>}

        {opened && (
          <div className="invite-card">
            {/* Hojas decorativas en los márgenes internos de la tarjeta blanca */}
            <CornerFlourishTopLeft className="botanical-margin botanical-margin-tr" aria-hidden="true" color="green" />
            <CornerFlourishBottomRight className="botanical-margin botanical-margin-bl" aria-hidden="true" color="green" />

            <div className="invite-content">
              <Reveal effect="fade">
                <PhotoSlot src={FOTOS.principal} alt="Foto principal de la pareja" label="FOTO PRINCIPAL — pareja" big  isMain={true}/>
              </Reveal>

              <Reveal effect="fade" delay={0.1}>
                <div style={{ textAlign: 'center' }}>
                  <p className="serif" style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '16px', letterSpacing: '2px', color: '#E1B3B9', margin: '25px 0 4px' }}>
                    ¡NOS CASAMOS!
                  </p>
                  <h1 className="serif title" style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '34px', fontWeight: 600, margin: '0 0 8px', color:'#2B304C' }}>
                    {EVENTO.novios}
                  </h1>
                  <p style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '15px', color: '#E1B3B9', margin: '0 0 4px' }}>{EVENTO.fecha}</p>

                  {/* <OrnateDivider style={{ margin: '4px auto 22px', display: 'block' }} /> */}
                  <SimpleDivider style={{ margin: '0 auto 16px', display: 'block' }} />
                </div>
              </Reveal>

              <Reveal effect="fade" delay={0.15}>
  <div style={{ textAlign: 'center', margin: '0 0 30px' }}>
    <p style={{
      fontFamily: '"Cormorant Upright", serif', fontSize: '18px',
      color: '#E1B3B9',
      letterSpacing: '1px',
      margin: '0 0 12px',
      fontStyle: 'italic',
    }}>
      Con la bendición de Dios y de nuestros padres
    </p>

    {/* Padres novio */}
    <p className="serif" style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '25px', fontWeight: '500', color: '#3D4D85', margin: 0, lineHeight: 1.5 }}>
      Napoleón Gómez
    </p>
    <p className="serif" style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '25px', fontWeight: '500', color: '#3D4D85', margin: 0, lineHeight: 1.5 }}>
      Emma del Rosario de Gómez
    </p>

    {/* Separador */}
    <p style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '22px', color: '#8a8367', margin: '10px 0', letterSpacing: '2px' }}>&amp;</p>

    {/* Padres novia */}
    <p className="serif" style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '25px', fontWeight: '500', color: '#3D4D85', margin: 0, lineHeight: 1.5 }}>
      Adonay Mancía
    </p>
    <p className="serif" style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '25px', fontWeight: '500', color: '#3D4D85', margin: 0, lineHeight: 1.5, marginBottom: "20px" }}>
      Thelma de Mancía
    </p>
    
  <SimpleDivider style={{ margin: '0 auto 16px', display: 'block' }} />
    
  </div>
</Reveal>

    

              <Reveal effect="fade" delay={0.15}>
                <div className="photo-grid">
                  <PhotoSlot src={FOTOS.foto2} alt="Foto 2" label="FOTO 2" aspect="1 / 1" />
                  <PhotoSlot src={FOTOS.foto3} alt="Foto 3" label="FOTO 3" aspect="1 / 1" />
                  <PhotoSlot src={FOTOS.foto4} alt="Foto 4" label="FOTO 4" aspect="1 / 1" />
                </div>
              </Reveal>

              <div style={{ margin: '20px auto 20px', maxWidth: '420px' }}> 
      <p style={{
        fontFamily: '"Cormorant Upright", serif',
        fontSize: '18px',
        fontWeight: '300',
        color: '#E1B3B9',
        fontStyle: 'italic',
        lineHeight: 1.8,
        margin: '0 0 10px',
        letterSpacing: '0.3px',
      }}>
        "El que halló esposa halló el bien, y alcanzó la benevolencia del Señor."
      </p>
      <p style={{
        fontFamily: '"Cormorant Upright", serif',
        fontSize: '15px',
        fontWeight: '400',
        color: '#3D4D85',
        margin: 0,
        letterSpacing: '1px',
      }}>
        — Proverbios 18:22
      </p>
    </div>

              {/* Sección de detalles: ceremonia, recepción y código de vestimenta */}
              <Reveal effect="slide-left" delay={0.05}>
                <div className="details-card" style={{backgroundColor:'rgb(244 227 227 / 69%)'}}>
                  <div className="detail-block">
                    <RingsIcon />
                    <h4 style={{color: '#E1B3B9', fontWeight: '600', fontSize: '22px'}} className="serif detail-title">Ceremonia</h4>
                    <p className="detail-text" style={{fontFamily: '"Cormorant Upright", serif', fontSize:'32px', color: '#364573'}}>{EVENTO.ceremonia.lugar}</p>
                    <p className="detail-text detail-hour" style={{fontSize: '22px', color: '#364573'}} >{EVENTO.ceremonia.hora}</p>
                  </div>

                  <div className="detail-divider" />

                  <div className="detail-block">
                    <ToastIcon />
                    <h4 style={{color: '#E1B3B9', fontWeight: '600', fontSize: '22px'}} className="serif detail-title">Recepción</h4>
                    <p className="detail-text"  style={{fontFamily: '"Cormorant Upright", serif', fontSize:'32px', color: '#364573'}} >{EVENTO.recepcion.lugar}</p>
                    <p className="detail-text detail-hour" style={{fontSize:'22px', color: '#364573'}}>{EVENTO.recepcion.hora}</p>
                  </div>

                  <div className="detail-divider" />

                  <div className="detail-block">
                    <h4 style={{color: '#E1B3B9', fontWeight: '600', fontSize: '22px'}} className="serif detail-title">Código de vestimenta — {EVENTO.vestimenta.titulo}</h4>
                    <div className="dress-code-row">
                      <div className="dress-code-col">
                        <TuxedoIcon />
                        <p className="detail-text" style={{fontFamily: '"Cormorant Upright", serif', color: '#364573'}}>{EVENTO.vestimenta.hombres}</p>
                      </div>
                      <div className="dress-code-col">
                        <DressIcon />
                        <p className="detail-text" style={{fontFamily: '"Cormorant Upright", serif', color: '#364573'}}>{EVENTO.vestimenta.mujeres}</p>
                      </div>
                    </div>
                  </div>
                  <div className="detail-divider" />

                  <div className="detail-block">
                    <BoyIcon/>
                    <h4 style={{ color: '#E1B3B9', fontWeight: '600', fontSize: '22px' }} className="serif detail-title">
                      Evento solo para adultos
                    </h4>
                    <p style={{
                      fontFamily: '"Cormorant Upright", serif',
                      fontSize: '17px',
                      color: '#364573',
                      margin: '4px 0 0',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                    }}>
                      Con todo el cariño, les pedimos que esta celebración sea un espacio exclusivo para adultos. Agradecemos su comprensión.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal effect="slide-right" delay={0.1}>
                <GiftSection />
              </Reveal>
                <SimpleDivider style={{ margin: '0 auto 16px', display: 'block' }} />
              <Reveal effect="slide-up" delay={0.15}>
                <div className="rsvp-section">
                  <h3 className="serif" style={{ margin: '0 0 4px', textAlign: 'center', fontFamily: '"Cormorant Upright", serif', fontSize: '22px', color: '#E1B3B9' }}>
                    Confirma tu asistencia
                  </h3>
                  <p style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '13px', color: '#785353', textAlign: 'center', margin: '0 0 1.25rem' }}>
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

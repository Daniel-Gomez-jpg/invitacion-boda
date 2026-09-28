import React, { useState, useEffect } from 'react'
import Envelope from './components/Envelope.jsx'
import PhotoSlot from './components/PhotoSlot.jsx'
import RsvpForm from './components/RsvpForm.jsx'
import Reveal from './components/Reveal.jsx'
import { CornerFlourishTopLeft, CornerFlourishBottomRight, OrnateDivider, SimpleDivider } from './components/Botanicals.jsx'
import { RingsIcon, TuxedoIcon, DressIcon, GiftIcon, BoyIcon, ToastIcon } from './components/Icons.jsx'
import useInView from './hooks/useInView.js'


const EVENTO = {
  novios: 'Gabriela & Jorge',
  fecha: 'Sábado 13 de Febrero, 2027',
  ceremonia: {
    lugar: 'Parroquia Sagrado Corazón de María',
  hora: '4:00 pm',
  maps: '79+Av+Sur+200+San+Salvador',
  },
  recepcion: {
    lugar: 'Hotel Hilton,',
    salon: 'Salón Costa del sol',
  hora: '6:00 pm',
  maps: '89+Av+Norte+y+11+Calle+Poniente+Colonia+Escalon+San+Salvador+1101+El+Salvador',
  },
  vestimenta: {
    titulo: 'Formal',
    hombres: 'Traje formal con corbata o moño.',
    mujeres: 'Vestido largo, evitar el blanco.',
  },
  fechaLimiteRsvp: '1 de Noviembre',
}

const FOTOS = {
  principal: "/fotos/couple-main.jpeg",
  foto2: "/fotos/secondary-image-2.jpeg",
  foto3: "/fotos/secondary-image-1.jpeg",
  foto4: "/fotos/secondary-image-3.jpeg",
}

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
    <div className="gift-card" style={{backgroundColor:'rgb(235 223 223 / 69%)'}}>
      <div ref={giftRef}>
        <GiftIcon animate={giftAnimate} style={{ marginBottom: '6px' }} />
      </div>
      <p style={{ fontWeight: 500, margin: '8px 0 4px', fontFamily: '"Cormorant Upright", serif', fontSize: '22px', color: '#C35E67'}}>Regalo de sobre</p>
      <p style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '17px', color: '#364573', margin: 0, lineHeight: 1.6 }}>
        Agradeceremos mucho su regalo en sobre el día del evento.
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

function getMapUrl(coords) {
  const ua = navigator.userAgent.toLowerCase()
  if (/android/.test(ua)) {
    return `geo:${coords}?q=${coords}`  // Android: abre selector de apps
  }
  if (/iphone|ipad|ipod/.test(ua)) {
    return `maps://maps.apple.com/?q=${coords}` // iOS: Apple Maps con selector
  }
  return `https://www.google.com/maps?q=${coords}` // escritorio: Google Maps
}

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
            <CornerFlourishTopLeft className="botanical-margin botanical-margin-tr" aria-hidden="true" color="#3D4D85" />
            <CornerFlourishBottomRight className="botanical-margin botanical-margin-bl" aria-hidden="true" color="#3D4D85" />

            <div className="invite-content">
              <Reveal effect="fade">
                <PhotoSlot src={FOTOS.principal} alt="Foto principal de la pareja" label="FOTO PRINCIPAL — pareja" big  isMain={true}/>
              </Reveal>

              <Reveal effect="fade" delay={0.1}>
                <div style={{ textAlign: 'center' }}>
                  <p className="serif" style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '16px', fontWeight: 'bolder', letterSpacing: '2px', color: '#C35E67', margin: '25px 0 4px' }}>
                    ¡NOS CASAMOS!
                  </p>
                  <h1 className="serif title" style={{ fontFamily: '"Cormorant Upright", serif', fontSize: '34px', fontWeight: 600, margin: '0 0 8px', color:'#2B304C' }}>
                    {EVENTO.novios}
                  </h1>

                  {/* <OrnateDivider style={{ margin: '4px auto 22px', display: 'block' }} /> */}
                  <SimpleDivider style={{ margin: '0 auto 16px', display: 'block' }} />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '0 0 30px' }}>
  {/* Número del día */}
  <span style={{
    fontFamily: '"Cormorant Upright", serif',
    fontSize: '72px',
    fontWeight: '500',
    color: '#3D4D85',
    lineHeight: 1,
    marginTop: '-20px',
  }}>
    13
  </span>

  {/* Día y mes apilados */}
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <span style={{
      fontFamily: '"Cormorant Upright", serif',
      fontSize: '19px',
      fontWeight: '800',
      color: '#C35E67',
      letterSpacing: '3px',
      lineHeight: 1.2,
      textTransform: 'uppercase',
    }}>
      Sábado
    </span>
    <span style={{
      fontFamily: '"Cormorant Upright", serif',
      fontSize: '19px',
      fontWeight: '800',
      color: '#C35E67',
      letterSpacing: '3px',
      lineHeight: 1.2,
      textTransform: 'uppercase',
    }}>
      Febrero
    </span>
  </div>
</div>
                </div>
              </Reveal>

              <Reveal effect="fade" delay={0.15}>
  <div style={{ textAlign: 'center', margin: '0 0 30px' }}>
    <p style={{
      fontFamily: '"Cormorant Upright", serif', fontSize: '19px',
      color: '#C35E67',
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
        fontSize: '19px',
        fontWeight: '300',
        color: '#C35E67',
        fontStyle: 'italic',
        lineHeight: 1.8,
        margin: '0 0 10px',
        letterSpacing: '0.3px',
      }}>
        "Encontré el amor de mi vida, lo he abrazado y no lo dejaré jamás"
      </p>
      <p style={{
        fontFamily: '"Cormorant Upright", serif',
        fontSize: '15px',
        fontWeight: '400',
        color: '#3D4D85',
        margin: 0,
        letterSpacing: '1px',
      }}>
        —  cantares 3:4
      </p>
    </div>

              {/* Sección de detalles: ceremonia, recepción y código de vestimenta */}
              <Reveal effect="slide-left" delay={0.05}>
                <div className="details-card" style={{backgroundColor:'rgb(235 223 223 / 69%)'}}>
                  <div className="detail-block">
                    <RingsIcon />
                    <h4 style={{color: '#C35E67', fontWeight: '600', fontSize: '22px'}} className="serif detail-title">Ceremonia</h4>
                    <p className="detail-text" style={{fontFamily: '"Cormorant Upright", serif', fontSize:'32px', color: '#364573'}}>{EVENTO.ceremonia.lugar}</p>
                    <p className="detail-text detail-hour" style={{fontSize: '22px', color: '#364573'}} >{EVENTO.ceremonia.hora}</p>
                    <a
                      href={getMapUrl(EVENTO.ceremonia.maps)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        marginTop: '10px',
                        padding: '7px 19px',
                        borderRadius: '20px',
                        border: '1px solid #364573',
                        color: '#364573',
                        fontSize: '12px',
                        fontFamily: '"Jost", sans-serif',
                        letterSpacing: '0.5px',
                        textDecoration: 'none',
                      }}
                    >
                      Ver mapa
                    </a>
                  </div>

                  <div className="detail-divider" />

                  <div className="detail-block">
                    <ToastIcon />
                    <h4 style={{color: '#C35E67', fontWeight: '600', fontSize: '22px'}} className="serif detail-title">Recepción</h4>
                    <p className="detail-text"  style={{fontFamily: '"Cormorant Upright", serif', fontSize:'32px', color: '#364573'}} >{EVENTO.recepcion.lugar}</p>
                    <p className="detail-text"  style={{fontFamily: '"Cormorant Upright", serif', fontSize:'32px', color: '#364573'}} >{EVENTO.recepcion.salon}</p>
                    <p className="detail-text detail-hour" style={{fontSize:'22px', color: '#364573'}}>{EVENTO.recepcion.hora}</p>
                    <a
                      href={getMapUrl(EVENTO.recepcion.maps)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        marginTop: '10px',
                        padding: '7px 19px',
                        borderRadius: '20px',
                        border: '1px solid #364573',
                        color: '#364573',
                        fontSize: '12px',
                        fontFamily: '"Jost", sans-serif',
                        letterSpacing: '0.5px',
                        textDecoration: 'none',
                      }}
                    >
                      Ver mapa
                    </a>
                  </div>

                  <div className="detail-divider" />

                  <div className="detail-block">
                    <h4 style={{color: '#C35E67', fontWeight: '600', fontSize: '22px'}} className="serif detail-title">Código de Vestimenta — {EVENTO.vestimenta.titulo}</h4>
                    <div className="dress-code-row">
                      <div className="dress-code-col">
                        <TuxedoIcon />
                        <p className="detail-text" style={{fontFamily: '"Cormorant Upright", serif', color: '#364573', fontSize:'17px'}}>{EVENTO.vestimenta.hombres}</p>
                      </div>
                      <div className="dress-code-col">
                        <DressIcon />
                        <p className="detail-text" style={{fontFamily: '"Cormorant Upright", serif', color: '#364573', fontSize:'17px'}}>{EVENTO.vestimenta.mujeres}</p>
                      </div>
                    </div>
                  </div>
                  <div className="detail-divider" />

                  <div className="detail-block">
                    <BoyIcon/>
                    <h4 style={{ color: '#C35E67', fontWeight: '600', fontSize: '22px' }} className="serif detail-title">
                      Celebración para Adultos
                    </h4>
                    <p style={{
                      fontFamily: '"Cormorant Upright", serif',
                      fontSize: '17px',
                      color: '#364573',
                      margin: '4px auto 0',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                      maxWidth: '320px',
                      textAlign: 'center'
                    }}>
                      Esta celebración ha sido pensada para disfrutarse entre adultos. Gracias por comprendernos.
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
                  <h3 className="serif" style={{ margin: '0 0 4px', textAlign: 'center', fontFamily: '"Cormorant Upright", serif', fontSize: '22px', color: '#C35E67' }}>
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

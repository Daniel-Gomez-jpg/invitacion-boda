import React from 'react'
import useInView from '../hooks/useInView.js'

/**
 * Envuelve cualquier sección y la anima al entrar en pantalla.
 * effect: "fade" | "slide-left" | "slide-right" | "slide-up"
 */
export default function Reveal({ children, effect = 'fade', delay = 0, style = {} }) {
  const [ref, inView] = useInView()

  const transforms = {
    fade: 'translateY(0)',
    'slide-left': inView ? 'translateX(0)' : 'translateX(-40px)',
    'slide-right': inView ? 'translateX(0)' : 'translateX(40px)',
    'slide-up': inView ? 'translateY(0)' : 'translateY(40px)',
  }

  const startTransform = {
    fade: 'translateY(14px)',
    'slide-left': 'translateX(-40px)',
    'slide-right': 'translateX(40px)',
    'slide-up': 'translateY(40px)',
  }

  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate(0,0)' : startTransform[effect],
        transition: `opacity 2s ease ${delay}s, transform 2s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

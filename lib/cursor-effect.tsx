'use client'

import React, { ReactNode } from 'react'

const CursorEffectPosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 500, y: 500 })

  React.useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}

interface CursorEffectProps {
  children: ReactNode
  className: string
}
const CursorEffect: React.FC<CursorEffectProps> = ({ children, className }) => {
  const effectColor = 'rgba(147, 51, 234, 0.15)'
  return (
    <div
      style={{
        backgroundImage: `radial-gradient( 1200px at ${CursorEffectPosition().x}px ${CursorEffectPosition().y}px, ${effectColor}, transparent 80% )`
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default CursorEffect

'use client'

import Link from 'next/link'
import { useCallback, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  download?: boolean | string
  disabled?: boolean
  strength?: number
}

const MagneticButton = ({
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  download = false,
  disabled = false,
  strength = 0.18,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const shouldReduceMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.25 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.25 })
  const springRotate = useSpring(rotate, { stiffness: 200, damping: 15, mass: 0.3 })

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || shouldReduceMotion || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const offsetX = (event.clientX - centerX) * strength
      const offsetY = (event.clientY - centerY) * strength
      x.set(offsetX)
      y.set(offsetY)
      rotate.set((offsetX / rect.width) * 8)
    },
    [disabled, shouldReduceMotion, strength, x, y, rotate]
  )

  const handleMouseEnter = useCallback(() => {
    if (disabled || shouldReduceMotion) return
    setIsHovering(true)
  }, [disabled, shouldReduceMotion])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    x.set(0)
    y.set(0)
    rotate.set(0)
  }, [x, y, rotate])

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || shouldReduceMotion || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const id = Date.now()
      setRipples((prev) => [
        ...prev,
        { id, x: event.clientX - rect.left, y: event.clientY - rect.top },
      ])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 600)
    },
    [disabled, shouldReduceMotion]
  )

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleClick}
      style={{ x: springX, y: springY, rotate: springRotate }}
      animate={{ scale: isHovering && !shouldReduceMotion && !disabled ? 1.03 : 1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ scale: { duration: 0.2, ease: 'easeOut' } }}
      className={`group relative inline-flex overflow-hidden will-change-transform ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}
    >
      {!shouldReduceMotion && !disabled && (
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_50%_50%,rgba(47,92,255,0.18),transparent_65%)]"
        />
      )}

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-white/30"
      />

      {!shouldReduceMotion &&
        ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            aria-hidden="true"
            initial={{ width: 0, height: 0, opacity: 0.35 }}
            animate={{ width: 240, height: 240, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: ripple.x,
              top: ripple.y,
              translateX: '-50%',
              translateY: '-50%',
              borderRadius: '9999px',
              background: 'rgba(47,92,255,0.35)',
              pointerEvents: 'none',
            }}
          />
        ))}

      <span className="relative z-10">{children}</span>
    </motion.div>
  )

  if (href) {
    return (
      <Link
        href={disabled ? '#' : href}
        download={download || undefined}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault()
            return
          }
          onClick?.()
        }}
        className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5CFF] focus-visible:ring-offset-4 dark:focus-visible:ring-offset-darkTheme"
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5CFF] focus-visible:ring-offset-4 dark:focus-visible:ring-offset-darkTheme"
    >
      {content}
    </button>
  )
}

export default MagneticButton
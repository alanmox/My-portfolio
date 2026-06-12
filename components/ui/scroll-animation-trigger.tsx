'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollAnimationTriggerProps {
  children: ReactNode
  effect?: 'fade' | 'slide' | 'scale' | 'custom'
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  fromScale?: number
  toScale?: number
  className?: string
  customProps?: {
    initial?: Record<string, number>
    animate?: Record<string, number>
    transition?: Record<string, unknown>
  }
}

const getAnimation = (
  effect: string,
  direction: string,
  fromScale: number,
  toScale: number,
  customProps?: Record<string, unknown>
) => {
  if (effect === 'custom' && customProps) {
    return {
      initial: customProps.initial,
      whileInView: customProps.animate,
      viewport: { once: true, margin: '-50px' },
      transition: customProps.transition,
    }
  }

  const directions: Record<string, Record<string, number>> = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  }

  const dir = directions[direction] || directions.up

  switch (effect) {
    case 'fade':
      return {
        initial: { opacity: 0, ...dir },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, margin: '-50px' },
      }
    case 'slide':
      return {
        initial: { opacity: 0, ...dir },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, margin: '-50px' },
      }
    case 'scale':
      return {
        initial: { opacity: 0, scale: fromScale },
        whileInView: { opacity: 1, scale: toScale },
        viewport: { once: true, margin: '-50px' },
      }
    default:
      return {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
      }
  }
}

export function ScrollAnimationTrigger({
  children,
  effect = 'fade',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  fromScale = 0.8,
  toScale = 1,
  className,
  customProps,
}: ScrollAnimationTriggerProps) {
  const animation = getAnimation(effect, direction, fromScale, toScale, customProps)

  return (
    <motion.div
      {...animation}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

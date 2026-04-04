import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  ...props
}: {
  children: ReactNode
  className?: string
  delay?: number
} & Omit<HTMLMotionProps<'div'>, 'children'>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      variants={defaultVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

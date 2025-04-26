import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

type MotionWrapperProps = {
  children: ReactNode
  className?: string
  initial?: MotionProps['initial']
  animate?: MotionProps['animate']
  transition?: MotionProps['transition']
}

export const MotionWrapper = ({
  children,
  className,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
}: MotionWrapperProps) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

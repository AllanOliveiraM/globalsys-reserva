import { ReactNode } from 'react'

import { motion } from 'framer-motion'

type FadeInProps = {
  children: ReactNode
  show?: boolean
}

const motionVariants = {
  hidden: {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  },
  visible: {
    opacity: 1,
    display: 'block',
  },
}

const FadeIn = ({ children, show }: FadeInProps) => {
  if (typeof show === 'boolean') {
    return (
      <motion.div
        initial='hidden'
        animate={show ? 'visible' : 'hidden'}
        variants={motionVariants}
        transition={{ duration: 0.16 }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.16 }}
    >
      {children}
    </motion.div>
  )
}

FadeIn.defaultProps = {
  show: undefined,
}

export default FadeIn

import { motion } from "motion/react"

const AnimateBox = ({ children }) => {

  return (
    <motion.div
      whileInView={{ opacity: [0,1], y: [70, -10, 0] }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut"}}
    >

      {children}
    </motion.div>
  )
}

export default AnimateBox

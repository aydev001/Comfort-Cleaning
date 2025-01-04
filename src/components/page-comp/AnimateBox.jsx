import { motion } from "motion/react"

const AnimateBox = ({ children }) => {

  return (
    <motion.div
      whileInView={{ opacity: [0,1], y: [70, -10, 0] }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2}}
    >

      {children}
    </motion.div>
  )
}

export default AnimateBox

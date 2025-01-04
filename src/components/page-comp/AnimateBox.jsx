import { motion } from "motion/react"

const AnimateBox = ({ children }) => {

  return (
    <motion.div
    initial = {{opacity : 0}}
      whileInView={{ opacity: [0,1], y: [70, -10, 0] }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeInOut"}}
    >

      {children}
    </motion.div>
  )
}

export default AnimateBox

import { motion } from "framer-motion";
import React from "react";

const AnimateCards = ({ children, classNames = "", variant="left" }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0},
        visible: { opacity: 1, x: variant=="left"? [-70, 50, 0] : 0, y: variant=="top"? [50, -30, 0] : 0, transition: { duration: 0.8, ease: "easeInOut", } }, 
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, amount: 0.3 }} 
            className={classNames}>
            {React.Children.map(children, (child, index) => (
                <motion.div key={index} variants={childVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};


export default AnimateCards;

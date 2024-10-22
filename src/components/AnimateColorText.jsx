import { motion } from 'framer-motion';


export default function AnimateColorText({ className, delay, children, shadow = true, primary = "#00A3FF", secondary = "#00FF85" }) {
  const shadowProperties = shadow ? "2px 2px 0px" : "0px 0px 0px";

  return (
    <motion.span 
      className={className}
      animate={{
        color: [primary, secondary],
        textShadow: [
          `${shadowProperties} ${primary}`,
          `${shadowProperties} ${secondary}`
        ]
      }}
      transition={{
        delay: delay || 0,
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }}
    >
      {children}
    </motion.span>
  )
}
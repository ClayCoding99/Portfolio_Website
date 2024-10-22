import { useEffect, useRef } from 'react'
import {motion, useAnimationControls, useInView} from "framer-motion";


export default function SlideInAnimation({children}) {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const controls = useAnimationControls(null);
    
    useEffect(() => {
        if (isInView) {
            controls.start("end");
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            variants={{
                initial: {
                    x: "-50%",
                    opacity: 0,
                },
                end: {
                    x: 0,
                    opacity: 1
                }
            }}
            initial="initial"
            transition={{
                duration: 0.5,
                ease: "easeInOut"
            }}
            animate={controls}
        >
            {children}
        </motion.div>
  )
}

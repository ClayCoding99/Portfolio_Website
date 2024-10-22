import { useEffect, useRef} from 'react'
import {motion, useAnimationControls, useInView} from "framer-motion";


export default function BounceAnimation({className, children}) {
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
            className={className}
            ref={ref}
            variants={{
                end: {
                    x: [0, 100, 0, 50, 0, 10, 0],
                },
            }}
            initial="initial"
            transition={{
                
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.5, 0.6, 0.7, 1]
            }}
            animate={controls}
        >
            {children}
        </motion.div>
  );
}

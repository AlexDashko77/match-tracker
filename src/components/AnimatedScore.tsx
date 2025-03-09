import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const AnimatedScore = ({ value }: { value: number }) => {
    const motionValue = useMotionValue(value);
    const displayValue = useTransform(motionValue, (latest) => Math.round(latest)); 

    useEffect(() => {
        const controls = animate(motionValue, value, {
            duration: 1, 
            ease: "easeOut", 
        });

        return controls.stop; 
    }, [value, motionValue]);

    return (
        <motion.span>
            {displayValue}
        </motion.span>
    );
};

export default AnimatedScore;

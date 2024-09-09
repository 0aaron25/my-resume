import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface MoveDiv {
  children: React.ReactNode;
  delayOffset?: number;
  className?: string;
}

function MotionDiv({ delayOffset, children, className }: MoveDiv) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        delay: delayOffset,
      }}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;

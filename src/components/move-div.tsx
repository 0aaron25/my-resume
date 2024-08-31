import { motion, useInView } from "framer-motion";

function MoveDiv() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello World</h1>
    </motion.div>
  );
}

export default MoveDiv;

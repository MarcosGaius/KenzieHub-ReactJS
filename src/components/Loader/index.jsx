import { AnimatePresence, motion } from "framer-motion";
import { LoaderWrapper, LoadingCircle } from "./styles";

export default function Loader() {
  const circleTransition = {
    duration: 1.2,
    ease: "linear",
    repeat: Infinity,
  };

  return (
    <AnimatePresence>
      <LoaderWrapper>
        <LoadingCircle
          as={motion.div}
          animate={{ rotate: "360deg" }}
          transition={circleTransition}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p>Carregando...</p>
        </motion.div>
      </LoaderWrapper>
    </AnimatePresence>
  );
}

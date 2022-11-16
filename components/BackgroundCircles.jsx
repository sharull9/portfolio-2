import { motion } from "framer-motion";

function BackgroundCircles({}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 4, 1],
        opacity: [0.1, 0.2, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping mt-52" />
      <div className="absolute border border-[#333333]/20 rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#333333]/40 rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border border-[#f7ab0a] rounded-full opacity-20 h-[650px] mt-52 w-[650px] animate-pulse" />
      <div className="absolute border border-[#333333]/60 rounded-full h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;

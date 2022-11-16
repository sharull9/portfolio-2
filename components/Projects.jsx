import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

export default function Projects({ projects }) {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center z-0 h-[500px]"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative max-w-7xl w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-400">
        {projects.map((project, i) => (
          <ProjectItem key={project._id} index={i + 1} project={project} />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-slate-400/40 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

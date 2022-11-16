import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function WorkExperience({ experiences }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative overflow-hidden md:flex-row text-center md:text-left max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="max-w-7xl w-full flex mt-20 space-x-5 overflow-x-scroll md:p-10 snap-x snap-mandotary scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-400">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;

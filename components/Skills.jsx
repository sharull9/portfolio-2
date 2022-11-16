import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

function Skills({ skills }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-24 uppercase tracking-[3px] text-gray-500 text-2xl">
        Hover over on skills to see a current profieciency
      </h3>
      <div className="max-w-2xl w-full flex flex-row flex-wrap gap-10">
        {skills?.map((skill) => (
          <SkillItem key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;

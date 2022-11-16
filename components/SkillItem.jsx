import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";

export default function SkillItem({ directionLeft, skill }) {
  return (
    <div className="group relative flex cursor-pointer flex-shrink-0">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{
          once: true,
        }}
        className="rounded-full relative border w-24 md:w-28 xl:w-32 h-24 md:h-28 xl:h-32 border-gray-500 group overflow-hidden bg-white"
      >
        <Image
          src={urlFor(skill.image).url()}
          alt={skill?.title}
          className=" h-full object-contain filter group-hover:blur transition duration-200 ease-in-out"
          fill
        />
      </motion.div>
      <div className="absolute opacity-0 inset-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/40 w-24 md:w-28 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">
            {skill?.progress}
          </p>
        </div>
      </div>
    </div>
  );
}

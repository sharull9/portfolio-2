import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { urlFor } from "../sanity";

export default function ProjectItem({ project, index }) {
  const i = 0;
  return (
    <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center md:p-20 xl:p-44 h-full">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="relative w-full h-96 overflow-hidden rounded-md"
      >
        <Image
          alt=""
          src={urlFor(project?.image).url()}
          className="w-full h-full object-contain rounded-md"
          fill
        />
      </motion.div>
      <div>
        <h4 className="text-xl text-center">
          {index}. Project{" "}
          <span className="font-bold text-2xl">
            {project?.title.toUpperCase()}
          </span>
        </h4>
        <div className="flex items-center space-x-3 mt-6 mb-6">
          {project.technologies.map((technology) => (
            <div
              key={technology._id}
              className="h-10 w-10 relative rounded-full overflow-hidden"
            >
              <Image src={urlFor(technology.image).url()} alt="" fill />
            </div>
          ))}
        </div>
        <p className="text-lg text-center md:text-left">{project?.summary}</p>
        <div className="flex justify-center items-center">
          <button className="px-3 py-1 border border-[#f7ab0a] rounded mt-10 bg-[#f7ab0a] text-black font-bold hover:text-white hover:border-white hover:bg-transparent">
            <Link href={project?.linkToBuild}>Live Site</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

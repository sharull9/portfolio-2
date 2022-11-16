import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";

function About({ pageInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="relative mt-24 mb-0 md:mt-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] overflow-hidden rounded-full md:rounded-lg"
      >
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          alt="userPhoto"
          fill
          sizes="100%"
          priority
          className="object-cover absolute top-[-19px]"
        />
      </motion.div>
      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl text-semibold">
          Something{" "}
          <span className="underline decoration-[#333333]">About</span> me
        </h4>
        <p className="text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;

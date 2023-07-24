import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchSkills } from "../utils/fetchSkills";

export default function Home({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
}) {
  return (
    <div className="bg-[rgb(26,26,26)] text-white overflow-x-hidden overflow-y-scroll snap-y snap-mandatory z-0 h-screen scroll-smooth scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-400">
      <span id="backtotop"></span>
      <Head>
        <title>Sharull | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="ahrefs-site-verification" content="b6059a678253c9d0e244faa6576a7d1a9fb9ed47db62c84c30fd5e299b3412d0">
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <div className="absolute bottom-10 right-10">
        <Link href="#backtotop">
          <ArrowUpCircleIcon className="w-10 h-10" />
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperience();
  const projects = await fetchProjects();
  const skills = await fetchSkills();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    revalidate: 86400,
  };
};

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";


function Header({ socials }) {
  return (
    <header className="sticky top-0 p-5 max-w-7xl w-full mx-auto">
      <div className="flex flex-row items-center justify-between">
        {/* social icons */}
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="cursor-pointer"
          suppressHydrationWarning
        >
          <div>
            <SocialIcon
              network="email"
              url="#contact"
              fgColor="gray"
              bgColor="transparent"
            />
            <Link href="#contact">
              <p className="uppercase hidden md:inline-flex text-sm text-gray-400 font-semibold">
                Get in touch
              </p>
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;

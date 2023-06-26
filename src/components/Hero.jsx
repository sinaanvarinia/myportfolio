import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-contain">
      <div
        className={`${styles.paddingX}  absolute inset-0 top-[4rem] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className=" w-5 h-5  rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Sina</span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            I am a frontend developer; <br className="hidden sm:block" />
             using new technologies to help adding value to companies.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute z-10 xs:bottom-10 bottom-36 w-full flex justify-center items-center">
        <a href="#about">
          <div className="rounded-3xl border-4 border-secondary flex justufy-center items-start p-2 w-[35px] h-[64px]">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-3"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { BsLinkedin, BsMailbox, BsPhone } from "react-icons/bs";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const [loading, setLoading] = useState(false);
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form className="mt-12 flex flex-col gap-8">
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <div className="bg-tertiary flex items-center cursor-pointer border-none font-medium py-4 px-6 text-white rounded-lg outlined-none ">
              <BsMailbox size={30} className="m-3" color="red" />
              <a href="mailto: Sina.anvarinia@gmail.com"></a>
              <span className="ml-3">Sina.anvarinia@gmail.com</span>
            </div>
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Phone</span>
            <div className="bg-tertiary flex items-center cursor-text border-none font-medium  py-4 px-6 text-white rounded-lg outlined-none">
              <BsPhone size={30} className="m-3" color="green" />
              <span>+989029010914</span>
            </div>
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Linkedin Profile
            </span>
            <div className="bg-tertiary items-center flex flex-row cursor-text border-none font-medium  py-4 px-6 text-white rounded-lg outlined-none">
              <BsLinkedin size={30} className="m-3" color="#3e7ad4" />
              <a
                href="https://www.linkedin.com/in/sina-anvarinia"
                rel="noreferrer"
                target="_blank"
              >
                Click to see my profile
              </a>
            </div>
          </label>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

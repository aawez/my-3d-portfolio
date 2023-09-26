import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { close_red , github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-works p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {source_code_link? (
            <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          ) : null}
            
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-auto pt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  // Ref to the modal content div
  const modalContentRef = React.useRef(null);

  const handleOverlayClick = (e) => {
    // If the click is not on the modal content or its children, close the modal
    if (!modalContentRef.current.contains(e.target)) {
      onClose();
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return ReactDOM.createPortal(
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-100 backdrop-blur-sm"
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween" }} // You can adjust the transition type and properties as needed
    >
      <motion.div
        ref={modalContentRef} // Applying ref to the modal content div
        className="bg-[#0A0A0A] p-5 rounded-xl max-w-xl w-full"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          ref={modalContentRef} // Applying ref to the modal content div
          className="bg-[#0A0A0A] p-8 rounded-xl max-w-xl w-full"
        >
          <button
            onClick={onClose}
            className="float-right hover:text-[#bcbcbc] mt-1.5"
          >
            <img src={close_red} alt="close" className="w-6 h-6 hover:opacity-75"/>
            
          </button>
          <h2 className="text-white font-bold text-[24px]">{project.name}</h2>
          <img
            src={project.image}
            alt={project.name}
            className="w-full object-cover rounded-md py-5"
          />
          <div className="pb-2">
          {project.link1_name ? (
            <a
              href={project.link1}
              target="_blank"
              className="text-[#FF920B] border-2 border-[#FF920B] font-medium px-2 py-1 rounded inline-block hover:text-[#d37b0e] hover:border-[#d37b0e] mr-2"
            >
              {project.link1_name}
            </a>
          ) : null}

          {project.link2_name ? (
            <a
              href={project.link2}
              target="_blank"
              className="bg-[#FF920B] border-2 border-[#FF920B] text-black font-medium px-2 py-1 rounded inline-block hover:bg-[#d37b0e] hover:border-[#d37b0e] ml-1"
            >
              {project.link2_name}
            </a>
          ) : null}
          </div>
          <p className="mt-2 pb-2 text-secondary text-[14px]">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <span key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </span>
            ))}
          </div>
          {/* Render other details of your project here */}
        </div>
      </motion.div>
    </motion.div>,
    document.getElementById("modal-root")
  );
};

const Works = () => {
  // State to control which project is selected and if the modal is open
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal and set the selected project
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Function to close modal and unset the selected project
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.section2SubText}>My work</p>
        <h2 className={styles.section2HeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-black text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <div
            className="mt-20 flex flex-wrap gap-7 cursor-pointer"
            key={`project-${index}`}
            onClick={() => openModal(project)}
          >
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "project");

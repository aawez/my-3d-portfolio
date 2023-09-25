import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedBackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-[#0A0A0A] p-10 rounded-3xl xs:w-[320px] w-full flex flex-col" // Added flex and flex-col here
  >
    
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1 flex-1"> {/* Added flex-1 here to ensure that this div takes up all available space */}
      <p className="text-white tracking-wider text-[18px] pb-5">{testimonial}</p>
    </div>
    <div className="mt-7 flex justify-between items-center gap-1 mt-auto"> {/* Added mt-auto here */}
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation}, at {company}
        </p>
      </div>
      <div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  
  </motion.div>
);
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black rounded-[20px]">
      <div
        className={`${styles.padding} bg-worksbg rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.section2SubText}>What others say</p>
          <h2 className={styles.section2HeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedBackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

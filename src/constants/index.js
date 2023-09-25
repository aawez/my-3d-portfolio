import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    azilen,
    impero,
    shopify,
    palette,
    eightbit,
    thesis,
    threejs,
    jugal,
    preet,
    arpit,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Machine Learning",
      icon: web,
    },
    {
      title: "Web Development",
      icon: mobile,
    },
    {
      title: "Backend Engineering",
      icon: backend,
    },
    {
      title: "Cloud Computing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Sofware Engineering Intern",
      company_name: "Azilen Technologies Pvt. Ltd.",
      icon: azilen,
      iconBg: "#494949",
      date: "December 2019 - May 2020",
      points: [
        "Created a real-time people counting system with OpenCV using pyimagesearch and mobilenet_ssd, tracking entry and exit times.",
        "Developed an 83% accurate LSTM and ARIMA restaurant sales prediction model through comprehensive data cleaning and preprocessing.",
        "Increased sales by 17% by performing Market Basket Analysis with Apriori on supermarket data, optimizing product grouping for upselling.",
        "Evaluated user interaction logs from eMenu iPad app, deriving key metrics to guide UI/UX enhancements.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "Impero IT Services Pvt. Ltd.",
      icon: impero,
      iconBg: "#494949",
      date: "May 2019 - July 2019",
      points: [
        "Conducted comprehensive data analysis of Google Play Store metrics to identify emerging market trends specific to photo editing applications.",
        "Created insightful visualizations that decoded patterns and preferences within the photo editing app domain, assisting in market positioning.",
        "Leveraged Tableau to design and present dynamic visualizations highlighting evolving fashion trend shifts.",
        "Collaborated closely with clients, ensuring the data analysis accurately captured and conveyed the essence of their new clothing line's market positioning.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I was impressed by Aawez's ability to quickly learn and adopt new technologies. He is an adept problem-solver who can tackle complex issues.",
      name: "Jugal Bhavsar",
      designation: "CTO",
      company: "Rootle.ai",
      image: jugal,
    },
    {
      testimonial:
        "Aawez's strong knowledge of machine learning helped us create innovative solutions and meet project needs using the latest technology and methods.",
      name: "Preet Merchant",
      designation: "Sofware Engineer",
      company: "Amazon",
      image: preet,
    },
    {
      testimonial:
        "I highly recommend Aawez for his expertise in DevOps and AWS, particularly in optimizing CI/CD pipelines for efficient and reliable software deliveries.",
      name: "Arpit Christie",
      designation: "DevOps Manager",
      company: "Azilen",
      image: arpit,
    },
  ];
  
  const projects = [
    {
      name: "GPT-3 Palette Generator",
      description:
        "Web application leveraging OpenAI's GPT3.5 Turbo API, enabling users to input text prompts and receive custom color palettes generated in real-time, enhancing creative design processes. Deployed on AWS using Elasticbeanstalk and implemented CI/CD with CodePipeline.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
        {
          name: "aws",
          color: "orange-text-gradient",
        },
      ],
      image: palette,
      source_code_link: "https://github.com/aawez/color-palette-using-gpt3/",
      link1_name: "Github",
      link1: "https://github.com/aawez/color-palette-using-gpt3/",
      link2_name: "View Live",
      link2: "http://palette.aawez.com/",
    },
    {
      name: "8Bit Audio",
      description:
        "8bit Audio, a curated online hub, provides users with an array of royalty-free sound effects, audio samples, and presets. With a keen eye for design, the platform is intricately crafted, boasting both aesthetic appeal and user-friendly navigation, ensuring content creators and audiophiles find the perfect sound with ease.",
      tags: [
        {
          name: "founder",
          color: "blue-text-gradient",
        },
        {
          name: "ui/ux",
          color: "green-text-gradient",
        },
        {
          name: "integration",
          color: "pink-text-gradient",
        },
      ],
      image: eightbit,
      source_code_link: "",
      link1_name: "",
      link1: "",
      link2_name: "View Live",
      link2: "https://8bit.audio/",
    },
    {
      name: "Intrusion Detection",
      description:
        "Conducted Master’s thesis research on Few-Shot Learning for network intrusion detection, utilizing Prototypical Networks on the NSL-KDD dataset. Developed a model achieving 95.6% accuracy with less than 1% of training data, demonstrating notable efficiency and precision.  ",
      tags: [
        {
          name: "research",
          color: "blue-text-gradient",
        },
        {
          name: "deep-learning",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: thesis,
      source_code_link: "https://github.com/aawez/Network-Intrusion-Detection-using-Prototypical-Networks-on-NSL-KDD-Dataset/",
      link1_name: "Github",
      link1: "https://github.com/aawez/Network-Intrusion-Detection-using-Prototypical-Networks-on-NSL-KDD-Dataset/",
      link2_name: "View Paper",
      link2: "https://scholarworks.calstate.edu/concern/theses/9593v2185",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
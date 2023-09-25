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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
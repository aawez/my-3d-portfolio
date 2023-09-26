import { BrowserRouter } from "react-router-dom";
import { Element } from 'react-scroll';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Element name="about">
          <About />
          </Element>
          <Element name="work">
          <Experience />
          <Tech />
          </Element>
        </div>
        <Element name="project">
        <div className="bg-worksbg">
          <Works />
        </div>
        </Element>
        
        <div className="bg-primary">
        <Element name="kudos">
          <Feedbacks />
          </Element>
          <Element name="contact">
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          </Element>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

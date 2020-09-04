import React from "react";
import Common from "./Common";
import about from '../images/about.png';

const About = () => {
  return (
    <React.Fragment>
      <Common
        name="Welcome to About page"
        imgSrc={about}
        visit="/contact"  
        btnName="Contact Now" 
    />
    </React.Fragment>
  );
};

export default About;

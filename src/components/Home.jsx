import React from "react";
import Common from "./Common";
import home from '../images/home2.png';

const Home = () => {
  // const img = `https://cdn.tkmkt.com/wp-content/uploads/2019/04/tk-services-01-1024x866.png`;

  return (
    <React.Fragment>
      <Common 
        name="Grow your business with"
        imgSrc={home}
        visit="/service"  
        btnName="Get Started" 
      />
    </React.Fragment>
  );
};

export default Home;

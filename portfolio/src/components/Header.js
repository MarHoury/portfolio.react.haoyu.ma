import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Web Development</h1>
        <Typed 
          className="typed-text" 
          strings={["JavaScript", "TypeScript", "Java", "Scala", "Angular", "React", "Spring", "HTML", "CSS", "Akka"]} 
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  )
}

export default Header


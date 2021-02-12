import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mg-5">
            <img className="profile-img" src={author} alt="Haoyu Ma" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>I caught fire coding. <br/><br/> My specialities include quickly learning new skills and programming languages, problem solving, responsive design principles, design pattern, domain-driven design (DDD). So far I have JavaScript, TypeScript, HTML, CSS, Angular, React, Java, Spring, and Git/GitHub under my belt. I've started learning Node.js, MongoDB, and Express.js. <br/><br/>I'm still enthusiastically grabbing onto any other programming languages, frameworks, or principles I can integrate into the coding web in my head. </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

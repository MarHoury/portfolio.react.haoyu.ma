import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mg-5">
            <img className="profile-img" src={author} alt="Haoyu Ma" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>this is introduction of myself</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

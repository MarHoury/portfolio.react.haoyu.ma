import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3 className="">2013.07 - 2015.06</h3>
            <p className=""><b>China Pacific Insurance Company</b></p>
            <p>Mainly responsible for the code development of the member modules and marketing modules of the e-commerce platform.</p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3 className="">2015.06 - 2018.9</h3>
            <p className=""><b>China Merchants Bank</b></p>
            <p>Mainly experienced three projects, risk management system, marketing system, recommendation system. Mainly responsible for business needs analysis, system architecture design and code implementation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

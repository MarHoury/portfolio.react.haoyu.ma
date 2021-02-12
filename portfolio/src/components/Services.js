import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faEllipsisH } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faJsSquare} size="2x" />
              </div>
              <h3>Frontend</h3>
              <p>JavaScript, HTML, CSS, Angular, React</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faJava} size="2x" />
              </div>
              <h3>Backend</h3>
              <p>Java, Spring, Scala, Akka</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDatabase} size="2x" />
              </div>
              <h3>Database</h3>
              <p>SQL Server, MySQL, Oracle, Redis, MongoDB, OrientDB, ArangoDB</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faEllipsisH} size="2x" />
              </div>
              <h3>Others</h3>
              <p>Apache Storm, Spark, Kafka, MQ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

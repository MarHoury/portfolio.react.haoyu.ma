import React from 'react'
import newZealandTravelGuide from '../images/new-zealand-travel-guide-1.jpg'
import cityTourShanghai from '../images/city-tour-shanghai-1.png'
import marketingSystem from '../images/marketing-system-1.png'

import covid19 from '../images/covid19.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css'


const Portfolio = () => {
  const openPopupboxCovid19 = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={covid19} alt="Covid 19" />
        <p>This is a mobile application that captures the Covid-19 cases announced by DHB every day in real time and displays them in different ways. The back end is a Java application using Spring Boot, and the front end is two applications, one is based on React and the other is based on React Native.</p>
        <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/MarHoury/covid-19")}>https://github.com/MarHoury/covid-19</a>
      </>
    )
    PopupboxManager.open({content});
  }

  const openPopupboxNewZealandTravelGuide = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={newZealandTravelGuide} alt="New Zealand Travel Guide" />
        <p>New Zealand Travel Guide is a mobile application based on Google Places API, which uses Flutter.</p>
        <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/MarHoury/new_zealand_travel_guide")}>https://github.com/MarHoury/new_zealand_travel_guide</a>
      </>
    )
    PopupboxManager.open({content});
  }

  const openPopupboxMarketingSystem = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={marketingSystem} alt="Marketing System" />
        <p>The marketing system is an application that separates the front and back ends. The front end is implemented using Angular, and the back end is a Spring Boot application using Java.</p>
        <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/MarHoury/MarketingSystem")}>https://github.com/MarHoury/MarketingSystem</a>
      </>
    )
    PopupboxManager.open({content});
  }

  const openPopupboxCityTour = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={cityTourShanghai} alt="City Tour Shanghai" />
        <p>City Tour is a front-end application implemented with Angular, mainly used to show different tourist attractions in the city of Shanghai.</p>
        <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/MarHoury/CityTours")}>https://github.com/MarHoury/CityTours</a>
      </>
    )
    PopupboxManager.open({content});
  }

  const popupboxConfig = {
    fadeIn: true,
    fadeInSpeed: 300
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxCovid19}>
            <img className="portfolio-image" src={covid19} alt="Covid-19" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxNewZealandTravelGuide}>
            <img className="portfolio-image" src={newZealandTravelGuide} alt="New Zealand Travel Guide" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxMarketingSystem}>
            <img className="portfolio-image" src={marketingSystem} alt="Marketing System" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxCityTour}>
            <img className="portfolio-image" src={cityTourShanghai} alt="City Tour - Shanghai" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfig}/>
    </div>
  )
}

export default Portfolio

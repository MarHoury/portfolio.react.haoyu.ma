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
        <p>test test test</p>
        <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/MarHoury/covid-19")}>https://github.com/MarHoury/covid-19</a>
      </>
    )
    PopupboxManager.open({content});
  }

  const popupboxConfigCovid19 = {
    titleBar: {
      enable: true,
      text: "Covid 19 Cases Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openPopupboxNewZealandTravelGuide = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={newZealandTravelGuide} alt="New Zealand Travel Guide" />
        <p>test test test</p>
        <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/MarHoury/new_zealand_travel_guide")}>https://github.com/MarHoury/new_zealand_travel_guide</a>
      </>
    )
    PopupboxManager.open({content});
  }

  const popupboxConfigNewZealandTravelGuide = {
    titleBar: {
      enable: true,
      text: "New Zealand Travel Guide Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openPopupboxMarketingSystem = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={marketingSystem} alt="Marketing System" />
        <p>test test test</p>
        <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/MarHoury/MarketingSystem")}>https://github.com/MarHoury/MarketingSystem</a>
      </>
    )
    PopupboxManager.open({content});
  }

  const popupboxConfigMarketingSystem = {
    titleBar: {
      enable: true,
      text: "Marketing System Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openPopupboxCityTour = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={cityTourShanghai} alt="City Tour Shanghai" />
        <p>test test test</p>
        <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/MarHoury/CityTours")}>https://github.com/MarHoury/CityTours</a>
      </>
    )
    PopupboxManager.open({content});
  }

  const popupboxConfigCityTour = {
    titleBar: {
      enable: true,
      text: "City Tour Shanghai Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
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
      <PopupboxContainer {...popupboxConfigCovid19}/>
      <PopupboxContainer {...popupboxConfigNewZealandTravelGuide}/>
      <PopupboxContainer {...popupboxConfigMarketingSystem}/>
      <PopupboxContainer {...popupboxConfigCityTour}/>
    </div>
  )
}

export default Portfolio

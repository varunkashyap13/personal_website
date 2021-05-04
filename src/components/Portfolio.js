import React from 'react'
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
//FONT AWESOME IMPORTS
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons"
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {
//Netflix
const openPopupboxNetflix = () => {
    const content= (
        <>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix"/>
        <p>Project for netflix</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("http://www.github.com/varunkashyap13")}>http://www.github.com/varunkashyap13</a>
        </>
    )
    PopupboxManager.open({content})
}
const popupboxConfigNetflix = {
    titleBar: {
        enable: true,
        text: "Netflix Clone Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

//
// const openPopupboxNetflix = () => {
//     const content= (
//         <>
//         <img className="portfolio-image-popupbox" src={netflix} alt="Netflix"/>
//         <p>Project for netflix</p>
//         <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("http://www.github.com/varunkashyap13", "_blank")}>http://www.github.com/varunkashyap13</a>
//         </>
//     )
//     PopupboxManager.open({content})
// }
// const popupboxConfigNetflix = {
//     titleBar: {
//         enable: true,
//         text: "Netflix Clone Project"
//     },
//     fadeIn: true,
//     fadeInSpeed: 500
// }




    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                        <img className="portfolio-image" src={netflix} alt="Netflix"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={cityGuide} alt="City Guide"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={portfolio} alt="Portfolio"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={taskManager} alt="Task Manager"></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigNetflix} />
        </div>
    )
}

export default Portfolio

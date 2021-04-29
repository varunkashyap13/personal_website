import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="box">
                              <div className="circle"><FontAwesomeIcon className="icon" icon={faGithub} size="2x"/></div>
                                <h3>GitHub</h3> 
                                <p>random text description</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faLinkedin} size="2x"/></div>
                                <h3>LinkedIn</h3>
                                <p>random text description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services

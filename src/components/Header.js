import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Varun Kashyap</h1>
                <Typed
                className="typed-text"
                strings={["Designer", "Innovator", "Leader"]}
                typeSpeed={80}
                backSpeed={60}
                backDelay={2000}
                loop
                />

                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header

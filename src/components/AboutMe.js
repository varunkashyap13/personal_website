import React from "react";
import author from "../me.jpeg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-4">
                    <img className="profile-img" src={author} alt="author"/></div>
                    </div>
                <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About Me</h1>
                <p>
                I’ve always had the desire to create great experiences. From my days of performing as a percussionist to organizing dance competitions, the goal was to deliver the best possible experience for the customer. When I joined The UPS Store, that very goal is what led me to build a prototype for an application that would help us decrease customer wait times. Through the development of this application, I became fascinated with programming and began to see how much value a software solution can bring to a business and its customers.

Currently a technologist in the making at The Johns Hopkins University, my goal is to become a product manager. This role would allow me to combine my backgrounds in business, technology, and psychology to help deliver products that can improve the lives of people all over the world.

Technical skills: Java, Python, JavaScript, HTML, CSS

Hobbies/Interests: Playing sports, reading, music production, listening to podcasts (Masters of Scale, The School of Greatness, How I Built This) 
                </p>
                </div>
            </div>

        </div>
    )
}

export default AboutMe

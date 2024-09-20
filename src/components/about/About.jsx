import React from 'react'
import './About.css'
const About = () => {
    return (
        <section className="about" id="About">
            <div className="container">
                <div className="heading">
                    <h1>About Me</h1>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 px-10 mt-5 lg:mt-0">
                    <div >
                        <div className="card-me">
                            <h2>About Me</h2>
                            <p>
                                My name is Mohamed Wael, and I am passionate about Mern Stack development. Although
                                I graduated with a degree in Computer Science from facualty of Computers and Informations at Tana University,
                                I found my interest leaning towards the tech field and decided to change my career path.
                                To make this career shift, I completed a Diploma in Computer Science
                                at the Faculty of Computers and Informations Studies for Statistical Research, Tanta University.
                                As MERN my ability is to integrate frontend and backend technologies to create dynamic web applications In React Skilled to developing Responsive UI.
                                In Nodejs Strong scalable server-side application In Express Proficient in building flexible and secure backend application In Mongodb Experienced in
                                working with it for database In problem solving Ability to troubleshoot and resolve complex technical challenges These skills enable me to build scalable,
                                efficient,and web applications using MERN Stack Development
                            </p>
                        </div>
                    </div>
                    <div >
                        <div className="">
                            <dotlottie-player src="https://lottie.host/219421be-1ce5-4f70-89a7-76b77621fd25/6hhOthKOTj.json"
                                background="transparent" speed="1" style={{ width: '100%', height: '100%' }} loop autoplay></dotlottie-player>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
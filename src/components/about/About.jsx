import React from 'react'
import './About.css'
const About = () => {
    return (
        <section className="about" id="About">
            <div className="container">
                <div className="heading">
                    <h1>About Me</h1>
                </div>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 px-4 sm:mt-6 mt-0 lg:px-10">
                    <div >
                        <div className="card-me">
                            <h2>About Me</h2>
                            <p>
                                My name is Mohamed Wael, and I am passionate about front-end development. Although I graduated with a
                                degree in
                                Sociology from the Faculty of Arts at Cairo University, I found my interest leaning towards the tech field
                                and decided to change my career path. To make this career shift, I completed a Diploma in Computer Science
                                at the Faculty of Graduate Studies for Statistical Research, Cairo University.
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
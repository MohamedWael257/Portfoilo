import React from 'react'
import './Education.css'
import { FaAddressCard } from 'react-icons/fa6'
const Education = () => {
    return (
        <section className="education" id="Education">
            <div className="container">
                <div className="heading">
                    <h1>Educations</h1>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 px-10">
                    {/* <dotlottie-player
                        src="https://lottie.host/21552016-1a16-4dbb-a1fa-2ad78f700999/Dgcu6nWlmI.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '100%', height: '100%' }}
                        loop
                        autoplay>
                    </dotlottie-player> */}
                    <div className="wrapper-cards">
                        <div className="card-education">
                            <div className="wrapper-card">
                                <div className="education-duration">
                                    <p>2020 – 2024</p>
                                </div>
                                <div className="education-details">
                                    <div className="education-icon">
                                        <FaAddressCard className='text-[var(--main-color)]' size={30} />
                                    </div>
                                    <div className="education-info">
                                        <p className="education-degree">Faculty Of Copmputer And Information</p>
                                        <p>Tanta University</p>
                                        <p className="education-degree">GBA : 3.3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-education">
                            <div className="wrapper-card">
                                <div className="education-duration">
                                    <p>January 2023 - March 2023</p>
                                </div>
                                <div className="education-details">
                                    <div className="education-icon">
                                        <FaAddressCard className='text-[var(--main-color)]' size={30} />
                                    </div>
                                    <div className="education-info">
                                        <p className="education-degree">Introduction to web technology</p>
                                        <p>ITI</p>
                                        <p>In this training .I have Learned HTML, CSS, JavaScript and performed a lot of tasks.
                                            And in final performed final project.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-education">
                            <div className="wrapper-card">
                                <div className="education-duration">
                                    <p>April 2023 - july 2023</p>
                                </div>
                                <div className="education-details">
                                    <div className="education-icon">
                                        <FaAddressCard className='text-[var(--main-color)]' size={30} />
                                    </div>
                                    <div className="education-info">
                                        <p className="education-degree">Web Design</p>
                                        <p>NTI</p>
                                        <p>In this Course .I have Learned HTML, CSS, Bootstrap, JavaScript and performed a lot
                                            of tasks.And in final performed final project
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-cards">
                        <div className="card-education">
                            <div className="wrapper-card">
                                <div className="education-duration">
                                    <p>January 2023 - June 2023</p>
                                </div>
                                <div className="education-details">
                                    <div className="education-icon">
                                        <FaAddressCard className='text-[var(--main-color)]' size={30} />
                                    </div>
                                    <div className="education-info">
                                        <p className="education-degree">Back-end course</p>
                                        <p>Tech Time</p>
                                        <p> I am currently studying in a tech ti</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-education">
                            <div className="wrapper-card">
                                <div className="education-duration">
                                    <p>August 2023 - February 2024</p>
                                </div>
                                <div className="education-details">
                                    <div className="education-icon">
                                        <FaAddressCard className='text-[var(--main-color)]' size={30} />
                                    </div>
                                    <div className="education-info">
                                        <p className="education-degree"> FullStack Development ( Nodejs )</p>
                                        <p>SEF</p>
                                        <p>Learning from frontend Development Html,css,js, bootstrap, jQuery, react
                                            And from backend development Nodejs, Mongodb, express</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-education">
                            <div className="wrapper-card">
                                <div className="education-duration">
                                    <p>August 2024 - October 2024</p>
                                </div>
                                <div className="education-details">
                                    <div className="education-icon">
                                        <FaAddressCard className='text-[var(--main-color)]' size={30} />
                                    </div>
                                    <div className="education-info">
                                        <p className="education-degree">Frontend React js Training</p>
                                        <p>SEF</p>
                                        <p>In training, I implemented two major projects for the company. The goal of the
                                            training is to be able to work on large projects and strengthen my CV so that I can
                                            find a suitable position.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>)
}

export default Education
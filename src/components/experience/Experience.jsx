import React from 'react'
import './Experience.css'
import { FaAddressCard } from 'react-icons/fa6'
const Experience = () => {
    return (
        <section className="experience" id="Experience">
            <div className="container">
                <div className="heading">
                    <h1>Job Experience</h1>
                </div>
                <div className='px-20'>
                    {/* <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 px-10">
                    <div>
                        <div className="">
                            <dotlottie-player src="https://lottie.host/21552016-1a16-4dbb-a1fa-2ad78f700999/Dgcu6nWlmI.json"
                                background="transparent" speed="1" style={{ width: '100%', height: '100%' }} loop autoplay></dotlottie-player>
                        </div>
                    </div> */}
                    <div>
                        <div className="wrapper-cards">
                            <div className="card-experience">
                                <div className="wrapper-card">
                                    <div className="experience-duration">
                                        <p>2020 – 2024</p>
                                    </div>
                                    <div className="experience-details">
                                        <div className="experience-icon">
                                            <FaAddressCard className='text-[var(--main-color)]' size={30} />
                                        </div>
                                        <div className="experience-info">
                                            <p className="experience-degree">Faculty Of Copmputer And Information</p>
                                            <p>Tanta University</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-experience">
                                <div className="wrapper-card">
                                    <div className="experience-duration">
                                        <p>August 2022 - May 2023</p>
                                    </div>
                                    <div className="experience-details">
                                        <div className="experience-icon">
                                            <FaAddressCard className='text-[var(--main-color)]' size={30} />
                                        </div>
                                        <div className="experience-info">
                                            <p className="experience-degree">Diploma, Front End Developer</p>
                                            <p>Eraasoft</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-experience">
                                <div className="wrapper-card">
                                    <div className="experience-duration">
                                        <p>2018 – 2020</p>
                                    </div>
                                    <div className="experience-details">
                                        <div className="experience-icon">
                                            <FaAddressCard className='text-[var(--main-color)]' size={30} />
                                        </div>
                                        <div className="experience-info">
                                            <p className="experience-degree">Diploma, Computer Science at Faculty Of Graduate Studies For Statistical
                                                Research</p>
                                            <p>Cairo University</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
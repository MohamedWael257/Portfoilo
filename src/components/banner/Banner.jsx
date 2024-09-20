import React from 'react'
import 'animate.css';
import './Banner.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaIdCard, FaLinkedin } from 'react-icons/fa6';
import { FaArrowCircleDown } from 'react-icons/fa';
const Banner = () => {
    return (
        <section className='banner'>
            <div className="container">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 md:px-10 px-4">
                    <div className="intro">
                        <div className="text">
                            <h1>Welcome,</h1>
                            <p>I'm <span>Mohamed Wael</span>,<br /> a <span>Mern stack Developer</span></p>
                        </div>
                        <div className="icons flex">
                            <Link to="https://www.linkedin.com/in/mohamed-wael8b359a27a">
                                <i><FaLinkedin /></i>
                            </Link>
                            <Link to="https://github.com/MohamedWael257">
                                <i><FaGithub /></i>
                            </Link>
                            <Link to="https://www.facebook.com/mohamedwael450?mibextid=ZbWKwL">
                                <i><FaFacebook /></i>
                            </Link>
                        </div>
                        <div className="buttons">
                            <button className='flex'>
                                <a href="#Contact">
                                    CONTACT ME
                                    <i><FaIdCard className='inline-block' size={25} /></i>
                                </a>
                            </button>
                            <button>
                                <Link to='https://drive.google.com/file/d/1c9-2AfGb1pm-FVeGtBeALKnIFQCHA_3M/view?usp=drive_link'>                                GET RESUME
                                    <i><FaArrowCircleDown className='inline-block' size={25} /></i>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="card-skills object-card">
                        <div className="bubbles">
                            <span className="bg-purple"></span>
                            <span className="bg-purple"></span>
                            <span className="bg-purple"></span>
                        </div>
                        <code>
                            <div>
                                <span className="text-purple">const</span>
                                <span className="text-white">mernStackDeveloper</span>
                                <span className="text-purple">=</span>
                                <span className="text-gray">{'{'}</span>
                            </div>
                            <div className="m-l-20">
                                <span className="text-white">name:</span>
                                <span className="text-gray">'</span>
                                <span className="text-orange">Mohamed Wael</span>
                                <span className="text-gray">'</span>
                                <span className="text-gray">,</span>
                            </div>
                            <div className="m-l-20">
                                <span className="text-white">title:</span>
                                <span className="text-gray">'</span>
                                <span className="text-orange">Mern Stack Developer</span>
                                <span className="text-gray">'</span>
                                <span className="text-gray">,</span>
                            </div>
                            <div className="m-l-20">
                                <span className="text-white">skills:</span>
                                <span className="text-orange">
                                    <span className="text-gray">['</span>HTML<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>CSS<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>Bootstrap<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>Sass<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>Tailwind<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>Javascript<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>TypeScript<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>React<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>React Router Dom<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>Redux Toolkit<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>Redux<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>NextJs<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>NodeJs<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>MongoDb<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>Express<span className="text-gray">'],</span>
                                </span>
                            </div>
                            <div className="m-l-20">
                                <span className="text-white">tools:</span>
                                <span className="text-orange">
                                    <span className="text-gray">['</span>GitHub<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>Git<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>Webpack<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>NPM<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>Docker<span className="text-gray">'</span>
                                </span>
                                <span className="text-gray">,</span>
                                <span className="text-orange">
                                    <span className="text-gray">'</span>Postman<span className="text-gray">'],</span>
                                </span>
                            </div>
                            <div className="m-l-20">
                                <span className="text-white">hardWorker:</span>
                                <span className="text-orange">true</span>
                                <span className="text-gray">,</span>
                            </div>
                            <div className="m-l-20">
                                <span className="text-white">quickLearner:</span>
                                <span className="text-orange">true</span>
                                <span className="text-gray">,</span>
                            </div>
                            <div className="m-l-20">
                                <span className="text-white">problemSolver:</span>
                                <span className="text-orange">true</span>
                                <span className="text-gray">,</span>
                            </div>
                            <div className="m-l-20">
                                <span className="text-green">employable:</span>
                                <span className="text-orange">function</span>
                                <span className="text-gray">() {'}'}</span>
                            </div>
                            <span className="m-l-40 text-orange">return</span>
                            <span className="text-gray">(</span>
                            <div className="m-l-60">
                                <span className="text-cyan">this.</span><span className="text-white">hardWorker</span>
                                <span className="text-orange">&&</span>
                            </div>
                            <div className="m-l-60">
                                <span className="text-cyan">this.</span><span className="text-white">problemSolver</span>
                                <span className="text-orange">&&</span>
                            </div>
                            <div className="m-l-60">
                                <span className="text-cyan">this.</span><span className="text-white">skills.length</span>
                                <span className="text-orange">{'>'}=</span>
                                <span className="text-orange">5</span>
                            </div>
                            <span className="m-l-60 text-gray">);</span>
                            <div className="text-gray m-l-40">{'}'}</div>
                            <div className="text-gray m-l-20">{'}'}</div>
                        </code>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
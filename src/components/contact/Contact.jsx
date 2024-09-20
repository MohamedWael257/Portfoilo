import React from 'react'
import './Contact.css'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaLocationDot, FaParagraph, FaPhone, FaUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <section className="contact" id="Contact">
            <div className="heading">
                <h1>Contact</h1>
            </div>
            <div className="container">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 px-10 items-center">
                    <div className="contact-container">
                        <div className="contact-des">
                            <p>If you have any questions or need further information, please feel free to reach out to me. I'm open to
                                opportunities that match my expertise and interests.</p>
                        </div>
                        <form action="https://api.web3forms.com/submit" method="POST" id="form">
                            <input type="hidden" name="access_key" value="64b9c5d3-037d-47b6-a3f7-0b832119343c" />
                            <div className="input">
                                <p className="error-message" id="name-error">Please enter a valid name with at least 3 characters.</p>
                                <label htmlFor="name">Your Name</label>
                                <div className="input-wrapper">
                                    <input type="text" name="name" id="name" />
                                    <i><FaUser size={20} /></i>
                                </div>
                            </div>
                            <div className="input">
                                <p className=" error-message" id="email-error">Please enter a valid email address.</p>
                                <label htmlFor="email">Your Email</label>
                                <div className="input-wrapper">
                                    <i><FaEnvelope size={20} /></i>
                                    <input type="email" name="email" id="email" />
                                </div>
                            </div>
                            <div className="input">
                                <p className="error-message" id="message-error">Please enter a valid message with at least 3 characters.</p>
                                <label htmlFor="message">Your Message</label>
                                <div className="input-wrapper message">
                                    <i><FaParagraph size={20} /></i>
                                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                            <div className="submit">
                                <button type="submit" id="submit">
                                    Send Message
                                    <i><FaEnvelope className='inline-block' size={20} /></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="contact-info">
                            <div className="contact-items">
                                <ul>
                                    <li>
                                        <i><FaEnvelope /></i>
                                        <span>mohamedwael4553@gmail.com</span>
                                    </li>
                                    <li>
                                        <i><FaPhone /></i>
                                        <span>01010055884</span>
                                    </li>
                                    <li>
                                        <i><FaLocationDot /></i>
                                        <span>AL-Gharbia, Egypt </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="social-links">
                                <div className="social-icons">
                                    <Link to="https://www.linkedin.com/in/Mohamed Wael-taha/">
                                        <i><FaLinkedin /></i>
                                    </Link>
                                    <Link to="https://github.com/MohamedWael257">
                                        <i><FaGithub /></i>
                                    </Link>
                                    <Link to="https://www.facebook.com/share/iYfge85MXndssbXF/?mibextid=qi2Omg">
                                        <i><FaFacebook /></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Contact
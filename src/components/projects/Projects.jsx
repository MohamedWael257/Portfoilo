import React, { Fragment, useEffect, useRef, useState } from 'react'
import './Projects.css'
import projectImage1 from '../../assets/img/projects/filmlane.jpg'
const Projects = () => {
    let projects = [
        {
            id: 1,
            title: 'Filmlane',
            tools: ['HTML', 'CSS', 'Javascript'],
            role: "Frontend Developer",
            desc: "This project is an Filmlane website for selling food products. Key features include product listings, add-to-cart and remove-from-cart functionalities, and user authentication (sign-up and login). The sign-up and login functionalities are implemented without a backend, and the product data is managed using JSON Server. The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/Filmlane",
            demo: "https://mohamedwael257.github.io/Filmlane/",
            ImageUrl: projectImage1
        },
        {
            id: 2,
            title: 'Kaffe',
            tools: ['HTML', 'CSS', 'Javascript', 'bootstrap'],
            role: "Frontend Developer",
            desc: "This project is an Kaffe website for selling  products. Key features include product listings, add-to-cart and remove-from-cart functionalities, and user authentication (sign-up and login). The sign-up and login functionalities are implemented without a backend, and the product data is managed using JSON Server. The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/Kaffe",
            demo: "https://mohamedwael257.github.io/Kaffe/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/kaffe.jpg"
        },
        {
            id: 3,
            title: 'Cruds',
            tools: ['React', 'JSX', 'React Redux', 'CSS', 'Javascript'],
            role: "React Developer",
            desc: "This project is an Cruds website for product management system. Key features include product listings, add-to-crud , remove-from-crud ,update product and search(by category or title) . the product data is managed using Redux Toolkit. The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/Crudsreact",
            demo: "https://mohamedwael257.github.io/Crudsreact/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/cruds.jpg"
        },
        {
            id: 4,
            title: 'E-Commerce',
            tools: ['React', 'JSX', 'React Redux', 'React Bootstrap', 'React icons', 'CSS', 'Javascript', 'Firebase', 'REST API'],
            role: "React Developer",
            desc: "This project is an E-commerce website for selling food products. Key features include product listings, add-to-cart and remove-from-cart functionalities, and user authentication (sign-up and login). The sign-up and login functionalities are implemented without a backend, and the product data is managed using Firebase. The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/E-commerceReact",
            demo: "https://mohamedwael257.github.io/E-commerceReact/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/e-commerce.jpg"
        },
        {
            id: 5,
            title: 'WhatsApp',
            tools: ['React', 'JSX', 'React Redux', 'React Bootstrap', 'React icons', 'CSS', 'Tailwind', 'Javascript', 'Firebase', 'REST API'],
            role: "React Developer",
            desc: "This project is an WhatsApp website for Chating with people . Key features include Use authentication firebase for login or register, Use firebase storage to can upload profile image, By using firebase database Show all users, Chat with any user, Delete messages, Add story, Delete story and The store is deleted automatically after 24 hours, the product data is managed using Firebase.The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/Chat_App",
            demo: "https://chatapp-6581b.web.app/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/chatapp.jpg"
        },
        {
            id: 6,
            title: 'Spotify',
            tools: ['React', 'JSX', 'React Redux', 'React Bootstrap', 'React icons', 'CSS', 'Tailwind', 'Javascript',],
            role: "React Developer",
            desc: "This project is an Spotify website for selling food products. Key features include product listings, add-to-cart and remove-from-cart functionalities, and user authentication (sign-up and login). The sign-up and login functionalities are implemented without a backend, and the product data is managed using JSON Server. The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/spotify",
            demo: "https://spotify-puce-one.vercel.app/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/spotify.jpg"
        },
        {
            id: 7,
            title: 'Mern Chat',
            tools: ['React', 'JSX', 'React Redux', 'React Bootstrap', 'React icons', 'CSS', 'Tailwind', 'Javascript', 'Nodejs', 'MongoDB', 'Express', 'REST API'],
            role: "Mern Stack Developer",
            desc: "This project is an Mern Chat website for Chating with people like whatsApp . Key features include Use authentication  Nodejs for login or register, Use MongoDB storage to can upload profile image, By using MongoDB database Show all users, Chat with any user, Delete messages, the product data is managed using Backend Server.The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/Mern-Chat",
            demo: "https://mern-chat-9yjj.onrender.com/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/mernchat.jpg"
        },
        {
            id: 8,
            title: 'E-learnning',
            tools: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
            role: "Frontend Developer",
            desc: "This project is an e-learnning website for selling food products. Key features include product listings, add-to-cart and remove-from-cart functionalities, and user authentication (sign-up and login). The sign-up and login functionalities are implemented without a backend, and the product data is managed using JSON Server. The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/E-learnnig",
            demo: "https://mohamedwael257.github.io/E-learnnig/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/e-learnning.jpg"
        },
        {
            id: 9,
            title: 'Connect Four Game',
            tools: ['HTML', 'CSS', 'Javascript', 'OOP'],
            role: "Frontend Developer",
            desc: "This project is an Connect Four Game website for selling food products. Key features include product listings, add-to-cart and remove-from-cart functionalities, and user authentication (sign-up and login). The sign-up and login functionalities are implemented without a backend, and the product data is managed using JSON Server. The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/Connect-Four-Game",
            demo: "https://mohamedwael257.github.io/Connect-Four-Game/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/connectfour.jpg"
        },
        {
            id: 10,
            title: 'Calculator',
            tools: ['HTML', 'CSS', 'Javascript'],
            role: "Frontend Developer",
            desc: "This project is an Calculator website for selling food products. Key features include product listings, add-to-cart and remove-from-cart functionalities, and user authentication (sign-up and login). The sign-up and login functionalities are implemented without a backend, and the product data is managed using JSON Server. The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/Calculator",
            demo: "https://mohamedwael257.github.io/Calculator/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/calculator.jpg"
        },
        {
            id: 11,
            title: 'Hangman',
            tools: ['HTML', 'CSS', 'Javascript'],
            role: "Frontend Developer",
            desc: "This project is an Hangman website for selling food products. Key features include product listings, add-to-cart and remove-from-cart functionalities, and user authentication (sign-up and login). The sign-up and login functionalities are implemented without a backend, and the product data is managed using JSON Server. The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/Hangman",
            demo: "https://mohamedwael257.github.io/Hangman/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/hangman.jpg"
        },
        {
            id: 12,
            title: 'mern lava',
            tools: ['React', 'JSX', 'React Redux', 'React Bootstrap', 'React icons', 'CSS', 'Tailwind', 'Javascript', 'Nodejs', 'MongoDB', 'Express', 'REST API'],
            role: "Mern Stack Developer",
            desc: "This project is an Mern Car Wash Services and Store Website . My Project is For on-demand car washing services. Whether you're at home, work, or anywhere , our app brings the car wash to you Additionally, we offer marketplace. Most challenges : Client faces difficulty as he has to buy or book a service for his car from sink place . So we provide Booking and Store to save time for the client. We are also come to receive the car, repair it, and return to client . We also offer live chat if the client have any proble . The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/mern_lava",
            demo: "https://mern-lava.onrender.com/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/mernlava.jpg"
        },
        {
            id: 13,
            title: 'Cafe',
            tools: ['HTML', 'CSS', 'Javascript'],
            role: "Frontend Developer",
            desc: "This project is an Cafe website for selling products. Key features include product listings, add-to-cart and remove-from-cart functionalities, and user authentication (sign-up and login). The sign-up and login functionalities are implemented without a backend, and the product data is managed using JSON Server. The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/Cafe",
            demo: "https://mohamedwael257.github.io/Cafe/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/cafe.jpg"
        },
        {
            id: 14,
            title: 'StandBlog',
            tools: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
            role: "Frontend Developer",
            desc: "This project is an StandBlog website for selling food products. Key features include product listings, add-to-cart and remove-from-cart functionalities, and user authentication (sign-up and login). The sign-up and login functionalities are implemented without a backend, and the product data is managed using JSON Server. The project is fully responsive.",
            repo: "https://github.com/MohamedWael257/StandBlog",
            demo: "https://mohamedwael257.github.io/StandBlog/",
            ImageUrl: "http://localhost:3000/src/assets/img/projects/standblog.jpg"
        },

    ]
    const ourProjects = useRef(null)
    const [active, setActive] = useState(false)
    const handleScroll = () => {
        let projectsContainTop = ourProjects.current.offsetTop;
        let prpjectsHeight = ourProjects.current.offsetHeight;
        let screenHeight = window.innerHeight;
        let scrollaction = window.pageYOffset;
        if (scrollaction > (projectsContainTop + (0.5 * prpjectsHeight) - screenHeight)) {
            setActive(true)
        } else {
            setActive(false)
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    console.log(projects);

    return (
        <section ref={ourProjects} className="projects" id="Projects">
            <div className="container">
                <div className="heading">
                    <h1>projects</h1>
                </div>
                <div className="wrapper-projects lg:px-16 px-4">
                    {projects.map(project => {
                        return (
                            <div className="project-card object-card" key={project.id}>
                                <div className="linear-gradient"></div>
                                <div className="project-name">
                                    <div className="bubbles">
                                        <span className="bg-purple"></span>
                                        <span className="bg-purple"></span>
                                        <span className="bg-purple"></span>
                                    </div>
                                    <p>{project.title}</p>
                                </div>
                                <div className="wrapper-project">
                                    <div className="grid items-center lg:grid-cols-[2fr_1.5fr] grid-cols-1 gap-5 px-10">
                                        <code className='lg:order-first order-last' style={{ wordBreak: "break-word" }}>
                                            <div >
                                                <span className="text-purple">const</span>
                                                <span className="text-white">project</span>
                                                <span className="text-purple">=</span>
                                                <span className="text-gray">{'{'}</span>
                                            </div>
                                            <div className="m-l-20">
                                                <span className="text-white">name:</span>
                                                <span className="text-gray">'</span>
                                                <span className="text-orange">{project.title}</span>
                                                <span className="text-gray">'</span>
                                                <span className="text-gray">,</span>
                                            </div>
                                            <div className="m-l-20">
                                                <span className="text-white">tools:</span>
                                                {project.tools.map((tool, index) => {
                                                    return (
                                                        <Fragment key={index}>
                                                            <span className="text-orange">
                                                                {index == 0 &&
                                                                    <>
                                                                        <span className="text-gray">{"[ '"}</span>
                                                                        {tool}
                                                                        <span className="text-gray">'</span>
                                                                    </>
                                                                }
                                                                {index > 0 && index < project.tools.length - 1 &&
                                                                    <>
                                                                        <span className="text-gray">'</span>
                                                                        {tool}
                                                                        <span className="text-gray">{"'"}</span>
                                                                    </>}
                                                                {index == project.tools.length - 1 &&
                                                                    <>
                                                                        <span className="text-gray">'</span>
                                                                        {tool}
                                                                        <span className="text-gray">{"' ]"}</span>
                                                                    </>}
                                                            </span >
                                                            <span className="text-gray">,</span>
                                                        </Fragment>
                                                    )
                                                })}
                                            </div>
                                            <div className="m-l-20">
                                                <span className="text-white">myRole:</span>
                                                <span className="text-dark-orange ">{project.role}</span>
                                                <span className="text-gray">,</span>
                                            </div>
                                            <div className="m-l-20">
                                                <span className="text-white">Description:</span>
                                                <span className="text-gray">'</span>
                                                <span className="text-orange">{project.desc}</span>
                                                <span className="text-gray">'</span>
                                                <span className="text-gray">,</span>
                                            </div>
                                            <div className="m-l-20">
                                                <span className="text-white">GitHub Repo:</span>
                                                <span className="link-project"><a href={project.repo} target="_blank">{project.repo}</a></span>
                                                <span className="text-gray">,</span>
                                            </div>
                                            <div className="m-l-20">
                                                <span className="text-white">Live Demo:</span>
                                                <span className="link-project"><a href={project.demo} target="_blank">{project.demo}</a></span>
                                                <span className="text-gray">,</span>
                                            </div>
                                            <div className="text-gray m-l-20">{'}'}</div>
                                        </code>
                                        <div className="img lg:order-last order-first">
                                            <img src={project.ImageUrl} alt="nest-ecommerce" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </section >
    )
}

export default Projects
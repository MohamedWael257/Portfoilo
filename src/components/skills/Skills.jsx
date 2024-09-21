import React, { useEffect, useRef, useState } from 'react'
import './Skills.css'
const Skills = () => {
    const ourSkills = useRef(null)
    const [active, setActive] = useState(true)
    const handleScroll = () => {
        let skillsContainTop = ourSkills.current.offsetTop;
        let skillsHeight = ourSkills.current.offsetHeight;
        let screenHeight = window.innerHeight;
        let scrollaction = window.pageYOffset;
        if (scrollaction > (skillsContainTop + (1 * skillsHeight) - screenHeight)) {
            setActive(true)
        } else {
            setActive(false)
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    let frontSkills = [
        {
            id: 1,
            title: 'HTML',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/html.png',
            percentage: '95%'
        },
        {
            id: 2,
            title: 'CSS',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/css.png',
            percentage: '80%'
        },
        {
            id: 3,
            title: 'Bootstrap',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/bootstrap.png',
            percentage: '70%'
        },
        {
            id: 4,
            title: 'SASS',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/sass.png',
            percentage: '65%'
        },
        {
            id: 5,
            title: 'Tailwind',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/tailwind.png',
            percentage: '75%'
        },
        {
            id: 6,
            title: 'JavaScript',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/js.png',
            percentage: '80%'
        },
        {
            id: 7,
            title: 'TypeScript',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/ts.png',
            percentage: '70%'
        },
        {
            id: 8,
            title: 'React',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/react.png',
            percentage: '85%'
        },
        {
            id: 9,
            title: 'React Router',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/react-router.png',
            percentage: '85%'
        },
        {
            id: 10,
            title: 'Redux',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/redux.png',
            percentage: '80%'
        },
        {
            id: 11,
            title: 'Nextjs',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/nextjs.png',
            percentage: '75%'
        },
        // {
        //     id: 15,
        //     title: 'NPM',
        //     imageUrl: 'http://localhost:3000/src/assets/img/skills/npm.png',
        //     percentage: '80%'
        // },
        // {
        //     id: 16,
        //     title: 'Webpack',
        //     imageUrl: 'http://localhost:3000/src/assets/img/skills/webpack.png',
        //     percentage: '80%'
        // },
        // {
        //     id: 17,
        //     title: 'Git',
        //     imageUrl: 'http://localhost:3000/src/assets/img/skills/git.png',
        //     percentage: '80%'
        // },
        // {
        //     id: 18,
        //     title: 'GitHub',
        //     imageUrl: 'http://localhost:3000/src/assets/img/skills/github.png',
        //     percentage: '80%'
        // },
        // {
        //     id: 19,
        //     title: 'Postman',
        //     imageUrl: 'http://localhost:3000/src/assets/img/skills/postman.png',
        //     percentage: '80%'
        // },

    ]
    let backSkills = [
        {
            id: 1,
            title: 'Nodejs',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/nodejs.png',
            percentage: '85%'
        },
        {
            id: 2,
            title: 'MongoDb',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/mongoDb.png',
            percentage: '90%'
        },
        {
            id: 3,
            title: 'Express.JS',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/express.png',
            percentage: '75%'
        },
        {
            id: 4,
            title: 'Nest.JS',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/express.png',
            percentage: '65%'
        },
    ]
    let tools = [
        {
            id: 1,
            title: 'NPM',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/npm.png',
            percentage: '85%'
        },
        {
            id: 2,
            title: 'Webpack',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/webpack.png',
            percentage: '70%'
        },
        {
            id: 3,
            title: 'Git',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/git.png',
            percentage: '80%'
        },
        {
            id: 4,
            title: 'GitHub',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/github.png',
            percentage: '90%'
        },
        {
            id: 5,
            title: 'Postman',
            imageUrl: 'http://localhost:3000/src/assets/img/skills/postman.png',
            percentage: '85%'
        },
    ]
    return (
        <section ref={ourSkills} className="skills" id="Skills">
            <div className="container">
                <div className="heading">
                    <h1>skills</h1>
                </div>
                <div className="skills relative overflow-hidden mt-14 grid xl:grid-cols-[550px_550px] xl:justify-center xl:gap-x-20 sm:px-10 px-4 gap-y-8">
                    <div style={{ transition: "0.6s right ease" }} className={`relative top-0 ${active ? "right-0" : "right-[1000px]"}`}>
                        <h2 className='text-[var(--main-color)] text-3xl font-semibold'>Front End Skills</h2>
                        {frontSkills.map(skill => {
                            return (
                                <div className="skill my-6" key={skill.id}>
                                    <p className='pl-2 text-xl font-medium'>{skill.title}</p>
                                    <div className="progrees bg-black w-full h-3 rounded-xl">
                                        <div className="progrees relative  w-full h-full rounded-xl" style={{ background: 'var(--skill-linear-gradient)', width: `${active ? skill.percentage : '0%'}`, transition: "1.6s width ease" }}>
                                            <p className='text-white absolute -top-8 right-0'>{skill.percentage}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div style={{ transition: "0.6s left ease" }} className={`relative top-0 ${active ? "left-0" : "left-[1000px]"}`}>
                        <div>
                            <h2 className='text-[var(--main-color)] text-3xl font-semibold'>Back End Skills</h2>
                            {backSkills.map(skill => {
                                return (
                                    <div className="skill my-6" key={skill.id}>
                                        <p className='pl-2 text-xl font-medium'>{skill.title}</p>
                                        <div className="progrees bg-black w-full h-3 rounded-xl">
                                            <div className="progrees relative w-full h-full rounded-xl" style={{ background: 'var(--skill-linear-gradient)', width: `${active ? skill.percentage : '0%'}`, transition: "1.6s width ease" }}>
                                                <p className='text-white absolute -top-8 right-0'>{skill.percentage}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <h2 className='text-[var(--main-color)] text-3xl font-semibold'>Tools</h2>
                            {tools.map(tool => {
                                return (
                                    <div className="tool my-6" key={tool.id}>
                                        <p className='pl-2 text-xl font-medium'>{tool.title}</p>
                                        <div className="progrees bg-black w-full h-3 rounded-xl">
                                            <div className="progrees relative w-full h-full rounded-xl" style={{ background: 'var(--skill-linear-gradient)', width: `${active ? tool.percentage : '0%'}`, transition: "1.6s width ease" }}>
                                                <p className='text-white absolute -top-8 right-0'>{tool.percentage}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* <div>
                        <h2 className='text-[var(--main-color)] text-3xl font-semibold'>Tools</h2>
                        {tools.map(tool => {
                            return (
                                <div className="tool my-6" key={tool.id}>
                                    <p className='pl-2 text-xl font-medium'>{tool.title}</p>
                                    <div className="progrees bg-black w-full h-3 rounded-xl">
                                        <div className="progrees relative  w-full h-full rounded-xl" style={{ background: 'var(--skill-linear-gradient)', width: `${tool.percentage}` }}>
                                            <p className='text-white absolute -top-8 right-0'>{tool.percentage}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div> */}
                </div>
                {/* <div className="skills-slider">
                    <div className="wrapper-skills">
                        {skills.map(skill => {
                            return (
                                <div className="skill" key={skill.id}>
                                    <div className="img">
                                        <img src={skill.imageUrl} alt="html" />
                                    </div>
                                    <div className="name-skill">
                                        <p>{skill.title}</p>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Skills

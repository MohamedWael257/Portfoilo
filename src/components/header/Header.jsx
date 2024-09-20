import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    // const header = useRef()
    const [sidenav, setSidenav] = useState(false)
    const showsidenav = () => {
        setSidenav(!sidenav);
    }
    // const [activeheader, setActiveheader] = useState(false)
    // const handleScroll = () => {
    //     const scroll = window.pageYOffset;
    //     const shouldBeVisible = scroll > 100;
    //     setActiveheader(shouldBeVisible);
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
    return (
        <header className={` md:bg-transparent bg-[var(--background-color)] md:absolute fixed top-0 left-0 z-[3333] w-full py-10 xl:px-20 md:pxx-10 pxx-0`}>
            <div className="relative grid md:grid-cols-[1fr_2fr] grid-cols-[2fr_1fr] gap-8 w-full px-10" >
                <div className="logo lg:text-center">
                    <Link className="text-purple font-extrabold md:text-4xl text-3xl" to="/">Mohamed</Link>
                    {/* <Link className="text-purple font-extrabold md:text-4xl text-3xl" to="/">Mohamed Wael</Link> */}
                </div>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" */}
                {/* aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> */}
                {/* <FaBars onClick={showsidenav} className={` cursor-pointer ${sidenav ? "bg-black" : "bg-teal-500"}`} size={30} color='ffffff' /> */}
                {/* </button> */}
                <button onClick={showsidenav} className={`md:hidden flex justify-end text-[var(--main-color)] text-5xl font-semibold cursor-pointer`}>
                    <FaBars />
                </button>
                <nav className={`${sidenav ? "h-[250px]" : "h-0"} bg-[var(--background-color)] md:bg-transparent overflow-hidden transition-[.6s_height_ease] flex md:flex-row md:h-fit md:relative w-full absolute top-[86px] md:top-0 left-0 flex-col justify-evenly md:items-center text-3xl md:text-xl capitalize px-10`}>
                    {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
                    {/* <ul className={`${sidenav ? "grid grid-cols-1" : "flex justify-evenly items-center"} flexx justify-evenlyy items-centerr text-xl capitalize`}> */}
                    <a className="nav-link transition-all hover:text-[var(--main-color)]" href="/#About">About</a>
                    <a className="nav-link transition-all hover:text-[var(--main-color)]" href="/#Skills">Skills</a>
                    <a className="nav-link transition-all hover:text-[var(--main-color)]" href="/#Education">Education</a>
                    <a className="nav-link transition-all hover:text-[var(--main-color)]" href="/#Projects">Projects</a>
                    {/* </div> */}
                </nav>
            </div >

        </header >
    )
}

export default Header
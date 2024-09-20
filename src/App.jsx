import React, { useEffect, useRef } from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import { FaArrowUp } from 'react-icons/fa'
function App() {
  const toTop = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', function () {
      this.scrollY > 100 ? toTop.current.classList.add('active') : toTop.current.classList.remove('active');
    });
    toTop.current.addEventListener('click', function () {
      window.scrollTo({
        top: 0
      })
    })
  }, [toTop])
  return (
    <>
      <Header />
      <Banner />
      <About />
      <div className="line"></div>
      <Skills />
      <div className="line"></div>
      <Projects />
      <div className="line"></div>
      <Education />
      <div className="line"></div>
      {/* <Experience /> */}
      {/* <div className="line"></div> */}
      <Contact />
      <div ref={toTop} className="to-top">
        <FaArrowUp />
      </div>
    </>
  )
}

export default App
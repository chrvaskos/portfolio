import React, { useEffect, useState, useRef } from "react"

//Node packages
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"

//Style
import "../styles/App.scss"

//Hooks
import useWindowSize from "../hooks/useWindowSize"

//Components
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import IntroOverlay from "../components/introOverlay"

let tl = gsap.timeline()

const homeAnimation = completeAnimation => {
  tl.to("body", 0, { css: { visibility: "visible" } })
    .from(".hero-img", 1, {
      opacity: 0,
      ease: "expo.inOut",
    })
    .from(".headline span", 2, {
      opacity: 0,
      y: 128,
      ease: "back.inOut",
      skewY: 5,
      delay: 0.5,
      stagger: {
        amount: 2.5,
      },
    })
    .from(".header", 1.5, {
      y: -100,
      ease: "expo.inOut",
      delay: 0.5,
    })
    .to(".overlay-left", 1.5, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.5,
    })
    .to(".overlay-right", 1.5, {
      width: 0,
      ease: "expo.inOut",
      delay: -1.5,
    })
    .set(".hero-img", {
      className: "-=hero-img",
      delay: -0.7,
      onComplete: completeAnimation,
    })
    .from(".headline span mark", 2, {
      width: 0,
      ease: "expo.inOut",
    })
}

const aboutAnimation = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
      },
    })
    .from(".languages h3", 0.5, {
      opacity: 0,
      ease: "expo.inOut",
      y: 20,
    })
    .from(".technologies h3", 0.5, {
      opacity: 0,
      ease: "expo.inOut",
      y: 20,
      delay: -0.5,
    })
    .from(".lang-images-container img", 1, {
      opacity: 0,
      y: 20,
      ease: "expo.inOut",
      stagger: {
        amount: 1,
      },
    })
    .from(".tech-images-container img", 1, {
      opacity: 0,
      y: 20,
      ease: "expo.inOut",
      delay: -1.2,
      stagger: {
        amount: 1,
      },
    })
}

const IndexPage = () => {
  gsap.registerPlugin(ScrollTrigger)

  const [animationComplete, setAnimationComplete] = useState(false)

  const size = useWindowSize()

  const app = useRef()
  const scrollContainer = useRef()

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  }, [])

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`
  }

  useEffect(() => {
    setBodyHeight(size.height)
    let vh = size.height * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [size.width])

  const skewScrolling = () => {
    data.current = window.scrollY
    data.previous += (data.current - data.previous) * data.ease
    data.rounded = Math.round(data.previous * 100) / 100

    const difference = data.current - data.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 7

    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`

    requestAnimationFrame(() => skewScrolling())
  }

  const completeAnimation = () => {
    setAnimationComplete(true)
    enableBodyScroll(app)
  }

  useEffect(() => {
    disableBodyScroll(app)
    homeAnimation(completeAnimation)
  }, [])

  useEffect(() => {
    ScrollTrigger.create({
      start: "top",
      end: 99999,
      toggleClass: {
        className: "header--scrolled",
        targets: ".header",
      },
    })
  }, [])

  let imgRef = useRef(null)

  useEffect(() => {
    document.addEventListener("mousemove", event => {
      let { clientX, clientY } = event
      let mouseX = (clientX - imgRef.current.clientWidth) / 60
      let mouseY = (clientY - imgRef.current.clientHeight) / 60
      imgRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
  }, [])

  useEffect(() => {
    aboutAnimation()
  }, [])

  return (
    <main ref={app} className="App">
      <Nav />
      <div ref={scrollContainer} className="scroll-container">
        {animationComplete === false ? <IntroOverlay /> : ""}
        <Hero imgRef={imgRef} />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

export default IndexPage

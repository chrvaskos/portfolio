import React from "react"

const technologies = [
  { id: 1, icon: "git" },
  { id: 2, icon: "react" },
  {
    id: 3,
    icon: "gatsby",
  },
  { id: 4, icon: "sass" },
  {
    id: 5,
    icon: "bootstrap",
  },
  { id: 6, icon: "gsap" },
  { id: 7, icon: "jquery" },
  { id: 8, icon: "nodejs" },
  { id: 9, icon: "tailwind-css" },
  { id: 10, icon: "styled-components" },
]

const languages = [
  { id: 1, icon: "html5" },
  {
    id: 2,
    icon: "css3",
  },
  { id: 3, icon: "javascript" },
  {
    id: 4,
    icon: "php",
  },
  {
    id: 5,
    icon: "java",
  },
  { id: 6, icon: "python" },
  {
    id: 7,
    icon: "sql",
  },
  {
    id: 8,
    icon: "typescript",
  },
]

const About = () => {
  return (
    <section id="about-me" className="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-me">
            <h2>About Me</h2>
            <p>
              Aspiring front-end web developer, focused on crafting polished
              user experiences. Enthusiastic and hard-working team player with a
              passion for designing and creating beautiful websites, optimizing
              for the web and mobile, and cross-browser testing.
            </p>
          </div>
          <div className="knowledge-container">
            <div className="languages">
              <h3>Languages I Speak</h3>
              <div className="lang-images-container">
                {languages.map(lang => (
                  <img
                    key={lang.id}
                    src={require(`../images/${lang.icon}.svg`)}
                    alt={lang.icon}
                    height="64"
                  />
                ))}
              </div>
            </div>
            <div className="technologies">
              <h3>Technologies I Know</h3>
              <div className="tech-images-container">
                {technologies.map(tech => (
                  <img
                    key={tech.id}
                    src={require(`../images/${tech.icon}.svg`)}
                    alt={tech.icon}
                    width="64"
                    height="64"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

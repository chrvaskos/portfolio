import React, { useEffect } from "react"
import hoverEffect from "hover-effect"

const Projects = () => {
  const projects = [
    {
      id: 1,
      class: "project",
      title: "Burden Off",
      desc:
        "A complete CRUD web application made collaboratively with fellow students during our undergraduate studies. I was completely responsible for the UI/UX design and front-end development. I've actively participated in discussions about the back-end as well. The stack that was used is React + Node.js + Express + MySQL.",
      github: "https://github.com/chrvaskos/BurdenOff",
      page: "/",
      disabled: "disabled",
    },
    {
      id: 2,
      class: "project-2",
      title: "Card Sorting Tool",
      desc:
        'A card sorting tool that was created to be used in an experiment for my thesis entitled "Web usability: Task-based card sorting". Technologies used include React, Bootstrap & jQuery.',
      github: "https://github.com/chrvaskos/card-sorting",
      page: "https://card-sorting.netlify.app/",
      disabled: "",
    },
    {
      id: 3,
      class: "project-3",
      title: "Landing Page Redesign",
      desc: "Local barber shop landing page redesign using Tailwind CSS.",
      github: "https://github.com/chrvaskos/barber-shop",
      page: "https://chrvaskos-barber-shop.netlify.app/",
      disabled: "",
    },
    {
      id: 4,
      class: "project-4",
      title: "Agency Landing Page",
      desc:
        "Sample landing page of an agency created with the following technologies: React, Bootstrap, Sass.",
      github: "https://github.com/chrvaskos/agency-landing-page",
      page: "https://chrvaskos-agency-landing-page.netlify.app/",
      disabled: "",
    },
  ]

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(".project"),
      intensity1: 0.2,
      intensity2: 0.2,
      image1: require("../images/burdenoff1.png"),
      image2: require("../images/burdenoff2.png"),
      displacementImage: require("../images/displacement.jpg"),
      imagesRatio: 0.5,
    })
    new hoverEffect({
      parent: document.querySelector(".project-2"),
      intensity1: 0.2,
      intensity2: 0.2,
      image1: require("../images/cardsorting1.png"),
      image2: require("../images/cardsorting2.png"),
      displacementImage: require("../images/displacement.jpg"),
      imagesRatio: 0.5,
    })
    new hoverEffect({
      parent: document.querySelector(".project-3"),
      intensity1: 0.2,
      intensity2: 0.2,
      image1: require("../images/barbershop1.png"),
      image2: require("../images/barbershop2.png"),
      displacementImage: require("../images/displacement.jpg"),
      imagesRatio: 0.5,
    })
    new hoverEffect({
      parent: document.querySelector(".project-4"),
      intensity1: 0.2,
      intensity2: 0.2,
      image1: require("../images/agency1.png"),
      image2: require("../images/agency2.png"),
      displacementImage: require("../images/displacement.jpg"),
      imagesRatio: 0.5,
    })
  }, [])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-inner">
          {projects.map(project => (
            <div className="project-box" key={project.id}>
              <div className={"project-img-box " + project.class}></div>
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              <div className="btn-container">
                <a href={project.github} target="_blank">
                  View Github
                </a>
                <a
                  href={project.page}
                  target="_blank"
                  className={project.disabled}
                >
                  View Page
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

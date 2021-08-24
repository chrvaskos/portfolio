import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = ({ imgRef }) => {
  const data = useStaticQuery(graphql`
    query {
      whiteFigure: file(relativePath: { eq: "black-figure.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-text-container">
          <div className="hero-text-inner">
            <h2>
              <div className="headline">
                <span>
                  Hi, I'm Vasilis <mark>Christoforidis.</mark>
                </span>
              </div>
              <div className="headline">
                <span>A Front-end developer, focused on</span>
              </div>
              <div className="headline">
                <span>crafting polished user experiences.</span>
              </div>
            </h2>
          </div>
          <div className="mail-line">
            <a href="mailto:chrvaskos@gmail.com?subject=Let's make something cool">
              chrvaskos@gmail.com
            </a>
          </div>
        </div>
        <div className="hero-img-container" ref={imgRef}>
          <Img
            fluid={data.whiteFigure.childImageSharp.fluid}
            className="turn-white hero-img"
          />
        </div>
        <div className="scroll-down">
          <div className="mouse">
            <span></span>
          </div>
          <div className="arrow">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

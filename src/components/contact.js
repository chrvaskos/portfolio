import React from "react"

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-text">
            <p className="contact-line">
              <span>That's enough of me for now.</span>
            </p>
            <p className="contact-line">
              <span>Contact me so we get to know each other better.</span>
            </p>
            <p className="contact-line">
              <span>Don't hesitate to send me an email!</span>
            </p>
            <a href="mailto:chrvaskos@gmail.com?subject=Let's make something cool">
              chrvaskos@gmail.com
            </a>
          </div>
          <div className="contact-social">
            <p className="social-line">
              <span>My social links</span>
            </p>
            <div className="social-container">
              <a href="https://github.com/chrvaskos" target="_blank">
                <img src={require(`../images/github.svg`)} alt="Github Logo" width="64px" />
              </a>
            </div>
          </div>
          <p className="ps-resume">
            P.S.: Almost forgot! You can also
            <a href="/"> download a paper version</a> of my resume!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

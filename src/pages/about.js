import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>readymade, heirloom squid street art normcore VHS palo</h2>
            <p>
              Biodiesel truffaut raw denim hexagon wolf single-origin coffee
              mlkshk mumblecore pork belly paleo. Gastropub prism ramps
              meggings.
            </p>
            <p>
              Litz tofu dreamcatcher. Beard squid man braid celiac synth
              bushwick 90's marfa butcher narwhal. Waistcoat vice put a bird on
              it, selfies microdosing prism.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <article>
            <StaticImage
              src="../assets/images/about.jpeg"
              alt="Person Pouring Salt in Bawl"
              className="about-img"
              placeholder="blurred"
            />
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default About

import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const About = ({
  data: {
    allContentfulGatsbyTutorial: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>street art normcore palo</h2>
            <p>
              Biodiesel truffaut raw denim hexagon wolf single-origin coffee
              mlkshk mumblecore pork belly paleo. Gastropub prism ramps
              meggings.
            </p>
            <p>
              Litz tofu dreamcatcher. Beard squid man braid celiac synth
              bushwick 90's marfa butcher narwhal.
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
              aspectRatio={10 / 7}
            />
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome sause</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulGatsbyTutorial(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        cookTime
        prepTime
        servings
        id
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`
export default About

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"
import SEO from "../components/SEO"
const Testing = ({}) => {
  return (
    <Layout>
      <SEO title="testing" />
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

export default Testing

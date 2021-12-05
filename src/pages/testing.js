import React from "react"
import { graphql } from "gatsby"

const Testing = ({ data }) => {
  const author = data.site.info.author
  return (
    <div>
      <h2>author: {author}</h2>
    </div>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        complexData {
          name
          age
        }
        person {
          name
          age
        }
        title
        simpleData
        description
        author
      }
    }
  }
`
export default Testing

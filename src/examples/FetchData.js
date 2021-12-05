import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
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
const FetchData = () => {
  const {
    site: {
      info: { title, description },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  )
}

export default FetchData

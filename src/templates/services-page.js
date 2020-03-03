import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export const SERVICES_PAGE_QUERY = graphql`
  query SERVICES_PAGE_QUERY($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      frontmatter {
        title
        services {
          description
          image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          }
          inclusions
          pricing
          button {
            title
            href
          }
        }
      }
    }
  } 
`

export const ServicesPageTemplate = ({
  title,
  services
}) => {
  services.forEach(service => {
    console.log("services are",service.image, service.description, service.inclusions, service.pricing, service.button)
  })
  return (
    <div style={{width: "100px", height: "100px", backgroundColor: "blue"}}>
      <h1>{title}</h1>
    </div>
  )
}



ServicesPageTemplate.propTypes = {
    title:         PropTypes.string,
    services:      PropTypes.shape({
      image:       PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      description: PropTypes.string,
      inclusions:  PropTypes.arrayOf(PropTypes.string),
      pricing:     PropTypes.arrayOf(PropTypes.string),
      button:      PropTypes.shape({
        title:     PropTypes.string,
        href:      PropTypes.string
      })
    }),
}

const ServicesPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter

  return (
    
      <ServicesPageTemplate
        title={frontmatter.title}
        services={frontmatter.services}
      />
    
  )
}

export default ServicesPage

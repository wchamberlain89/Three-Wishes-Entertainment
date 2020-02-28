import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../img/components/Layout'
import Features from '../img/components/Features'
import BlogRoll from '../img/components/BlogRoll'

export const ServicesPageTemplate = ({
  title,
  packages,
}) => (
  <div>
    <h1>{title}</h1>
    {packages.map(( package, index ) => (
      <Package package={package} key={index}/>
    ))}
  </div>
)

ServicesPageTemplate.propTypes = {
    title:         PropTypes.string,
    packages:      PropTypes.shape({
      image:       PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      description: PropTypes.string,
      inclusions:  PropTypes.arrayOf(Proptypes.string),
      pricing:     PropTypes.arrayOf(PropTypes.string),
      button:      PropTypes.shape({
        title:     PropTypes.string,
        href:      PropTypes.string
      })
    }),
}

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ServicesPageTemplate
        title={frontmatter.title}
        packages={frontmatter.packages}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicesPage

export const SERVICES_PAGE_QUERY = graphql`
  query SERVICES_PAGE_QUERY {
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      frontmatter {
        title
        packages {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
          inclusions {
            inclusion
          }
          pricing {
            option
          }
          button {
            title
            href
          }
        }
      }
    }
  }
`

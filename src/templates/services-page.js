import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const SERVICES_PAGE_QUERY = graphql`
  query SERVICES_PAGE_QUERY($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      frontmatter {
        title
      }
    }
  } 
`

const ServicesPageTemplate = ({
  title,
}) => (
  <div>
    <h1>{title}</h1>
    ))}
  </div>
)

ServicesPageTemplate.propTypes = {
    title:         PropTypes.string,
    packages:      PropTypes.shape({
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
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ServicesPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  )
}

export default ServicesPage

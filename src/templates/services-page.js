import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout';
import DecoratedTitle from '../components/DecoratedTitle';

export const PAGE_QUERY = graphql`
  query PAGE_QUERY($id: String!) {
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
`;

export const ServicesPageTemplate = ({
  title,
  services
}) => {
  return (
    <Layout>
      <DecoratedTitle>{title}</DecoratedTitle>
    </Layout>
  )
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

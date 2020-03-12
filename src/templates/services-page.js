import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { graphql } from 'gatsby'
import { ServiceCard } from '../components/ServiceCard';
import Layout from '../components/Layout';
import DecoratedTitle from '../components/DecoratedTitle';
import Button from '../components/Button';

export const PAGE_QUERY = graphql`
  query PAGE_QUERY($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      frontmatter {
        title
        services {
          title
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

const ServiceCardGrid = styled.div`
  display: grid;
  max-width: 1300px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  grid-gap: 2em;
  align-items: flex-start;
  justify-items: center;
  margin-top: 5em;
`

const ServicesServiceCard = ({ title, description, image, inclusions, pricing, button }) => {
  return(
    <ServiceCard>
      <img src={ image.childImageSharp ? image.childImageSharp.fluid.src : image }/>
      <h3 className="title">{title}</h3>
      <p>{description}</p>
      <h3 className="title">What's Included</h3>
      <p>{inclusions}</p>
      <h3 className="title">Pricing</h3>
      <p>{pricing}</p>
      <Button>Book Now</Button>
    </ServiceCard>
  )
}

export const ServicesPageTemplate = ({
  title,
  services
}) => {
  return (
    <Layout>
      <div className="width-container">  
        <DecoratedTitle style={{margin: "3rem 0"}}>Services</DecoratedTitle>
        <ServiceCardGrid>
          {services.map(service => <ServicesServiceCard {...service}/>)}
        </ServiceCardGrid>
      </div>
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

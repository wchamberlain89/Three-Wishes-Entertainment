import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components';
import { graphql } from 'gatsby'
import {
  Button, 
  Card,
  DecoratedTitle,
  Layout,
} from '../components';


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
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  grid-gap: 2em;
  align-items: flex-start;
  justify-items: center;
  margin-top: 5em;
`

const ServicesServiceCard = ({ title, description, image, inclusions, pricing, button }, ...props) => {
  const themeContext = useContext(ThemeContext);
  return(
    <Card background={themeContext.gradient}>
      <img src={ image.childImageSharp ? image.childImageSharp.fluid.src : image } style={{maxWidth: "100%"}}/>
      <h3 className="title">{title}</h3>
      <p>{description}</p>
      <h3 className="fs-xl">What's Included</h3>
      <p>{inclusions}</p>
      <h3 className="title">Pricing</h3>
      <p className="fs-m">{pricing}</p>
      <Button>Book Now</Button>
    </Card>
  )
};

export const ServicesPageTemplate = ({
  title,
  services
}) => {
  console.log(services)
  return (
    <Layout>
      <div className="width-container">  
        <DecoratedTitle style={{margin: "3rem 0"}}><h1 className="fs-xl">Services</h1></DecoratedTitle>
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

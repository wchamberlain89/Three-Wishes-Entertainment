import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';

export const INDEX_PAGE_QUERY = graphql`
  query INDEX_PAGE_QUERY {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        blurb {
          heading
          text
          btn1 {
            title
            link
          }
          btn2 {
            title
            link
          }
        }
        cards {
          title
          content
          button {
            title
            link
          }
        }
        intro {
          header
          text
        }
        artists {
          header
          artist {
            name
            description
          }
        }
        reccomendations {
          reccomendation {
            title
            text
          }
        }
      }
    }
  } 
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  align-items: flex-start;
  justify-items: center;
`

const LandingServicesCard = styled(Card)`
  background: linear-gradient(180deg, #66549A 0%, #846CCD 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  .title {
    font-size: 2em;
  }
  .img-circle {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  * + * {
    margin-top: 1em;
  }
`

const LandingServicesCardComponent = ({ title, content, button }) => {
  return (
    <LandingServicesCard>
      <h3 className="title">{title}</h3>
      <p>{content}</p>
      <Button>Button</Button>
    </LandingServicesCard>
  )
}

const __IntroPageContainer = styled.div`
  .width-container {
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
  }
  .intro-text--header {
    font-size: 2.66em;
    font-weight: 800;
  }
  .intro-text {
    font-size: 1.5em;
  }
`

export const IndexPageTemplate = ( { blurb, cards, intro, artists } ) => {
  return (
    <Layout>
      <__IntroPageContainer>
        <div className="width-container" style={{height: "200px"}}>
          <h2>I'm a Demo</h2>
        </div>
        <CardGrid>
        {
          cards.map((card, index) => 
              <LandingServicesCardComponent 
                title={card.title}
                content={card.content}
                button={card.button}
                key={index}
              />
          )
        }
        </CardGrid>
        <div className="width-container">
          <h3 className="intro-text--header">{intro.header}</h3>
          <p className="intro-text">{intro.text}</p>
        </div>  
      </__IntroPageContainer>
    </Layout>
  )
} 





const IndexPage = ({data}) => {
  
  const { frontmatter: { blurb, cards, intro, artists } } = data.markdownRemark;
  return (
    <IndexPageTemplate
      blurb={blurb}
      cards={cards}
      intro={intro}
      artists={artists}
    />
  )
}

export default IndexPage

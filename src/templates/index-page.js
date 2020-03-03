import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout';
import { LandingServicesCardComponent } from './styles/index-page';

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
          text
          header
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

export const IndexPageTemplate = ( { blurb, cards, intro, artists } ) => {
  return (
    <Layout>
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

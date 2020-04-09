import React from 'react'
import { 
  graphql, 
  Link 
} from 'gatsby'
import styled from 'styled-components';

import {
  Card,
  DecoratedTitle, 
  LandingServiceCard,
  Layout,
} from './../components';

import facebook from '../img/social/facebook.svg';

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
          image {
            childImageSharp {
              fluid(maxWidth: 250, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          button {
            title
            link
          }
        }
        dividerImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
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
            image {
              childImageSharp {
                fluid(maxWidth: 250, maxHeight: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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

const LandingSection = styled.div`

`

const LandingBlob = styled.img`
  width: 300px;
  height: 300px;
`

export const CardGrid = styled.div`
  display: grid;
  max-width: 1300px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2em;
  align-items: flex-start;
  justify-items: center;
`

export const DividerImage = styled.div`
  height: 30vh;
`

export const ArtistsSection = styled.div`
  padding-top: 3em;
  img {
    max-width: 250px;
    height: 300px;
    &.left {
      float: left;
    }
    
    .right {
      float: right;
    }
  }
  ::after {
  content: "";
  clear: both;
  display: table;
  }
`;

export const Intro = styled.div`
  padding: 10em 0;
  .intro__header {
    font-size: 3em;
    font-weight: bold;
  }
  * + * {
    margin-top: 3em;
  }
`

const Reccomendations = styled.div`
  background-color: #66549A;
  padding: 5em 0;
`

const ReccomendationCard = (props) => {
  return(
    <Card color="#000">
      <blockquote>
        <p>{props.text}</p>
        <h5>{props.title}</h5>
      </blockquote>
    </Card>
  )
}

export const IndexPageTemplate = ( { blurb, cards, intro, artists, dividerImage } ) => {
  return (
    <Layout>
        <LandingSection>
          <LandingBlob src="/img/LandingBlob.svg"/>
          <CardGrid>
          {
            cards.map((card, index) => 
                <LandingServiceCard
                  title={card.title}
                  content={card.content}
                  img={card.image}
                  button={card.button}
                  key={index}
                />
            )
          }
          </CardGrid>
          <Intro>
            <div className="width-container">
              <h3 className="fs-xl">{intro.header}</h3>
              <p className="fs-s">{intro.text}</p>
            </div>  
          </Intro>
        </LandingSection>
        
        
        <DividerImage
          style={{
            backgroundImage: `url(${
              !!dividerImage.childImageSharp ? dividerImage.childImageSharp.fluid.src : dividerImage
            })`,
          }}
        />

        <ArtistsSection>
          <DecoratedTitle>Our Artists</DecoratedTitle>
          <div className="width-container">
            <DecoratedTitle>{artists.artist[0].name}</DecoratedTitle>
            <img src={ artists.artist[0].image.childImageSharp ? artists.artist[0].image.childImageSharp.fluid.src : artists.artist[0].image } className="left"/>
            <p>{artists.artist[0].description}</p>
            <a title="facebook" href="https://facebook.com">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '2em', height: '2em' }}
              />
            </a>
          </div>
        </ArtistsSection>

        <Reccomendations>
          <ReccomendationCard text={"Hello"} title={"stuff"}/>
        </Reccomendations>
    </Layout>
  )
} 





const IndexPage = ({data}) => {
  
  const { frontmatter: { blurb, cards, intro, artists, dividerImage } } = data.markdownRemark;
  return (
    <IndexPageTemplate
      blurb={blurb}
      cards={cards}
      intro={intro}
      artists={artists}
      dividerImage={dividerImage}
    />
  )
}

export default IndexPage

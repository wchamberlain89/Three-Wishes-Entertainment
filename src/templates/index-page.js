import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  ButtonBack, 
  ButtonNext,
  DotGroup 
} from 'pure-react-carousel';

import {
  Artist,
  Card,
  Carousel,
  DecoratedTitle, 
  LandingServiceCard,
  Layout,
  MaxWidth
} from './../components';


import 'pure-react-carousel/dist/react-carousel.es.css';
const balloons = require("../img/balloons.jpg");
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
        reccomendations {
          title
          text
        }
      }
    }
  } 
`

export const StyledDotGroup = styled(DotGroup)`
  display: flex;
  justify-content: center;
  height: 15px;
`

export const CardGrid = styled.div`
  display: grid;
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2em;
  align-items: flex-start;
  justify-items: center;
`

export const DividerImage = styled.div`
  height: 30vh;
`

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

export const Reccomendations = styled.div`
  background-color: #66549A;
  padding: 5em 0;
`

export const slideImages = [
  require('../img/balloons.jpg'),
  require('../img/test1.jpg'),
  require('../img/test2.jpg'),
]

export const ReccomendationCard = (props) => {
  return(
    <Card color="#000">
      <blockquote>
        <p>{props.text}</p>
        <h5>{props.title}</h5>
      </blockquote>
    </Card>
  )
}

export const ArtistsSection = styled.div`
  padding: 3rem 0;
`

export const LandingContainer = styled.div`
  min-height: 75vh;
  background: url(${balloons});
`

export const IndexPageTemplate = ( { blurb, cards, intro, artists, dividerImage } ) => {
  return (
    <Layout>
        <LandingContainer>
          
          <CarouselProvider
            naturalSlideWidth={10}
            naturalSlideHeight={10}
            totalSlides={3}
            interval={3000}
            isPlaying={true}
            infinite={true}
            visibleSlides={1}
            >
            <Slider style={{maxHeight:"75vh", width: "50%", margin: "0 auto"}}>
            {slideImages.map((image, index) => <Slide index={index}><img style={{width: "100%"}} src={image}/></Slide>)}
            </Slider>
            <StyledDotGroup/>
          </CarouselProvider>
          
        </LandingContainer>
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
        <MaxWidth>
          <h3 className="fs-xl">{intro.header}</h3>
          <p className="fs-s">{intro.text}</p>
        </MaxWidth>  
      </Intro>
      <DividerImage
        style={{
          backgroundImage: `url(${
            !!dividerImage.childImageSharp ? dividerImage.childImageSharp.fluid.src : dividerImage
          })`,
        }}
      />
      <ArtistsSection>
        <MaxWidth>
        <h2 className="fs-xl">Our Artists</h2>
          
            {
              artists.map( (artist, index) => {
                const reverse = index % 2 === 1;
                return (
                  <Artist artist={artist} reverse={reverse} key={artist.name}/>
                )
              })
            }
          
        </MaxWidth>
      </ArtistsSection>

      <Reccomendations>
        <ReccomendationCard text={"Hello"} title={"stuff"}/>
      </Reccomendations>
    </Layout>
  )
} 





const IndexPage = ({data}) => {
  
  const { frontmatter: { blurb, cards, intro, artists, dividerImage } } = data.markdownRemark;
  console.log(artists)
  
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

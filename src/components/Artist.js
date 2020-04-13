import React from 'react';
import styled from 'styled-components';
import facebook from '../img/social/facebook.svg';

const ArtistContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => props.reverse ? "row-reverse" : "row"};

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const ArtistName = styled.h4`
  @media screen and (max-width: 600px) {
    margin-top: 1.5rem;
  }
`;

const ArtistImage = styled.img`
  max-width: 250px;
  height: 300px;

  float: ${({float}) => float};
`

const ArtistContent = styled.div`
  width: 75%;

  & > * + * {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const ArtistDescription = styled.p`
  line-height: 1.2;
`

const ArtistSocials = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Artist = ({artist : { description, image, name }, reverse}) => {
  console.log(image)
  return (
    <ArtistContainer reverse={reverse}>
      <ArtistImage src={ image.childImageSharp ? image.childImageSharp.fluid.src : image }/>
      <ArtistContent>
        <ArtistName className="fs-l bold">{ name }</ArtistName>
        <ArtistDescription className="fs-m">{ description }</ArtistDescription>
        <ArtistSocials>
          <a className="center" title="facebook" href="https://facebook.com">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: '3em', height: '3em' }}
            />
          </a>
        </ArtistSocials>
      </ArtistContent>
    </ArtistContainer>
  )

}

export default Artist;
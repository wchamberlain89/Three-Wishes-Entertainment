import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Button from './Button';
import { Link } from 'gatsby';

const StyledLandingServiceCard = styled(Card)`
  background: linear-gradient(180deg, #66549A 0%, #846CCD 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-size: 2.25em;
  }
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  * + * {
    margin-top: 2em;
  }
`

export const LandingServiceCard = ({ title, content, img, button }) => {
  return (
    <StyledLandingServiceCard>
      <img src={ img.childImageSharp ? img.childImageSharp.fluid.src : img } className="img-circle"/>
      <h3 className="title">{title}</h3>
      <p>{content}</p>
      <Button><Link to={button.link}>{button.title}</Link></Button>
    </StyledLandingServiceCard>
  )
}
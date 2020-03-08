import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Button from './Button';
import { Link } from 'gatsby';

export const ServiceCard = styled(Card)`
  background: linear-gradient(180deg, #66549A 0%, #846CCD 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-size: 2.25em;
      &::after {
      content: "";
      margin-top: .25em;
      height: 3px;
      display: block;
      background-color: white;
      border-radius: 50px;
    }
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
    <ServiceCard>
      <img src={ img.childImageSharp ? img.childImageSharp.fluid.src : img } className="img-circle"/>
      <h3 className="title">{title}</h3>
      <p>{content}</p>
      <Link to={button.link}><Button><a>{button.title}</a></Button></Link>
    </ServiceCard>
  )
}


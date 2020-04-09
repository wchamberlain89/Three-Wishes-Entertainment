import React from 'react';
import Card from './Card';
import Button from './Button';
import { Link } from 'gatsby';

export const LandingServiceCard = ({ title, content, img, button }) => {
  return (
    <Card background={ "linear-gradient(180deg, #66549A 0%, #846CCD 100%)" }>
      <Card.Image src={ img.childImageSharp ? img.childImageSharp.fluid.src : img }/> 
      <Card.Title>{title}</Card.Title>
      <Card.Text>{content}</Card.Text>
      <Button><Link to={button.link}>{button.title}</Link></Button>
    </Card>
  )
}


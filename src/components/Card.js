import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import Img from 'gatsby-image';

///STYLED COMPONENTS///
const Container = styled.div`
  padding: .85rem .85rem;
  border-radius: 10px;
  box-shadow: -1px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${ props => props.background || "white" };
  color: ${ props => props.color };
`;

const Image = styled.img`
  width: 50%;
  border-radius: 50%;
`

///MAIN COMPONENTS
const Card = ({ classes, children, ...restProps}) => {
  return (
    <Container class={classNames('card', classes)} { ...restProps }>
      { children }
    </Container>
  )
}

Card.Title = ({ classes, children, ...restProps}) => {
  return (
    <h3 class={classNames('card__title', classes)} {...restProps}>
      { children }
    </h3>
  )
}

Card.Text = ({ classes, children, ...restProps }) => {
  return (
    <p class={classNames('card__text', classes)} {...restProps}>
      { children }
    </p>
  )
}

Card.Image = ({ src, classes, ...restProps }) => {
  return (
    <Image 
      src={src}
      class={classNames('card__image', classes)} 
      {...restProps}
    />
  )
}

export default Card;
import React from 'react';
import classNames from 'classnames';
import { Container } from './styles/Card';

function Card({ classes, children, ...restProps}) {
  return (
    <Container className={classNames('card', classes)} { ...restProps }>
      {children}
    </Container>
  )
}

export default Card;
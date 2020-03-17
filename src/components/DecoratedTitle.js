import React from 'react'
import styled from 'styled-components';
import DecoratedTitle from './styles/DecoratedTitle';

const DecoratedTitleComponent = (props) => {
  return (
    <DecoratedTitle {...props}><span/>{props.children}<span/></DecoratedTitle>
  )
}

export default DecoratedTitleComponent;

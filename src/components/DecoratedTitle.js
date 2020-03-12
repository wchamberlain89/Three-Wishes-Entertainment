import React from 'react'
import styled from 'styled-components';

const StyledDecoratedTitle = styled.h3`
  display: flex;
  align-items: center;
  font-weight: 800;
  span {
    display: flex;
    flex-grow: 1;
    padding: 0 50px;
  }
  span::before {
    content: "";
    width: 100%;
    display: inline-block;
    background: white;
    height: 3px;
    border-radius: 100px;
  }
`;


const DecoratedTitle = (props) => {
  return (
    <StyledDecoratedTitle {...props} className="title__large" ><span/>{props.children}<span/></StyledDecoratedTitle>
  )
}

export default DecoratedTitle;

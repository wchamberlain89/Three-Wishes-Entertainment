import React from 'react'
import styled from 'styled-components';

const StyledDecoratedTitle = styled.h3`
  display: flex;
  align-items: center;
  span {
    display: flex;
    flex-grow: 1;
    padding: 0 10px;

    &::first-of-type {
      padding-left: 0px;
    }
  }
  span::before {
    content: "";
    width: 100%;
    display: inline-block;
    background: white;
    height: 3px;
    border-radius: 100px;
  }
  span::first-of-type {
    padding-left: 0px;
  }
  span::last-of-type {
    padding-right: 0px;
  }
`;


const DecoratedTitle = (props) => {
  return (
    <StyledDecoratedTitle {...props} className="title__large" ><span style={{paddingLeft: "0"}}/>{props.children}<span style={{paddingRight: "0"}}/></StyledDecoratedTitle>
  )
}

export default DecoratedTitle;

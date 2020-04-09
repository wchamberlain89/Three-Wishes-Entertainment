import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 100px;
  padding: .5em 1.5em;
  margin: 0;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  background-color: #FF0000;
  font-family: inherit;
  font-size: 1.5em;
  line-height: 1;
  color: white;
  display: inline-block;
  a {
    color: white;
    font-family: dosis;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    display: inline-block;
  }
`

export default Button;
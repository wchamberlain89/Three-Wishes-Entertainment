import styled from 'styled-components';

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;

  .accordion__header {
    background-color: #FFFFFF;
    color: #000;
    cursor: pointer;
    padding: .5em .75em;
    border-radius: 10px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;
    z-index: 10;
    font-family: inherit;
  }

  .accordion__header:hover,
  .active {
    background-color: #E3E3E3;
  }

  .accordion__icon {
    margin-right: 1em;
    transition: transform 0.6s ease;
  }

  .rotate {
    transform: rotate(90deg);
  }

  .accordion__content {
    position: relative;
    top: -10px;
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.purple};
    overflow: hidden;
    transition: max-height 0.6s ease;
    font-weight: 400;
    font-size: 14px;
  }

  .accordion__content > * {
    margin-top: 10px;
  }

  .accordion__text {
    padding: 2em 2em;
    font-size: 1.5em;
  }
`;

export default AccordionContainer;



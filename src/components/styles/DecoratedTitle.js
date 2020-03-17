import styled from 'styled-components';

const DecoratedTitle = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  span {
    width: 100%;
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

export default DecoratedTitle;
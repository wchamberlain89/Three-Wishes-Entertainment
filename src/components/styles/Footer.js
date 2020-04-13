import styled from 'styled-components';

const Footer = styled.div`
  margin: 5em 0;
  .social {
    height: 4em;
    width: 4em;
    margin-right: 1em;
  }
  .contact-info {
    font-size: 1.5em;
  }
  .inner {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    & > * + * {
      margin-top: 1.5rem;
    }

  }
`;

export default Footer;
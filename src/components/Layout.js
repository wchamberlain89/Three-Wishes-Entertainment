import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/main.scss';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

export const theme = {
  purple: "#47337F",
  maxWidth: "1400px"
}

export const GlobalStyle = createGlobalStyle`
  html {
  font-size: 16px;
  }

  body {
    font-family: 'dosis';
    color: white;
    background-color: ${theme.purple};
  }

  .width-container {
    max-width: 1400px;
    margin: 0 auto;
  }

  .title {
    font-size: 2em;

    &__large {
      font-size: 3em;
    }
  }
`

const TemplateWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Navbar />
        <div>{children}</div>
      <Footer />
    </ThemeProvider>
  )
}

export default TemplateWrapper
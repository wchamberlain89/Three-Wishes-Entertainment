import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/main.scss';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

export const theme = {
  purple: "#47337F",
  maxWidth: "1400px",
  gradient: "linear-gradient(180deg, #66549A 0%, #846CCD 100%)",
  borderRadius: "10px",
  spacing: ["0.75rem", "1rem", "1.5rem", "3rem", "5rem"], 
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
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

  h1, .fs--xxl {
    font-size: 4.209em;
  }
  h2, .fs-xl {
    font-size: 3.157em;
  }
  h3, .fs-l {
    font-size: 2.369em;
  }
  h4, .fs-m {
    font-size: 1.777em;
  }
  h5, .fs-s {
    font-size: 1.333em;
  }
  h6, .fs-xs {
    font-size: 1em;
  }

  .width-container {
    max-width: 1140px;
    margin: 0 auto;
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
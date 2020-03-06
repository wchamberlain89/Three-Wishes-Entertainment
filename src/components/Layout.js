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
  .title {
    font-size: 2em;

    &__large {
      font-size: 2.66em;
    }

    &--decorated::before {
      content: "";
      display: inline-block;
      width: 100%;
      border-bottom: 1px solid white;
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
import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/main.scss';
import { ThemeProvider } from 'styled-components';

export const theme = {
  purple: "#47337F",
  maxWidth: "1400px"
}

const TemplateWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
        <div>{children}</div>
      <Footer />
    </ThemeProvider>
  )
}

export default TemplateWrapper
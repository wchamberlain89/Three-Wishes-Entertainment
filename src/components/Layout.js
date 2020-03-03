import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/main.scss';

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
        <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
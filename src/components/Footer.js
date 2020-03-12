import React from 'react'
import Footer from './styles/Footer';
import Button from './Button';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';

const FooterComponent = () => {
  return (
    <Footer>
      <div className="inner">
        <h3 className="title__large">GOT A QUESTION, OR WANT TO GET IN TOUCH?</h3>
        <Button>Contact Us</Button>
        <div className="contact-info">
          Three Wishes Entertainment<br/>
          971-555-5555<br/>
          Portland, OR<br/>
        </div>
        <div>
          <img className="social" src={facebook}/>
          <img className="social" src={instagram}/>
        </div>
        
      </div>
    </Footer>
  )
}

export default FooterComponent
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import Layout from '../../components/Layout';
import DecoratedTitle from '../../components/DecoratedTitle';
import Button from '../../components/Button';
import Card from '../../components/Card';

const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  .purple {
    background: ${props => props.theme.gradient};
  }
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5em;
  
  input {
    padding: .5em 1em;
    color: white;
    border: 1px solid white;
    background-color: ${({ theme }) => theme.purple};
    font-family: dosis;
  }
`

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <Layout>
      <div className="width-container">
        <DecoratedTitle style={{margin: "3rem 0"}}><h1 className="fs-xl">Contact Us</h1></DecoratedTitle>
        <ContactLayout>
          <div>
            <p className="fs-s" style={{lineHeight: "1.3", padding: "0 1rem 0 0"}}>
              <div className="fs-m">
                Hey thanks for checking us out!
              </div>
                Booking with Three Wishes has never been easier! Simply fill out our online Booking Inquiry Form!

                Once all of the information about your event has been reviewed, we will send you an email either confirming our availability or recommending another entertainer if we are not available for your event! 
                
                If we are available for your event, your email will have a contract attached for you to electronically sign and return. Then, we will be booked and ready to go! 

                We recommend you book with us at least 2 weeks before your event date

                If you still have questions try checking out our 
            </p>
            <Button>FAQ</Button>
          </div>

          <Card className='purple' style={{ padding: "2em 1.5em" }}>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
              <DecoratedTitle><h2 className='fs-l'>Booking</h2></DecoratedTitle>
              <h3 className='fs-l'>Get in touch about your event!</h3>
              <input type="text" placeholder="Name" name="Name" ref={register({required: true, maxLength: 80})} />
              <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
              <input type="tel" placeholder="Phone Number" name="Phone Number" ref={register({required: true, maxLength: 12})} />
              <input type="text" placeholder="Event Address" name="Event Address" ref={register} />
              <input type="datetime" placeholder="Event Date" name="Event Date" ref={register} />
              <input type="text" placeholder="What Services are you interested in?" name="What Services are you interested in?" ref={register} />
              <select name="duration" ref={register}>
                <option value="1">1 Hour</option>
                <option value="2">2 Hours</option>
                <option value="3">3 Hours</option>
              </select>

              <Button type='submit'>Send Inquiry</Button>
            </ContactForm>
          </Card>
        </ContactLayout>
      </div>
    </Layout>
  );
}


export default Contact;
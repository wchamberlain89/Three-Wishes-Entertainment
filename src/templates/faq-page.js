import React from 'react'
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import DecoratedTitle from '../components/DecoratedTitle';
import Accordion from '../components/Accordion';

export const FAQ_PAGE_QUERY = graphql`
  query FAQ_PAGE_QUERY($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      frontmatter {
        title
        questions {
          question
          answer
        }
      }
    }
  } 
`;

const FaqPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter
  
  return (
    
    <FaqPageTemplate
      title={frontmatter.title}
      questions={frontmatter.questions}
    />
    
  )
}

const QuestionContainer = styled.div`
  background: ${props => props.theme.gradient};
  padding: 2em;
  border-radius: ${props => props.theme.borderRadius};

  & > * + * {
    margin-top: .5em;
  }
`;

export const FaqPageTemplate = ({
  title,
  questions
}) => {
  return (
    <Layout>
      <div className="width-container">
        <DecoratedTitle style={{margin: "3rem 0"}}>{title}</DecoratedTitle>
        
        <QuestionContainer>
          {
            questions.map(question => <Accordion title={question.question}><p className="accordion__text">{question.answer}</p></Accordion>)
          }
        </QuestionContainer>  
      </div>
    </Layout>
  )
}



export default FaqPage;

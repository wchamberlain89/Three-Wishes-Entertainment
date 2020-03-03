import React from 'react';
import Card from  '../../components/Card';
import styled from 'styled-components';

const LandingServicesCard = styled(Card)`
  background-color: #47337F;
  max-width: 400px;
  .title {
    font-size: 4em;
  }
`

export const LandingServicesCardComponent = ({ title, content, button }) => {
  return (
    <LandingServicesCard>
      <h3 className="title">{title}</h3>
      <p>{content}</p>
    </LandingServicesCard>
  )
}

export default {
  LandingServicesCardComponent: LandingServicesCardComponent
}
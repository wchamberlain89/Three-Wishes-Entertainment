import React from 'react'
import PropTypes from 'prop-types'
import { ServicesPageTemplate } from '../../templates/services-page'

const ServicesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  
  const services = data.services.map((service) => {
    service.image = getAsset(service.image);
    return service
  });

  return (
    <ServicesPageTemplate
      title={data.title}
      services={services}
    />
  )
}

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ServicesPagePreview
import React from 'react'
import PropTypes from 'prop-types'
import { FaqPageTemplate } from '../../templates/services-page'

const FaqPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  return (
    <FaqPageTemplate
      title={data.title}
      questions={data.questions}
    />
  )
}

export default FaqPagePreview
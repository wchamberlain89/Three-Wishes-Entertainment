import React from 'react'
import PropTypes from 'prop-types'


import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
      <IndexPageTemplate
      blurb={getAsset(data.blurb)}
      cards={getAsset(data.cards)}
      intro={getAsset(data.intro)}
      artists={getAsset(data.artists)}
      dividerImage={getAsset(data.dividerImage)}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview

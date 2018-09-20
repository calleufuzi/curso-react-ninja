'use strict'

import React, { PropTypes } from 'react'

const Actions = ({ getRepos, getStarred}) => (
  <div className='actions'>
    <button onClick={getRepos}> Ver reposiórios </button>
    <button onClick={getStarred}> Ver favoritos </button>
  </div>
)

export default Actions

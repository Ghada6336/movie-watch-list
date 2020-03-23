import React from 'react'
import PropTypes from 'prop-types'

const Doneitems = ({ onClick, completed, text}) => (
  <li className={'Doneitems'}
    onClick={onClick}
    style={{
      textDecoration: completed ? 'none' : 'line-through'
    }}
  >
    {text}
  </li>
)

Doneitems.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Doneitems
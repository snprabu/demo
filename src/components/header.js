import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div>
    <div>
      <h1 style={{ margin: 0, display: 'none'; }}>
		{siteTitle}
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: 'Profile',
}

Header.defaultProps = {
  siteTitle: 'Profile',
}

export default Header

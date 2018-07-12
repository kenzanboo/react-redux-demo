import React from 'react'
import PropTypes from 'prop-types'

const UserRow = ({ user, type }) => (
  <div>
    hello
  </div>
)
UserRow.propTypes = {
  user: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
}
export default UserRow

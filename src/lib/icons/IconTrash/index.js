import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import iconSolid from '@fortawesome/fontawesome-pro-solid/faTrashAlt'
import iconRegular from '@fortawesome/fontawesome-pro-regular/faTrashAlt'
import iconLight from '@fortawesome/fontawesome-pro-light/faTrashAlt'

class IconTrash extends Component {
  render() {
    const { className, fixedWidth, style } = this.props
    let icon

    switch (style) {
      default:
      case 'solid':
        icon = iconSolid
        break
      case 'regular':
        icon = iconRegular
        break
      case 'light':
        icon = iconLight
        break
    }

    return <FontAwesome className={className} icon={icon} fixedWidth={fixedWidth} />
  }
}

IconTrash.propTypes = {
  /** Fix the icon width. */
  fixedWidth: PropTypes.bool,
  /** Defines which font style will be used */
  style: PropTypes.oneOf(['solid', 'regular', 'light']),
  className: PropTypes.string
}

IconTrash.defaultProps = {
  fixedWidth: false,
  className: '',
  style: 'solid',
}

export default IconTrash

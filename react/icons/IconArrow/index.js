import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'

const rotate = {
  'up': 90, 'right': 180, 'down': 270, 'left': 0
}

class IconArrow extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color, side } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg style={{ transform: `rotate(${rotate[side]}deg)` }} className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path d={'M17.13,8.24H4l7.17-6.75a.87.87,0,0,0,0-1.22.86.86,0,0,0-1.22,0L1.29,8.37a.87.87,0,0,0,0,1.26l8.64,8.13a.86.86,0,1,0,1.19-1.25L4,9.76H17.13Z'} fill={svgColor} />
      </svg>
    )
  }
}

IconArrow.propTypes = {
  /** Which direction the arrow will point. */
  side: PropTypes.oneOf(['up', 'right', 'down', 'left']).isRequired,
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  /** Define color of the icon. */
  color: PropTypes.string,
  className: PropTypes.string
}

IconArrow.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconArrow

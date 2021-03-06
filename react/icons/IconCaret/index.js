import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors'


const rotate = {
  'up': 0, 'right': 90, 'down': 180, 'left': 270
}

class IconCaret extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color, side } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === 'currentColor' || !colors[color] ? 'currentColor' : colors[color]

    return (
      <svg style={{ transform: `rotate(${rotate[side]}deg)` }} className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path d={'M13,10.47,9.53,7A.75.75,0,0,0,8.47,7L5,10.47a.75.75,0,0,0,.53,1.28h7A.75.75,0,0,0,13,10.47Z'} fill={svgColor} />
      </svg>
    )
  }
}

IconCaret.propTypes = {
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

IconCaret.defaultProps = {
  ignoreSize: false,
  color: 'currentColor',
  height: '16px',
  width: '16px',
  className: ''
}

export default IconCaret

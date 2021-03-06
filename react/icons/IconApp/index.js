import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconApp extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M17.09,15.25l-6.38,2.43a4.73,4.73,0,0,1-3.42,0L.91,15.25a1.56,1.56,0,0,1,0-2.83h0l2.09.8-1.5.57v.09l6.32,2.4a3.27,3.27,0,0,0,2.36,0l6.32-2.4v-.09L15,13.22l2.09-.8h0A1.56,1.56,0,0,1,17.09,15.25Zm0-7.67h0L15,8.39,16.5,9V9l-6.32,2.41a3.27,3.27,0,0,1-2.36,0L1.5,9V9L3,8.39.91,7.59h0a1.57,1.57,0,0,0,0,2.84l6.38,2.43a4.73,4.73,0,0,0,3.42,0l6.38-2.43A1.57,1.57,0,0,0,17.1,7.58ZM9,1.5a3.24,3.24,0,0,0-1.18.22L1.5,4.12v.09l6.32,2.4a3.27,3.27,0,0,0,2.36,0l6.32-2.4V4.12l-6.32-2.4A3.24,3.24,0,0,0,9,1.5M9,0a4.84,4.84,0,0,1,1.71.32l6.38,2.43a1.56,1.56,0,0,1,0,2.84L10.71,8A4.87,4.87,0,0,1,7.29,8L.91,5.59a1.56,1.56,0,0,1,0-2.84L7.29.32A4.84,4.84,0,0,1,9,0Z"
          fill={svgColor} />
      </svg>
    )
  }
}

IconApp.propTypes = {
  /** Ignore fixed width and height. */
  ignoreSize: PropTypes.bool,
  /** Define width of the icon. */
  width: PropTypes.string,
  /** Define height of the icon. */
  height: PropTypes.string,
  /** Define color of the icon. */
  color: PropTypes.string,
  className: PropTypes.string,
}

IconApp.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconApp

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import colors from '../colors';

class IconSettings extends PureComponent {
  render() {
    const { className, ignoreSize, width, height, color } = this.props
    const style = !ignoreSize ? { width: width, height: height } : {}
    const svgColor = color === "currentColor" || !colors[color] ? "currentColor" : colors[color]

    return (
      <svg className={className} {...style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path
          d="M12.08,2.12l1.34.77L13,4.1l-.27.79.53.64A5.48,5.48,0,0,1,14.13,7l.3.78.81.16,1.26.25V9.77L15.24,10l-.81.16-.3.78a5.48,5.48,0,0,1-.86,1.51l-.53.64.27.79.41,1.21-1.34.77-.85-1-.54-.62-.82.13A5.85,5.85,0,0,1,9,14.5a5.85,5.85,0,0,1-.87-.08l-.82-.13-.54.62-.85,1-1.34-.77L5,13.9l.27-.79-.53-.64A5.48,5.48,0,0,1,3.87,11l-.3-.78L2.76,10,1.5,9.77V8.23L2.76,8l.81-.16L3.87,7a5.48,5.48,0,0,1,.86-1.51l.53-.64L5,4.1,4.58,2.89l1.34-.77.85,1,.54.62.82-.13A5.85,5.85,0,0,1,9,3.5a5.85,5.85,0,0,1,.87.08l.82.13.54-.62.85-1M12,.48a1,1,0,0,0-.75.34L10.11,2.1A6.74,6.74,0,0,0,9,2a6.74,6.74,0,0,0-1.11.1L6.77.82A1,1,0,0,0,6,.48a1,1,0,0,0-.5.14l-2,1.18A1,1,0,0,0,3,3l.54,1.6a7,7,0,0,0-1.1,1.93L.8,6.84a1,1,0,0,0-.8,1v2.36a1,1,0,0,0,.8,1l1.67.33a7,7,0,0,0,1.1,1.93L3,15a1,1,0,0,0,.45,1.18l2,1.18a1,1,0,0,0,.5.14,1,1,0,0,0,.75-.34L7.89,15.9A6.74,6.74,0,0,0,9,16a6.74,6.74,0,0,0,1.11-.1l1.12,1.28a1,1,0,0,0,.75.34,1,1,0,0,0,.5-.14l2-1.18A1,1,0,0,0,15,15l-.54-1.6a7,7,0,0,0,1.1-1.93l1.67-.33a1,1,0,0,0,.8-1V7.82a1,1,0,0,0-.8-1l-1.67-.33a7,7,0,0,0-1.1-1.93L15,3a1,1,0,0,0-.45-1.18l-2-1.18A1,1,0,0,0,12,.48ZM9,6.8A2.2,2.2,0,1,1,6.8,9,2.21,2.21,0,0,1,9,6.8M9,5.5A3.5,3.5,0,1,0,12.5,9,3.5,3.5,0,0,0,9,5.5Z"
          fill={svgColor} />
      </svg>
    )
  }
}

IconSettings.propTypes = {
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

IconSettings.defaultProps = {
  ignoreSize: false,
  color: "currentColor",
  height: '16px',
  width: '16px',
  className: '',
}

export default IconSettings



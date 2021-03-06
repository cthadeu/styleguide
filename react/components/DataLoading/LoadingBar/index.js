import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class LoadingBar extends PureComponent {
  render() {
    const { current, withLabel, withStripes } = this.props

    return (
      <div className={`g-h2 bg-navy-40 ${withLabel && 'g-mt8'}`}>
        <div className={`relative g-h1 bg-primary ${styles.bar}`} style={{ width: `${current}%` }}>
          {withStripes && <span className={styles.stripes} />}
          {withLabel && <span className="absolute bottom-1 right-0 fw6 blue">{current}%</span>}
        </div>
      </div>
    )
  }
}

LoadingBar.propTypes = {
  /** Current percent value. */
  current: PropTypes.number,
  /** Hide percentage label. */
  withLabel: PropTypes.bool,
  /** Show transparent stripes on loading bar. */
  withStripes: PropTypes.bool
}

LoadingBar.defaultProps = {
  current: 0,
  withLabel: false,
  withStripes: false
}

export default LoadingBar

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Paginate from 'react-paginate'
import IconCaret from '../../../icons/IconCaret'
import styles from './style.css'

class Pagination extends PureComponent {
  handleChange = data => {
    this.props.onPageChange(data)
  }

  render() {
    const { initialPage, pageCount, isCompact, forcePage } = this.props

    return (
      <Paginate
        previousLabel={<IconCaret side="left" />}
        nextLabel={<IconCaret side="right" />}
        initialPage={initialPage}
        pageCount={pageCount}
        onPageChange={this.handleChange}
        marginPagesDisplayed={isCompact ? 1 : 2}
        pageRangeDisplayed={isCompact ? 2 : 5}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        breakClassName={styles.break}
        previousLinkClassName={styles.previous}
        nextLinkClassName={styles.next}
        disabledClassName={styles.disabled}
        forcePage={forcePage}
      />
    )
  }
}

Pagination.propTypes = {
  /** Define selected page. */
  initialPage: PropTypes.number.isRequired,
  /** Define total count of pages. */
  pageCount: PropTypes.number.isRequired,
  /** Function to run when page is changed. */
  onPageChange: PropTypes.func,
  /** Set pagination to compact mode. */
  isCompact: PropTypes.bool,
  /**  To override selected page with parent prop. */
  forcePage: PropTypes.number,
}

Pagination.defaultProps = {
  onPageChange: () => {},
  isCompact: false,
}

export default Pagination
import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {

    const pageNumbers = []

    for ( let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++ ) {
        pageNumbers.push(i)
    }

    const paginateNum = () => {
        if (pageNumbers.length === 1) {
            return null
        } else {
            return (
                <Fragment>
                    { pageNumbers.map( number => (
                        <Link key={number} className="page-numbers" to="#" onClick={ () => paginate(number) }>
                            <span className="meta-nav screen-reader-text">Page </span>
                            {number}
                        </Link>
                    ))}
                </Fragment>
            )
        }
    }
    return (
        <nav className="navigation pagination" role="navigation">
            <h2 className="screen-reader-text">Posts navigation</h2>
            <div className="nav-links">
                <Link className="prev page-numbers" to="#" onClick={ () => paginate(1) }>
                    <i className="fa fa-angle-left"></i>
                    <span className="screen-reader-text">Previous page</span>
                </Link>
                {paginateNum()}
                <Link className="next page-numbers" to="#" onClick={ () => paginate(pageNumbers.length) }>
                    <span className="screen-reader-text">Next page</span>
                    <i className="fa fa-angle-right"></i>
                </Link>
            </div>
        </nav>
    )
}

export default Pagination

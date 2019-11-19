import React, {Fragment} from 'react'

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
                        <li key={number} className="page-item">
                            <button className="page-link" onClick={ () => paginate(number) }>
                                {number}
                            </button>
                        </li>
                    ))}
                </Fragment>
            )
        }
    }
    return (
        <nav>
            <ul className="pagination">
                {paginateNum()}
            </ul>
        </nav>
    )
}

export default Pagination

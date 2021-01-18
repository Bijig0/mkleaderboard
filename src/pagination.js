import React from 'react'

const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className='pagination'>
                {pageNumbers.map((number) => {
                    return (
                    <li key={number} className="page-item">
                        <a onClick={(e) => { 
                            e.preventDefault()
                            paginate(number) }} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                )})}
            </ul>
        </div>
    )
}


// Pagination problem is that onclick it goes to a new link that is not corresponding to the usual one
export default Pagination

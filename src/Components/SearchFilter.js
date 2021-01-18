import React from 'react'

// Import the final leaderboard from app.js and use data from there

const SearchFilter = () => {
    const submitHandler = (e) => {
        e.preventDefault()
    }
    const changeHandler = (e) => {
        e.preventDefault()
    }
    return (
        <form className="d-flex" onSubmit={submitHandler}>
        <input className="form-control me-2" placeholder="Coming Soon..." onChange={changeHandler}/>
        <button className="btn btn-outline-success" type="submit">Search</button>

      </form>
    )

}

export default SearchFilter
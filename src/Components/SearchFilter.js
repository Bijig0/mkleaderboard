import React from 'react'

const SearchFilter = () => {
    const submitHandler = (e) => {
        e.preventDefault()
    }
    const changeHandler = (e) => {
        
    }
    return (
        <form className="d-flex" onSubmit={submitHandler}>
        <input className="form-control me-2" placeholder="Search For Player" onChange={changeHandler}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    )

}

export default SearchFilter
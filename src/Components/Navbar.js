import React from 'react'
import { useEffect,useState } from 'react'
import logoBanner from '../img/MK11ProKompBanner.png'
import uuid from 'react-uuid'
import Data from "../data/data"
import {Link} from 'react-router-dom'

const Banner = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <div className="navbar-collapse" id="navbarSupportedContent">
                <img src={logoBanner} alt="MK11" class="d-inline-block align-top" height="50"></img>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <RegionCardList/>
                </ul>
            </div>
            </div>
        </nav>
    </>

    )}

// const EventTab = () => {
//     const [Show, setShow] = useState(false)
//         return (
//             <>
//             <div className='d-flex justify-content-center bg-dark'>
//                 <a onClick={() => setShow(true)} href="#" className="display-1">Events</a>
//             </div>
//             {Show && <RegionCardList/>}
//             </>
//         )

// }

const RegionCardList = () => {
    return (
        <>
        {Data.map((card) => {
            return <RegionalCard {...card}/>
        })}
        </>
    )
}


const RegionalCard = ({ListOfCountries}) => {
    return (
        <>
                {ListOfCountries.map((Country) => {
                    return (
                    <DisplayRowOfMainCountries key={uuid()} {...Country} />
                )})}
            </>
)
}

const DisplayRowOfMainCountries = ({DisplayCountry,SubcountryList}) => {
    const [showCountryState,setShowCountryState] = useState(false)
    const [countryName, setcountryName] = useState("")
    const showCountry = (event) => {
        setcountryName(event.target.innerText)
        setShowCountryState(!showCountryState)
    }
    return (
        <>
        <li className="nav-item">
        <a className="nav-link dropdown-toggle mx-2" href="#" onClick={showCountry}>{DisplayCountry}</a>
        </li>
        {/* make this shit its own component so you can make it a dropdown menu */}
      
        {showCountryState && SubcountryList.map((SubCountry) => {
            return <Link to="/ME" ><a href="#" className="nav-link mx-2">{SubCountry.Name}</a></Link>
        }) }
        {/* {showCountryState && 
            <ul className="dropdown-menu show">
                {SubcountryList.map((Subcountry) => {
                    return <h1>{Subcountry.Name}</h1>
                })}
            
            </ul>} */}
        {/* Also make the lists new Array each time so no overlapping */}
        </>
    )

}

const DropDown = () => {

}

{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <img src="./img/MK11ProKompBanner.png" alt="" class="d-inline-block align-top" height="50">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}







export default Banner
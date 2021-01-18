import React from 'react'
import '../css/override.css'
import { useEffect,useState } from 'react'
import logoBanner from '../img/MK11ProKompBanner.png'
import uuid from 'react-uuid'
import Data from "../data/data"
import SearchFilter from './SearchFilter'
import {Link} from 'react-router-dom'

// 885px

const Banner = () => {
    const [windowSize, setwindowSize] = useState(window.innerWidth)
    const checkSize = () => {
      setwindowSize(window.innerWidth)
    }
    useEffect(() => {
      window.addEventListener("resize",checkSize)
      return () => {
        window.removeEventListener("resize",checkSize)
      }
    },[])
    return (
      <>
      {windowSize > 892? <Navbar NavbarToShow={true}/>: <Navbar NavbarToShow={false}/>}
      </>
        

    )}

    // if more than 885 then show Navbar with RegionCardList, if less than 885 then show Navbar but with Events instead, Events will then produce Navbar with RegionCardList

    const Navbar = ({NavbarToShow}) => {
      const [Show, setShow] = useState(false)
      return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <div className="navbar-collapse" id="navbarSupportedContent">
              {NavbarToShow?
              <img src={logoBanner} alt="MK11" className="d-inline-block align-top" height="50"></img>:
              <img src={logoBanner} alt="MK11" className="d-inline-block align-top" width="100%" onClick={() => setShow(false)} ></img>
            }
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {NavbarToShow || Show ? <RegionCardList/> : 
                    <a onClick={() => setShow(true)} href="#" className="nav-link dropdown-toggle">Events</a>
                }
                </ul>
            </div>
            </div>
            {/* <SearchFilter/> */}
        </nav>
    </>
      )
    }

    export const PosNameVal = () => {
      return (
        <div className="container-fluid bg-light d-flex justify-content-evenly">
          <h1 className="Header">Position</h1>
          <h1 className="Header push">Name</h1>
          <h1 className="Header"> Points</h1>
        </div>
      )
    }

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
        {/* make this shit its own component so you can make it a dropdown menu (I CBA TO STYLE CSS) */}
        {/* THIS IS THE ISSUE WITH LINK TO AND A IS NESTED, FIX IT ONCE YOU CARE ENOUGH */}
      
        {showCountryState && SubcountryList.map((SubCountry) => {
          const SubCountryList = SubCountry.Name.split(" ")
          const newWord = SubCountryList.join('')
            return <Link to={newWord} ><a className="nav-link mx-2">{SubCountry.Name}</a></Link>
        }) }
        {/* {showCountryState && 
            <ul className="dropdown-menu show">
                {SubcountryList.map((Subcountry) => {
                    return <h1>{Subcountry.Name}</h1>
                })}
            
            </ul>} */}
        </>
    )

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
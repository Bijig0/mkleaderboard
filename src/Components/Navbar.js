import React from 'react'
import { useEffect,useState } from 'react'
import logoBanner from '../img/MK11ProKompBanner.png'
import uuid from 'react-uuid'
import Data from "../data/data"

const Banner = () => {
    return (
        <>
    <div style={{width:'100%'}} className="bg-dark">
    <img style={{width:'100%'}} src={logoBanner}></img>
    </div>
    <EventTab/>
    </>

    )}

const EventTab = () => {
    const [Show, setShow] = useState(false)
        return (
            <>
            <div className='d-flex justify-content-center bg-dark'>
                <a onClick={() => setShow(true)} href="#" className="display-1">Events</a>
            </div>
            {Show && <RegionCardList/>}
            </>
        )

}

const RegionCardList = () => {
    return (
        <div className="d-flex justify-content-between">
        {Data.map((card) => {
            return <RegionalCard {...card}/>
        })}
        </div>
    )
}


const RegionalCard = ({Date,img,ListOfCountries}) => {
    return (
        <div className="d-flex flex-column">
        <div className="col-md-6 px-5">
    <img src={img} className="card-img-top"/>
        <div className="card-header">
            <h1 className="card-title">{Date}</h1>
            <div className="d-flex justify-content-between">
                {ListOfCountries.map((Country) => {
                    return (
                    <DisplayRowOfMainCountries key={uuid()} {...Country} />
                )})}
            </div>
        </div>
</div>
</div>
)
}

const DisplayRowOfMainCountries = ({DisplayCountry,SubcountryList}) => {
    const [showCountryState,setShowCountryState] = useState(false)
    const [countryName, setcountryName] = useState("")
    const showCountry = (event) => {
        setcountryName(event.target.innerText)
        setShowCountryState(true)
    }
    return (
        <div className='d-flex flex-direction-column'>
        <p onClick={showCountry}>{DisplayCountry}</p>
        {showCountryState && SubcountryList.map((SubCountry) => {
            return <a href="#">{SubCountry.Name}</a>
        }) }
        </div>
    )

}

// Turn this last part that shows subcountry.name into its own file that returns subcountry.name, then put it into index.js as it returns ListOfTournament Urls

// Depending on what country is clicked, access the link of urls, pass it into App as props, then map the url props and merge accordingly

//If you want only 1 to show, you need to make a new component, then put the rest into a list, depending on the click add the id and delete all the rest sop that that is the only id left in the list and then display the list

// for every country, if the name is equal to setname, display sub country names






export default Banner
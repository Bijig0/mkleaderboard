import React from 'react'
import {useState,useEffect} from 'react'
import logoBanner from '../img/MK11ProKompBanner.png'
import uuid from 'react-uuid'

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
    const [showCountryState,setShowCountryState] = useState(false)
    const [countryName, setcountryName] = useState("")
    const showCountry = (event) => {
        setcountryName(event.target.innerText)
        setShowCountryState(true)
    }
    return (
        <div className="d-flex flex-column">
        <div className="col-md-6 px-5">
    <img src={img} className="card-img-top"/>
        <div className="card-header">
            <h1 className="card-title">{Date}</h1>
            <div className="d-flex justify-content-between">
                {ListOfCountries.map((Country) => {
                    return <p key={uuid()} onClick={showCountry}>{Country.DisplayCountry}</p>
                })}
            </div>
        </div>
</div>
{showCountryState && <div className="text-center">
            {ListOfCountries.map((Country) => {
                if (Country.DisplayCountry === countryName)
                            return (
                            Country.SubcountryList.map((SubCountry) => {
                                return <p>{SubCountry.Name}</p>
                            })

                        )})}
                    </div>}

</div>
)
}

const Data = [
    {
        Date:'December 19 - June 6',
        img: 'stock',
        ListOfCountries: [
            {
                DisplayCountry: "North America",
                SubcountryList: [
                    {
                        Name:"NA West",
                        ListOfTournaments: [] 
                    },
                    {
                        Name:"NA East",
                        ListOfTournaments: []
                    }
                ]

            },
        ]},
    {
        Date:'December 12 - June 6',
        img: 'stock',
        ListOfCountries: [
            {
                DisplayCountry: "EU",
                SubcountryList: [
                    {
                        Name:"EU West",
                        ListOfTournaments: [] 
                    },
                    {
                        Name:"EU East",
                        ListOfTournaments: [] 
                    }

                ]

            },
            {
                DisplayCountry: "OCE",
                SubcountryList: [
                    {
                        Name:"OCE",
                        ListOfTournaments: [] 
                    }
                ]

            },
            {
                DisplayCountry: "ME",
                SubcountryList: [
                    {
                        Name:"ME",
                        ListOfTournaments: [] 
                    }
                ]

            }
            
        ]
    },
    {
        Date:'December 5 - June 6',
        img: 'stock',
        ListOfCountries:  [
            {
                DisplayCountry: "Latin America",
                SubcountryList: [
                    {
                        Name:"Latin America East",
                        ListOfTournaments: [] 
                    },
                    {
                        Name:"Latin America West",
                        ListOfTournaments: [] 
                    }
                ]

            },
            {
                DisplayCountry: "Mexico",
                SubcountryList: [
                    {
                        Name:"Mexico",
                        ListOfTournaments: [] 
                    }
                ]

            },
            {
                DisplayCountry: "Brazil",
                SubcountryList: [
                    {
                        Name:"Brazil",
                        ListOfTournaments: [] 
                    }
                ]

            }
            
        ]
    }

]





export default Banner
import Data from './data/data'

const TourneyNameGet = (CountryName) => {
    const TourneyList = []
    Data.map((Country) => {
        return Country.ListOfCountries.map((UpperCountry) => {
                return UpperCountry.SubcountryList.map((SubCountry) => {
                    if (SubCountry.Name == CountryName) {
                        return SubCountry.ListOfTournaments.map((Tourney) => {
                                TourneyList.push(Tourney.TourneyName)
                            
                        })
                    }
    
    
                }) 
        })
    })
    return TourneyList
}

export default TourneyNameGet

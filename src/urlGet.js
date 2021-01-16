import Data from './data/data'

const urlGet = (CountryName) => {
    const urls = []
    Data.map((Country) => {
        return Country.ListOfCountries.map((UpperCountry) => {
                return UpperCountry.SubcountryList.map((SubCountry) => {
                    if (SubCountry.Name == CountryName) {
                        return SubCountry.ListOfTournaments.map((Tourney) => {
                            if (Tourney.TourneyName !== "Final Leaderboard") {
                                urls.push(Tourney.url)
                            }
                        })
                    }
 
    
                }) 
        })
    })
    return urls
}

export default urlGet
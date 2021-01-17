import TourneyNameGet from "../TourneyNames"

// E.g. Final Leaderboard, tourney 1
const DisplayList = (CountryName) => {
    return (
        <div className="container-fluid bg-warning d-flex justify-content-evenly">
        {TourneyNameGet("Brazil").map((Name) => {
            return <a>{Name}</a>
        })}
        </div>
    )
    }

    export default DisplayList
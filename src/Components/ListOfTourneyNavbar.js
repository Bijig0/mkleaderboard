import TourneyNameGet from "../TourneyNames"

const DisplayList = (CountryName) => {
    return (
        <>
        {TourneyNameGet("Brazil").map((Name) => {
            return <h1>{Name}</h1>
        })}
        </>
    )
    }

    export default DisplayList
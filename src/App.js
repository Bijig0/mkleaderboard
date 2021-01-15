import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ useEffect,useState } from 'react'
import useFetch from './fetch'
import useParse from './parse'
import Pagination from './pagination'
import data from './data'
const fetch = require("node-fetch")

const TourneyUsersWithValues = []

function App() {
  const [currentPosts,setCurrentPosts] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const postsPerPage = 8
  const [CompiledDataToBeMerged, setCompiledDataToBeMerged] = useState([])
  const [FinalLeaderboard, setFinalLeaderboard] = useState([])
  // const users = useFetch('https://cors-anywhere.herokuapp.com/https://api.eslgaming.com/play/v1/leagues/217909/ranking?limit=0&offset=0')
  // const secondusers = useFetch('https://cors-anywhere.herokuapp.com/https://api.eslgaming.com/play/v1/leagues/218227%20/ranking?limit=0&offset=0')
  const users = data
  const listofAllTourneys = [users]

  const lastIndexOfPage = currentPage * postsPerPage
  const firstIndexofPage = lastIndexOfPage - postsPerPage

  const mergeData = (dataToBeMerged) => {
    const res = Array.from(dataToBeMerged.reduce(
      (m, {name, value}) => m.set(name, (m.get(name) || 0) + value), new Map
    ), ([name, value]) => ({name, value}));

    var byDate = res.slice(0);
    byDate.sort(function(a,b) {
    return b.value - a.value;
    });
    return byDate

  }

  useEffect(() => {
    if (FinalLeaderboard) {
      setCurrentPosts(FinalLeaderboard.slice(firstIndexofPage,lastIndexOfPage))
  
    }
  }, [FinalLeaderboard,currentPage])
   
  useEffect(() => {
    if (CompiledDataToBeMerged) {
      setFinalLeaderboard(mergeData(CompiledDataToBeMerged))
    }

  }, [CompiledDataToBeMerged])

  const paginate = (pageNum) => {
    setcurrentPage(pageNum)
  }

  return (
    <>
    {currentPosts.map((Person) => {
      return <Individualperson {...Person}/>
    })}
    <Pagination postsPerPage={postsPerPage} totalPosts={FinalLeaderboard.length} paginate={paginate}/>

      {users.length > 0 && listofAllTourneys.map((tourney) => {
        return (
        <Tourney tourney={tourney} setCompiledDataToBeMerged={setCompiledDataToBeMerged}/>
      )})}
      
      </>
  );
}

// make the final list in the app when you have all the lists available, and then send the final list down as props

// find way to make labelvalue fire once removelabel is done using async await i reckon

// firstly update individual player with the value, then send it to tourney, have a list in tourney that appends all of it, then once each tourney is created go ahead and send it abck to the initial one and then do the merging algorithm on that

const Tourney = ({tourney,setCompiledDataToBeMerged}) => {
  return (
    <>
         {tourney.map((user) => {
        return (
          <>
          <IndividualPlayerInfo {...user} setCompiledDataToBeMerged={setCompiledDataToBeMerged}/>
 
          </>
        )
        
      })}
    </>
  )

}

const IndividualPlayerInfo = ({label,position,user,setCompiledDataToBeMerged}) => {
  if (position == 4) {
    label = '4'
  }
  const [correctPosition,value] = useParse(label)
  useEffect(() => {
    if (value) {
      TourneyUsersWithValues.unshift({name:user.nickname,value:value})
      setCompiledDataToBeMerged(TourneyUsersWithValues)
    }
  }, [value])
  return (
    <div className="d-flex">
    {/* <h1 className="display-1">{correctPosition}.</h1>
    <h1 className="display-1">{user.nickname}</h1>
    <h1 className="display-1 mx-5">{value}</h1>
    <h1 onClick={() => {
      console.log(TourneyUsersWithValues)
      console.log(value)
    }
     }>Click Me</h1> */}
    </div>
  )

}

const Individualperson = ({name,value}) => {
  return (
    <div className='d-flex'>
    {/* <h1 className="display-1">{index}.</h1> */}
    <h1 className="display-1">{name}</h1>
    <h1 className="display-1 mx-5">{value}</h1>
    </div>
  )

}





export default App;

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ useEffect,useState } from 'react'
import useFetch from '../fetch'
import useParse from '../parse'
import Pagination from '../pagination'
import GoldenDiv from '../img/goldenplaceholder (2).png'
import '../css/override.css'
const fetch = require("node-fetch")
var TourneyUsersWithValues = []

// make useFetch into regular function so you can loop through it


export function App({urls}) {
  const [currentPosts,setCurrentPosts] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const postsPerPage = 8
  const [CompiledDataToBeMerged, setCompiledDataToBeMerged] = useState([])
  const [FinalLeaderboard, setFinalLeaderboard] = useState([])
  const users = useFetch(urls[0])
  const secondusers = useFetch(urls[1])
  const listofAllTourneys = [users,secondusers]


  const lastIndexOfPage = currentPage * postsPerPage
  const firstIndexofPage = lastIndexOfPage - postsPerPage
  const fullIndexes = []

  for (let i = firstIndexofPage; i <= lastIndexOfPage; i++) {
    fullIndexes.push(i)
  }

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
    TourneyUsersWithValues = []
  })

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
    {currentPosts.map((Person,index) => {
      return <Individualperson {...Person} index={fullIndexes[index]} />
    })}
    <Pagination postsPerPage={postsPerPage} totalPosts={FinalLeaderboard.length} paginate={paginate}/>

      {users.length > 0 && secondusers.length > 0 && listofAllTourneys.map((tourney) => {
        return (
        <Tourney tourney={tourney} setCompiledDataToBeMerged={setCompiledDataToBeMerged}/>
      )})}
      
      </>
  );
}

// u dont need to pass all the shit as children and then back from children to parent, you can just do all the mapping in parent
// find way to make labelvalue fire once removelabel is done use conditional useEffect put dependency as the thing that changes


export const Tourney = ({tourney,setCompiledDataToBeMerged}) => {
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

export const IndividualPlayerInfo = ({label,position,user,setCompiledDataToBeMerged}) => {
  if (position === 4) {
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
    </div>
  )

}

export const Individualperson = ({name,value,index}) => {
  return (
    <div className='title-banner text-center'>
    <img className="golden" src={GoldenDiv}/>
    <h1 className="display-1 inside-Golden index-Golden">{index+1}.</h1>
    <h1 className="display-1 inside-Golden text-Golden">{name}</h1>
    <h1 className="display-1 inside-Golden" id="value-Golden">{value}</h1>
    </div>
  )

}





export default App;
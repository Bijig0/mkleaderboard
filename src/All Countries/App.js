import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ useEffect,useState } from 'react'
import Fetch from '../fetch'
import useParse from '../parse'
import Pagination from '../pagination'
import GoldenDiv from '../img/goldenplaceholder (2).png'
import '../css/override.css'
import SearchFilter from '../Components/SearchFilter';
import {PosNameVal} from '../Components/Navbar'
var TourneyUsersWithValues = []

// make useFetch into regular function so you can loop through it


export function App({urls}) {
  const [currentPosts,setCurrentPosts] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const postsPerPage = 8
  const [CompiledDataToBeMerged, setCompiledDataToBeMerged] = useState([])
  const [FinalLeaderboard, setFinalLeaderboard] = useState([])
  const users = Fetch(urls[0])
  const secondusers = Fetch(urls[1])
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
  },[urls])

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
    <PosNameVal/>
    {currentPosts.map((Person,index) => {
      return (
      <>
        <Individualperson {...Person} index={fullIndexes[index]} />
        <hr></hr>
      </>
      )

    })}
    <Pagination postsPerPage={postsPerPage} totalPosts={FinalLeaderboard.length} paginate={paginate}/>

      {users.length > 0 && secondusers.length > 0 && listofAllTourneys.map((tourney) => {
        return (
          tourney.map((user) => (
            <IndividualPlayerInfo {...user} setCompiledDataToBeMerged={setCompiledDataToBeMerged}/>
          ))
      )})}
      
      </>
  );
}

// u dont need to pass all the shit as children and then back from children to parent, you can just do all the mapping in parent
// find way to make labelvalue fire once removelabel is done use conditional useEffect put dependency as the thing that changes

export const IndividualPlayerInfo = ({label,position,user,setCompiledDataToBeMerged}) => {
  if (position === 4) {
    label = '4'
  }
  const value = useParse(label)
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
      <div className='row bg-light d-flex justify-content-center'>
        <div className="col mx-sm-3">
          <h1 className='text-sm-center'>{index+1}.</h1>
        </div>
        <div className="col">
          <h1 className='text-sm-center'>{name}</h1>
        </div>
        <div className="col">
          {windowSize > 885? <h1 className='text-center'>{value}</h1>: <h1 className='text-end'>{value}</h1>}
        </div>
      </div>
  )

}





export default App;
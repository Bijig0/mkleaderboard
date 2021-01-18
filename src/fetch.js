// const arr = [ { 'name': 'P1', 'value': 150 }, { 'name': 'P1', 'value': 150 }, { 'name': 'P2', 'value': 200 }, { 'name': 'P3', 'value': 450 } ];

// const res = Array.from(arr.reduce(
//   (m, {user.nickname, value}) => m.set(user.nickname, (m.get(user.nickname) || 0) + value), new Map
// ), ([user.nickname, value]) => ({user.nickname, value}));
// console.log(res);


import {useState,useEffect} from 'react'

const useFetch = (url) => {
    const [users,setUsers] = useState([])

  const getUsers = async (url) => {
      const response = await fetch(url)
      console.log(response);
      const parsed = await response.json()
      const ranking = await parsed.ranking
      setUsers(ranking)
  }

  useEffect(() => {
    getUsers(url)
  }, [])
  return users
}

export default useFetch


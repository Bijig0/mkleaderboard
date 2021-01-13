import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql, useQuery } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import{ useEffect,useState } from 'react'
const fetch = require("node-fetch")



const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

  const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

  function ExchangeRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  }


function App() {
  const [users,setUsers] = useState([])
  const [label,setLabel] = useState("")
  const [name,setName] = useState("")
  const getUsers = async () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.eslgaming.com/play/v1/leagues/217909/ranking?limit=0&offset=0' 
    const response = await fetch(url)
    const parsed = await response.json()
    const ranking = await parsed.ranking
    setUsers(ranking)
  }
  useEffect(() => {
    getUsers()
  }, [])
  
  return (
    <div>
      {users.map((user) => {
        return (
          <>
          <h1>{user.position}</h1>
          <h1>{user.user.nickname}</h1>
          </>
        )
      })}
    </div>

  );
}



export default App;

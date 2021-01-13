const { ApolloServer, gql } = require("apollo-server");
const fetch = require("node-fetch")

const typeDefs = gql`
type Query {
      ranking:[Ranking]
}
type User {
    nickname: String
}
type Ranking {
    position: Int
    label: String
    user: User
}
`;



const resolvers ={
  Query: {
      ranking: async () => {
          const response = await fetch('https://api.eslgaming.com/play/v1/leagues/217909/ranking?limit=0&offset=0')
          const parsed = await response.json()
          const ranking = await parsed.ranking
          return ranking
      }
  }
}

const server = new ApolloServer({typeDefs,resolvers})
server.listen().then(({ url }) => console.log(`server started at ${url}`));
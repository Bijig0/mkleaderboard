const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
type Query {
    Placeholder:String
},
input UserInfo {
    username:String,
    password:String
}
  type Errors {
      examples: String
},
type User {
    name: String,
    Age: Int
},
  type Mutation {
      errors: [Errors],
      user(userinfo:UserInfo):[User]
  }
`;



const resolvers ={
  Mutation: {
      errors: () => (
          [
              {
                  examples:'404'
              },
              {
                  examples:'Error'
              }
          ]
      ),
      user: () => (
          [
              {
                  name:"Jack",
                  Age:50
              },
              {
                  name:'John',
                  Age:30
              }
          ]
      )
  }
}

const server = new ApolloServer({typeDefs,resolvers})
server.listen().then(({ url }) => console.log(`server started at ${url}`));
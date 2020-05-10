const { GraphQLServer,  } = require("graphql-yoga")

const Mutations = require("../Resolvers/Mutations")
const Query = require("../Resolvers/Query")

const resolvers = {
    Mutations,
    Query
}

const server= new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers
})

server.start(() => console.log(`Server is running on http://localhost:4000`))


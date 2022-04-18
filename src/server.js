import { ApolloServer } from 'apollo-server';
import database from './db/models';

function startServer({ typeDefs, resolvers }) {
    const server = new ApolloServer({
        typeDefs, resolvers, context: ({ req }) => ({
            database,
            req
        })
    });
    server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`))}

export default startServer;

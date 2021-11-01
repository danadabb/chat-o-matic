// const { GraphQLServer } = require('graphql-yoga');
import {GraphQLServer} from 'graphql-yoga'
// const { Message } = require('./types')
import { Message } from './types'

const messages:Array<Message> =[];

const typeDefs = `
    type Message {
        id: ID!
        user: String!
        content: String!
    }

    type Query {
        messages: [Message!]
    }

    type Mutation {
        postMessage(user: String!, content: String!): ID!
    }
`

const resolvers = {
    Query: {
        messages: () => messages,
    },
    Mutation: {
        postMessage: (_ : any, input: { user: string, content: string }) => {
            const id = messages.length;
            messages.push({
                id,
                user: input.user,
                content: input.content
            });
            return id;
        }
    }
}

const server = new GraphQLServer({typeDefs, resolvers});

server.start(({port}) => {
    console.log(`Server on http://localhost:${port}/`)
})
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { GraphQLServer } = require('graphql-yoga');
var graphql_yoga_1 = require("graphql-yoga");
var messages = [];
var typeDefs = "\n    type Message {\n        id: ID!\n        user: String!\n        content: String!\n    }\n\n    type Query {\n        messages: [Message!]\n    }\n\n    type Mutation {\n        postMessage(user: String!, content: String!): ID!\n    }\n";
var resolvers = {
    Query: {
        messages: function () { return messages; },
    },
    Mutation: {
        postMessage: function (_, input) {
            var id = messages.length;
            messages.push({
                id: id,
                user: input.user,
                content: input.content
            });
            return id;
        }
    }
};
var server = new graphql_yoga_1.GraphQLServer({ typeDefs: typeDefs, resolvers: resolvers });
server.start(function (_a) {
    var port = _a.port;
    console.log("Server on http://localhost:" + port + "/");
});

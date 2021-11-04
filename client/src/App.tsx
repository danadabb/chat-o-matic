import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Chat from './components/Chat';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const App = (): JSX.Element => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);

export default App;

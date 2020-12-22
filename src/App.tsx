import React from 'react';
import './App.css';
import { initApolloClient } from './util/apollo-client';
// import { ApolloProvider } from 'react-apollo';
import Demo from './demo';


const myEndpoint = 'https://mnakrqgp7b.execute-api.ap-southeast-1.amazonaws.com/dev/internal/graphql';


console.log('Set apollo client');
const client = initApolloClient({
  region: 'ap-southeast-1',
  uri: myEndpoint,
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID!,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY!,
  sessionToken:  process.env.REACT_APP_SESSION_TOKEN!,
});

console.log('client',client)
console.log('session', process.env.REACT_APP_SESSION_TOKEN)

const App: React.FC = () => (
  <div className='App' style={{ height: '100vh', width: '100vw' }}>
    <Demo apollo={client} />
  </div>
);

// const WithProvider: React.FC = () => (
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider> 
// );

export default App;

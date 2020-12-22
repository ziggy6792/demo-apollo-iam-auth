import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

import { ApolloClient } from 'apollo-client';

 const HELLO = gql`
  query hello {
    hello
  }
`;



const Demo:React.FC = () => {
  const { loading, data, error } = useQuery(HELLO);

  if (error) {
    console.log('error', error);
  }

  return (
    <div>
      {loading && <div>loading</div>}
      {!loading && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default Demo;

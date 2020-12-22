import React, { useEffect } from 'react';
// import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

import { ApolloClient } from 'apollo-client';

 const HELLO = gql`
  query hello {
    hello
  }
`;

interface IDemoProps {
  apollo: ApolloClient<any>;
}

const Demo:React.FC<IDemoProps> = ({apollo}) => {
  // const { loading, data, error } = useQuery(HELLO);




  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = apollo.query({query:HELLO})
      // ...
    }
    fetchData();
  }, []); 

  // if (error) {
  //   console.log('error', error);
  // }

  return (
    <div>hello</div>
    // <div>
    //   {loading && <div>loading</div>}
    //   {!loading && <div>{JSON.stringify(data)}</div>}
    // </div>
  );
};

export default Demo;

/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-mutable-exports */
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

import axios from 'axios';
import { aws4Interceptor } from 'aws4-axios';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Don't install the types for some reasone it breaks things
import { buildAxiosFetch } from '@lifeomic/axios-fetch';

interface IConnection {
  uri: string;
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken: string;
}

export const initApolloClient = (connection: IConnection): ApolloClient<any> => {
  const interceptor = aws4Interceptor(
    {
      region: connection.region,
      service: 'execute-api',
    },
    {
      accessKeyId: connection.accessKeyId,
      secretAccessKey: connection.secretAccessKey,
      sessionToken: connection.sessionToken,
    }
  );
  axios.interceptors.request.use(interceptor);

  console.log('Set apollo client');
  return new ApolloClient({
    link: createHttpLink({
      uri: connection.uri,
      fetch: buildAxiosFetch(axios) as any,
    }),
    cache: new InMemoryCache(),
  });
};

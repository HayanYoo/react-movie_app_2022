import React from 'react';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import {ApolloProvider} from "@apollo/react-hooks";
import client from "./graphql/apollo";


ReactDOMClient
    .createRoot(document.getElementById('root'))
    .render(
        <ApolloProvider client={client}>
        <App />
        </ApolloProvider>
    );


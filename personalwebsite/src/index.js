import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';


//
import { ApolloProvider} from "react-apollo"
import { ApolloClient} from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache} from "apollo-cache-inmemory"



const httpLink = createHttpLink({
    uri:"https://us1.prisma.sh/david-979c00/Prisma/dev"
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);


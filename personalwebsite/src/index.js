import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';

//apollo imports
// import { ApolloProvider } from "react-apollo"
// import { ApolloClient } from "apollo-client"
// import { createHttpLink } from "apollo-link-http"
// import { InMemoryCache } from "apollo-cache-inmemory"

//create link
// const httpLink = createHttpLink({
//     uri: "https://eu1.prisma.sh/david-979c00/Prisma/dev"
// })


// //create new client and attack link and cache
// const client = new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache()
// })


ReactDOM.render(

  <BrowserRouter>
    <App /> 
  </BrowserRouter>,

  document.getElementById('root')
);



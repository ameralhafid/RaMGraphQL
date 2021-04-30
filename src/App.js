import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "@apollo/react-hooks";
import { CharactersContainer} from './containers/CharactersContainer';
import { EpisodeContainer} from './containers/EpisodeContainer';
import { useQuery } from '@apollo/react-hooks';
//import {GET_CHARACTERS} from './graphql/get-characters';
import gql from 'graphql-tag';

const GET_CHARACTERS = gql`

{characters{results{
  id
  name
  status
  species
  type
  gender
  origin{
    name
  }
  location{
    name
  }
  image
}}}`

const GET_EPISODE = gql`
{episodes{
  results{
    id
  name
  air_date
  episode
  }}}
`



function App() {
  const { data} = useQuery(GET_CHARACTERS);
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql'
});

  return (
   <React.Fragment>
     <p> I'm Rick and Morphy fan! </p>
    <ApolloProvider client={client}>
    <main>
    <CharactersContainer/>
    <EpisodeContainer/>
    </main>
    </ApolloProvider>
   </React.Fragment>
  );

}

/*
ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>,
   document.getElementById('root'));
*/
export default App;

import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "@apollo/react-hooks";
import { CharactersContainer} from './containers/CharactersContainer';
import { EpisodeContainer} from './containers/EpisodeContainer';
import {Route, BrowserRouter as Router} from "react-router-dom";
import {Switch} from "react-router";
import {CharacterDetailContainer} from "./containers/CharacterDetailContainer";
import Navbar from "./theme/Navbar";
import {EpisodeDetailContainer} from "./containers/EpisodeDetailContainer";

function App() {
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql'
});

  return (
  <ApolloProvider client={client}>
  <div className="header">
     <div className="logo-box">
            <img scr="img/Rick_and_Morty.png" alt="Logo" className="logo">
</img>
        </div>
  <div className="text-box">
    <h1 className="heading-primary">
        <span className="heading-primary-main">Rick and Morty API</span>
       </h1>
       <div className="sidebar">
       <a href="/" className="btn btn-white">Home</a>
       <a href="/characters" className="btn btn-white">Characters</a>
       <a href="/episode" className="btn btn-white">Episodes</a>
       </div>
    </div>
    </div>
      <Router>
          <Navbar/>
      <Switch>
          <Route path="/episode" component={EpisodeContainer}></Route>
          <Route path="/characters" component={CharactersContainer}></Route>
          <Route path={`/character/:id`}
                 component={CharacterDetailContainer}/>
          <Route path={`/episode/:id`}
                 component={EpisodeDetailContainer}/>
      </Switch>
      </Router>

    <main>

        <div className="footer">
            <a href="/" className="footer-copyright">SODEFA</a>

        </div>
   <p> Coding-Challenge Frontend</p>
      </main>
    </ApolloProvider>

  );

}

/*
ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>,
   document.getElementById('root'));
*/
export default App;

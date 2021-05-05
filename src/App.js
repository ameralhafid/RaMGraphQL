import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "@apollo/react-hooks";
import { CharactersContainer} from './containers/CharactersContainer';
import { EpisodeContainer} from './containers/EpisodeContainer';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import {Switch} from "react-router";
import  Button from '@material-ui/core/Button';
import {CharacterDetailContainer, EpisodeDetailContainer} from "./containers/CharacterDetailContainer";




function App() {
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql'
});

  return (
  <React.Fragment>

      <Router>
          <Button variant="contained" color="primary" disableElevation>

          <Link exact to="/episode">episodes</Link>
      </Button>
          <Button variant="contained" color="secondary" disableElevation>
          <Link exact to="/characters">Characters</Link>
          </Button>


      <Switch>
          <Route exact path="/episode" component={EpisodeContainer}></Route>
          <Route exact path="/characters" component={CharactersContainer}></Route>
          <Route exact path={`/character/:id`}
                 component={CharacterDetailContainer}/>

          <Route exact path={`/episode/:id`}
                 component={EpisodeDetailContainer}/>
      </Switch>
      </Router>
    <ApolloProvider client={client}>
    <main>

        <div className="header">
            <a href="#default" className="logo">SODEFA</a>

        </div>
   <p> Coding-Challenge Frontend</p>
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

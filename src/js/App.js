// Dependencies
import React from 'react';
import {BrowserRouter as Browser, Route, Switch} from 'react-router-dom';

// Styles
import GlobalStyle from './styles/GlobalStyle.style';

// Pages
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokemonView from './pages/PokemonView';
import MyTeam from './pages/MyTeam';
import Error from './pages/Error';


const App = () => {
  return (
      <Browser>
        <Switch>
          <Route exact path='/pokedex' component={Home} />
          <Route exact path='/all-pokemon' component={Pokedex} />
          <Route exact path='/pokemon/:name' component={PokemonView} />
          <Route exact path='/my-team' component={MyTeam} />
          <Route component={Error} />
        </Switch>
        <GlobalStyle />
      </Browser>
  );
};
export default App;
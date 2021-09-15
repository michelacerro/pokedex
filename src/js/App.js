// Dependencies
import React from 'react';
import {BrowserRouter as Browser, Route, Switch} from 'react-router-dom';

// Styles
import GlobalStyle from './styles/GlobalStyle.style';

// Pages
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokemonCard from './pages/PokemonCard';
import MyTeam from './pages/MyTeam';
import Error from './pages/Error';


const App = () => {
  return (
      <Browser>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pokedex' component={Pokedex} />
          <Route exact path='/pokemon/:name' component={PokemonCard} />
          <Route exact path='/my-team' component={MyTeam} />
          <Route component={Error} />
        </Switch>
        <GlobalStyle />
      </Browser>
  );
};
export default App;
import "./App.css";
import Home from "./components/Home";
import Scoreboard from "./components/Scoreboard";
import Details from "./components/Details";
import { Switch, Route, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ paddingRight: 20 }}>
        <NavLink to='/'>Scoreboard</NavLink>
      </div>
      <div style={{ paddingRight: 20 }}>
        <NavLink to='/pokemons'>See some Pokemons</NavLink>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <Switch>
          <Route path='/pokemons' component={Home} />
          <Route path='/details/:pokemonId' component={Details} />
          <Route path='/' component={Scoreboard} />
        </Switch>
      </header>
    </div>
  );
}

export default App;

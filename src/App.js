import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import SearchForm from './components/searchFrom'
import Search from './containers/Search'

function App() {
  const [isSearch, setSearch] = useState(false)

  return (
    <div className="App">
      <Router >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand" href="#">Navbar</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/" onClick={() => setSearch(false)} >Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search" onClick={() => setSearch(true)} >Search</Link>
              </li>
            </ul>

            {
              isSearch ? (<SearchForm />) : ''
            }


          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

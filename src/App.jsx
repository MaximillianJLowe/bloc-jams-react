import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Nav, NavItem, Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
        </div>
      </Router>
      
          <header className="Header"/>





  <h1 className="banner"> Bloc Jams </h1>

      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (


      <Router>
        <div>
          <Navbar />
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album/:slug" component={Album} />
        </div>
      </Router>
      










    );
  }
}
export default App;

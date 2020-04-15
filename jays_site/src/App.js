import React, { Component } from 'react';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';




import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
            <Switch>
            <Route path="/work" exact render={ (props) => { return <Home />} } />
            <Route path="/:pageID" exact render={ (props) => { return <Home homeId={props.match.params.pageID} />} } />
            <Route exact path="/" render={() =><Redirect to='/work'/>} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

                 
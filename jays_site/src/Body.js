import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';
//import ProjectMain from './ProjectMain.js';
import HomeGallery from './HomeGallery.js';
import About from './About.js';
import Contact from './Contact.js';

export default class Body extends React.Component {
  /*
  need to grab the images and copy content
  from props,then pass them as props down to HomeGallery component
  */
    render() {
        return (
            <div className="body">
                <Router>
                    <Switch>
                    <Route path="/home" exact component={HomeGallery} />
                    <Route path="/work" exact component={HomeGallery} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route exact path="/" render={() =><Redirect to='/home'/>} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

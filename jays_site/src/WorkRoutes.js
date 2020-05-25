import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Work2 from "./Work2";
import ProjectContainer from "./ProjectContainer.js";
import About1 from "./About1";
import Contact1 from "./Contact1";

export default class WorkRoutes extends React.Component {

    render() {
        return (
            <div className="content">
                <Router>
                    <Switch>
                    <Route exact path="/" render={() =><Redirect to='/work'/>}/>
                    <Route path="/work" exact render={ () => { return <Work2 menuPage={this.props.menuPage} rawData={this.props.rawData} loadMore={this.props.loadMore} loadMoreHandler={this.props.loadMoreHandler}/> }} />
                    <Route path="/about" component={About1}/>
                    <Route path="/contact" component={Contact1}/>
                    <Route path="/work/:projectID?/:slideID?" exact render={ (props) => { return <ProjectContainer activeObj={this.props.activeObj} rawData={this.props.rawData} projectId={props.match.params.projectID} slideId={props.match.params.slideID} changeState={this.props.changeState} />} } />
                    </Switch>
                </Router>
            </div>
        );
    }
}

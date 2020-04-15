import React from 'react';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';

export default class Home extends React.Component {
    state = {
        targetId: "",
    }
componentDidMount () {
    //const targetId = this.props.homeId;
    if (this.props.homeId === undefined) {
        this.setState({
           targetId: 'work',
        })
    } 
    else if (this.props.homeId === "about") {
        this.setState({
            targetId: 'about',
         })
    } 
    else if (this.props.homeId === "contact") {
        this.setState({
            targetId: 'contact',
         })
    }
}


  render() {
    console.log(this.state.targetId);

    return (
      <div className="home">
          <Header id={this.state.targetId}/>
          <Body id={this.state.targetId}/>
          <Footer />
      </div>
    );
  }
}


                 
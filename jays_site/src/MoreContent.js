import React from "react";
import {Link} from "react-router-dom";
import CardThird from "./CardThird";
import CardTwoThirds from "./CardTwoThirds";
import CardFull from "./CardFull";
import CardHalf from "./CardHalf";

export default class MoreContent extends React.Component {

    render() {

        return (
            <div className="loadMoreContent">
                <div className="cardI">
                    <Link to="/work/sittris/1"><CardFull rawDataImg={this.props.rawData[0].image}/></Link>
                </div>
                <div className="cardJ">
                    <Link to="/work/cuisipro/1"><CardHalf rawDataImg={this.props.rawData[1].image}/></Link>
                    <Link to="/work/revo/1"><CardHalf rawDataImg={this.props.rawData[2].image}/></Link>
                </div>
                <div className="cardK">
                    <Link to="/work/roka/1"><CardTwoThirds rawDataImg={this.props.rawData[3].image}/></Link>
                    <Link to="/work/xdclaymore/1"><CardThird rawDataImg={this.props.rawData[4].image}/></Link>
                </div>
                <div className="cardL">
                    <Link to="/work/bangerz/1"><CardFull rawDataImg={this.props.rawData[5].image}/></Link>
                </div>
            </div>
        );
    }
}

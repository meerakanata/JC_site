import React from "react";
import {Link} from "react-router-dom";
import MoreContent from "./MoreContent";
import CardThird from "./CardThird";
import CardTwoThirds from "./CardTwoThirds";
import CardFull from "./CardFull";
// var rawData = require('./RawData.js');


export default class Work1 extends React.Component {

    componentDidMount(){
        console.log(this.props.rawData);
    }

    loadMore = (e) => {
        e.preventDefault();
        const buttonClicked = true;
        this.props.loadMoreHandler(buttonClicked);
    }

    moreProjects = () => {
        
        const loadMore = this.props.loadMore;
        if(loadMore === true){
            return <MoreContent />
        }
    }

    render() {
        
        return (
            <div className="homeGallery">
                <div className="homeGallery__Main">
                    <div className="homeGallery__Main-Card-a">
                        <Link to="/work/sittris/1"><CardFull rawDataImg={this.props.rawData[0].image}/></Link>
                    </div>
                    <div className="homeGallery__Main-Card-d">
                        <Link to="/work/cuisipro/1"><CardThird rawDataImg={this.props.rawData[1].image}/></Link>
                        <Link to="/work/revo/1"><CardTwoThirds rawDataImg={this.props.rawData[2].image}/></Link>
                    </div>
                    <div className="homeGallery__Main-Card-c">
                        <Link to="/work/roka/1"><CardTwoThirds rawDataImg={this.props.rawData[3].image}/></Link>
                        <Link to="/work/xdclaymore/1"><CardThird rawDataImg={this.props.rawData[4].image}/></Link>
                    </div>
                    <div className="homeGallery__Main-Card-a">
                        <Link to="/work/bangerz/1"><CardFull rawDataImg={this.props.rawData[5].image}/></Link>
                    </div>
                    <div className="homeGallery__Main-Card-d">
                        <Link to="/work/gs/1"><CardThird rawDataImg={this.props.rawData[6].image}/></Link>
                        <Link to="/work/switch-vision/1"><CardTwoThirds rawDataImg={this.props.rawData[7].image}/></Link>
                    </div>
                    <div className="homeGallery__Main-Card-a">
                        <Link to="/work/+1/1"><CardFull rawDataImg={this.props.rawData[8].image}/></Link>
                    </div>
                    <div className="homeGallery__Main-Card-d">
                        <Link to="/work/thermos/1"><CardThird rawDataImg={this.props.rawData[9].image}/></Link>
                        <Link to="/work/foldinglawnchair/1"><CardTwoThirds rawDataImg={this.props.rawData[10].image}/></Link>
                    </div>
                    <div className="homeGallery__Main-Card-c">
                        <Link to="/work/sittris/1"><CardTwoThirds rawDataImg={this.props.rawData[0].image}/></Link>
                        <Link to="/work/sittris/1"><CardThird rawDataImg={this.props.rawData[0].image}/></Link>
                    </div>
                </div>
                <div>
                    {this.moreProjects()}
                </div>
                <div className="loadMoreButton">
                    <div className="loadMoreButton__text">Load more products</div>
                    <button className="loadMoreButton__button" onClick={this.loadMore}>LOAD MORE</button>
                </div>
            </div>
        );
    }
}

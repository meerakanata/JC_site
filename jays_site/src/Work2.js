import React from "react";
import {Link} from "react-router-dom";
import MoreContent from "./MoreContent";
import CardThird from "./CardThird";
import CardTwoThirds from "./CardTwoThirds";
import CardFull from "./CardFull";
import CardHalf from "./CardHalf";
// var rawData = require('./RawData.js');


export default class Work2 extends React.Component {

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
            return <MoreContent rawData={this.props.rawData}/>
        }
        else{
            return <div className="loadMoreButton"><div className="loadMoreButton__text">Load more products</div><div className="loadMoreButton__button" onClick={this.loadMore}>+</div></div>
        }
    }


    render() {
        
        return (
            <div className="homeGallery">
                <div className="homeGallery__Main">
                    <div className="homeGallery__MainCard-a">
                        <Link to="/work/sittris/1"><CardFull rawDataImg={this.props.rawData[0].image}/></Link>
                    </div>
                    <div className="homeGallery__MainCard-b">
                        <Link to="/work/cuisipro/1"><CardTwoThirds rawDataImg={this.props.rawData[1].image}/></Link>
                        <Link to="/work/revo/1"><CardThird rawDataImg={this.props.rawData[2].image}/></Link>
                    </div>
                    <div className="homeGallery__MainCard-c">
                        <Link to="/work/roka/1"><CardHalf rawDataImg={this.props.rawData[3].image}/></Link>
                        <Link to="/work/xdclaymore/1"><CardHalf rawDataImg={this.props.rawData[4].image}/></Link>
                    </div>
                    <div className="homeGallery__MainCard-d">
                        <Link to="/work/bangerz/1"><CardFull rawDataImg={this.props.rawData[5].image}/></Link>
                    </div>
                    <div className="homeGallery__MainCard-e">
                        <Link to="/work/gs/1"><CardHalf rawDataImg={this.props.rawData[6].image}/></Link>
                        <Link to="/work/switch-vision/1"><CardHalf rawDataImg={this.props.rawData[7].image}/></Link>
                    </div>
                    <div className="homeGallery__MainCard-f">
                        <Link to="/work/+1/1"><CardFull rawDataImg={this.props.rawData[8].image}/></Link>
                    </div>
                    <div className="homeGallery__MainCard-g">
                        <Link to="/work/thermos/1"><CardThird rawDataImg={this.props.rawData[9].image}/></Link>
                        <Link to="/work/foldinglawnchair/1"><CardTwoThirds rawDataImg={this.props.rawData[10].image}/></Link>
                    </div>
                    <div className="homeGallery__MainCard-h">
                        <Link to="/work/cuisipro/1"><CardTwoThirds rawDataImg={this.props.rawData[1].image}/></Link>
                        <Link to="/work/revo/1"><CardThird rawDataImg={this.props.rawData[2].image}/></Link></div>
                </div>
                <div className="homeGallery__More">
                    {this.moreProjects()}
                </div>
            </div>
        );
    }
}


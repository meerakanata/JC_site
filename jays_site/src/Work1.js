import React from "react";
import {Link} from "react-router-dom";
import MoreContent from "./MoreContent";
var rawData = require('./RawData.js');


export default class Work1 extends React.Component {


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
                    <div className="column1">
                        <div className="column1__A">
                        <Link to="/work/sittris/1"><img className="" src={rawData[0].image} alt="baseball players"/></Link>
                        </div>
                        <div className="column1__B">
                        <Link to="/work/cuisipro/1"><img className="" src={rawData[1].image} alt="baseball players"/></Link>
                        </div>
                        <div className="column1__C">
                        <Link to="/work/revo/1"><img className="" src={rawData[2].image} alt="baseball players"/></Link>
                        </div>
                    </div>
                    <div className="column2">
                        <div className="column2__D">
                        <Link to="/work/roka/1"><img className="" src={rawData[3].image} alt="baseball players"/></Link>
                        </div>
                        <div className="column2__E">
                            <div className="column2__E-left">
                                <div className="leftTop">
                                <Link to="/work/xdclaymore/1"><img className="" src={rawData[4].image} alt="baseball players"/></Link>
                                </div>
                                <div className="leftBottom">
                                <Link to="/work/bangerz/1"><img className="" src={rawData[5].image} alt="baseball players"/></Link>
                                </div>
                            </div>
                            <div className="column2__E-right">
                                <div className="rightTop">
                                <Link to="/work/roka/1"><img className="" src={rawData[6].image} alt="baseball players"/></Link>
                                </div>
                                <div className="rightBottom">
                                <Link to="/work/gs/1"><img className="" src={rawData[7].image} alt="baseball players"/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="column2__F">
                            <div className="column2__F-loadMore">Load more products</div>
                            <button className="column2__F-downArrow" onClick={this.loadMore}>LOAD MORE</button>
                        </div>
                    </div>
                    <div className="column3">
                        <div className="column3__G">
                        <Link to="/work/cuisipro/1"><img className="" src={rawData[8].image} alt="baseball players"/></Link>
                        </div>
                        <div className="column3__H">
                        <Link to="/work/revo/1"><img className="" src={rawData[9].image} alt="baseball players"/></Link>
                        </div>
                        <div className="column3__I">
                        <Link to="/work/gs/1"><img className="" src={rawData[10].image} alt="baseball players"/></Link>
                        </div>
                    </div>
                </div>
                <div>
                    {this.moreProjects()}
                </div>
            </div>
        );
    }
}

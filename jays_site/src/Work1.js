import React from "react";
import {Link} from "react-router-dom";

export default class Work1 extends React.Component {
    state = {
        imageTest: "../stock_PlaceholderImage.png",
    }
    render() {

        return (
            <div className="homeGallery">

                <div className="column1">
                    <div className="column1__A">
                    <Link to="/work/sittris/1"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                    <div className="column1__B">
                    <Link to="/work/cuisipro/1"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                    <div className="column1__C">
                    <Link to="/work/revo/1"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                </div>
                <div className="column2">
                    <div className="column2__D">
                    <Link to="/work/roka/1"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                    <div className="column2__E">
                        <div className="column2__E-left">
                            <div className="leftTop">
                            <Link to="/work/xdclaymore/1"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                            </div>
                            <div className="leftBottom">
                            <Link to="/work/bangerz/1"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                            </div>
                        </div>
                        <div className="column2__E-right">
                            <div className="rightTop">
                            <Link to="/work/roka/1"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                            </div>
                            <div className="rightBottom">
                            <Link to="/work/gs/1"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="column2__F">
                        <div className="column2__F-loadMore">Load more products</div>
                        <div className="column2__F-downArrow">[down arrow]</div>
                    </div>
                </div>
                <div className="column3">
                    <div className="column3__G">
                    <Link to="/work/cuisipro/1"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                    <div className="column3__H">
                    <Link to="/work/revo/1"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                    <div className="column3__I">
                    <Link to="/work/gs/1"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                </div>
            </div>
        );
    }
}

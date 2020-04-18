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
                    <div className="blockA">
                    <Link to="/work/sittris"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                    <div className="blockB">
                    <Link to="/work/cuisipro"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                    <div className="blockC">
                    <Link to="/work/revo"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                </div>
                <div className="column2">
                    <div className="blockD">
                    <Link to="/work/roka"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                    <div className="blockE">
                        <div className="blockE_left">
                            <div className="blockE_leftTop">
                            <Link to="/work/xdclaymore"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                            </div>
                            <div className="blockE_leftBottom">
                            <Link to="/work/bangerz"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                            </div>
                        </div>
                        <div className="blockE_right">
                            <div className="blockE_rightTop">
                            <Link to="/work/roka"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                            </div>
                            <div className="blockE_rightBottom">
                            <Link to="/work/gs"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="blockF">
                        <div className="blockF__loadMore">Load more products</div>
                        <div className="blockF__downArrow">[down arrow]</div>
                    </div>
                </div>
                <div className="column3">
                    <div className="blockG">
                    <Link to="/work/cuisipro"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                    <div className="blockH">
                    <Link to="/work/revo"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                    <div className="blockI">
                    <Link to="/work/gs"><img className="" src={this.state.imageTest} alt="baseball players"/></Link>
                    </div>
                </div>
            </div>
        );
    }
}

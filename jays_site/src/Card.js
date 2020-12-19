import React from 'react';
import {Link} from "react-router-dom";

export default class Card extends React.Component {
    
    displayImages = () => { 
        if(this.props.rawDataImgBtm){
            return (
                <div className="card">
                    <Link to="/work/sittris/1"><img className="" src={this.props.rawDataImgTop} alt="need to add the alt message in the raw data"/></Link>
                    <Link to="/work/sittris/1"><img className="" src={this.props.rawDataImgBtm} alt="need to add the alt message in the raw data"/></Link>
                </div>
            );
        }
        else{
            return (
                <div className="card">
                    <Link to="/work/sittris/1"><img className="" src={this.props.rawDataImgTop} alt="need to add the alt message in the raw data"/></Link>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="individualCardContainer">
                {this.displayImages()}
            </div>
        );
    }
}

                    
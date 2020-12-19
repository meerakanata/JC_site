import React from "react";
import {Link} from "react-router-dom";
import MoreContent from "./MoreContent";
import Card from "./Card";
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
                    <div className="cardContainer">
                            <Card rawDataImgTop={this.props.rawData[0].image}/>
                            <Card rawDataImgTop={this.props.rawData[1].image}/>
                            <Card rawDataImgTop={this.props.rawData[2].image}/>
                            <Card rawDataImgTop={this.props.rawData[3].image}/>
                            <Card rawDataImgTop={this.props.rawData[4].image}/>
                            <Card rawDataImgTop={this.props.rawData[5].image} rawDataImgBtm={this.props.rawData[6].image}/>
                            <Card rawDataImgTop={this.props.rawData[7].image}/>
                            <Card rawDataImgTop={this.props.rawData[8].image} rawDataImgBtm={this.props.rawData[9].image}/>
                            <Card rawDataImgTop={this.props.rawData[10].image} rawDataImgBtm={this.props.rawData[11].image}/>
                            <Card rawDataImgTop={this.props.rawData[12].image}/>
                            <Card rawDataImgTop={this.props.rawData[13].image} rawDataImgBtm={this.props.rawData[14].image}/>
                            <Card rawDataImgTop={this.props.rawData[15].image}/>
                            <Card rawDataImgTop={this.props.rawData[16].image}/>
                            <Card rawDataImgTop={this.props.rawData[17].image}/>
                            <Card rawDataImgTop={this.props.rawData[18].image}/>
                            <Card rawDataImgTop={this.props.rawData[19].image}/>
                            <Card rawDataImgTop={this.props.rawData[20].image} rawDataImgBtm={this.props.rawData[21].image}/>
                            <Card rawDataImgTop={this.props.rawData[22].image}/>
                            <Card rawDataImgTop={this.props.rawData[23].image}/>
                            <Card rawDataImgTop={this.props.rawData[24].image}/>
                            <Card rawDataImgTop={this.props.rawData[25].image}/>
                            <Card rawDataImgTop={this.props.rawData[26].image} rawDataImgBtm={this.props.rawData[27].image}/>
                            <Card rawDataImgTop={this.props.rawData[28].image}/>
                            <Card rawDataImgTop={this.props.rawData[29].image}/>
                    </div>
                    
                </div>
                {/* <div className="homeGallery__More">
                    {this.moreProjects()}
                </div> */}
            </div>
        );
    }
}


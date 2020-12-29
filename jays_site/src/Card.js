import React from 'react';
//import sr from './scrollReveal.js';
// import {Link} from "react-router-dom";


export default class Card extends React.Component {



    // checkBounding = () => {
    //     var boundingArr = [];
    //     boundingArr.push(document.getElementById(1).getBoundingClientRect());
    //     // for(var i=1; i<4; i++){
    //     //     boundingArr.push(document.getElementById(i).getBoundingClientRect());
    //     // }
    //     console.log(boundingArr);
    // }


    // displayImages = () => { 
    //     if(this.props.rawDataImgBtm){
    //         return (
    //             <div className="card">
    //                 <Link to="/work/sittris/1"><img className="" src={this.props.rawDataImgTop} alt="need to add the alt message in the raw data"/></Link>
    //                 <Link to="/work/sittris/1"><img className="" src={this.props.rawDataImgBtm} alt="need to add the alt message in the raw data"/></Link>
                    
    //             </div>
    //         );
    //     }
    //     else{
    //         return (
    //             <div className="card">
    //                 <Link to="/work/sittris/1"><img className="" src={this.props.rawDataImgTop} alt="need to add the alt message in the raw data"/></Link>
    //             </div>
    //         );
    //     }
    // }

    // componentDidMount = () => {
    //     const config = {
    //         duration: 2500,
    //     }
    //     sr.reveal('img', config)
    //   }
    //   componentDidUpdate = () => {
    //     const config = {
    //         duration: 2500,
    //     }
    
    //     sr.reveal('img', config)
    //   }

    render() {

        return (
            // <div className="individualCardContainer">
            <div>
                <img src={this.props.src} alt={this.props.alt} id={this.props.id}/>
            </div>
        );

    }
}



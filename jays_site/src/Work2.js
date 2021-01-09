import React from "react";
import {Link} from "react-router-dom";
import sr from './scrollReveal.js';



export default class Work2 extends React.Component {
    

    displayImagesDesk = () => { 
        const gridImagesArr = this.props.grid_images;
        return gridImagesArr.map((obj) => <span><Link to={"/work/"+obj.projID+"/1"}><img src={obj.image}  key={obj.projNUM} alt={obj.alt} id={obj.id}/></Link></span>);      
    }
    displayImagesMob = () => { 
        const gridImagesArr = this.props.grid_images; 
        const gridImagesTabArr = [...gridImagesArr];
        gridImagesTabArr.splice(5, 1);
        gridImagesTabArr.splice(9,1)
        gridImagesTabArr.splice(11,1)
        gridImagesTabArr.splice(6, 0, gridImagesArr[5]);
        gridImagesTabArr.splice(11, 0, gridImagesArr[10]);
        gridImagesTabArr.splice(14, 0, gridImagesArr[13]);
        return gridImagesTabArr.map((obj) => <img src={obj.image} alt={obj.alt} key={obj.projNUM} id={obj.id}/>);  
    }
    componentDidMount = () => {
        const config = {
            duration: 2500,
            delay: 400,
        }
        sr.reveal('img', config)
      }
    componentDidUpdate = () => {
        const config = {
            duration: 2500,
            delay: 400,
        }
        sr.reveal('img', config)
    }

    render() {
        return (
            <div className="homeGallery">
                <div className="homeGallery__Main">
                    <div className="cardContainerDesk">
                        {this.displayImagesDesk()}
                    </div>
                    <div className="cardContainerMob">
                            {this.displayImagesMob()}
                    </div>
                </div>
            </div>
        );
    }
}



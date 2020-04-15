import React from 'react';

export default class HomeGallery extends React.Component {
    // state = {
    //     imageTest: "https://i.imgur.com/3WPEmCJ.jpeg",
    // }
    render() {

        return (
            <div className="homeGallery">

                <div className="column1">
                    <div className="blockA">
                        {/* <img className="" src={this.state.imageTest}/> */}
                    </div>
                    <div className="blockB">

                    </div>
                    <div className="blockC">

                    </div>
                </div>
                <div className="column2">
                    <div className="blockD">

                    </div>
                    <div className="blockE">
                        <div className="blockE_left">
                            <div className="blockE_leftTop">

                            </div>
                            <div className="blockE_leftBottom">

                            </div>
                        </div>
                        <div className="blockE_right">
                            <div className="blockE_rightTop">

                            </div>
                            <div className="blockE_rightBottom">

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

                    </div>
                    <div className="blockH">

                    </div>
                    <div className="blockI">

                    </div>
                </div>
            </div>
        );
    }
}

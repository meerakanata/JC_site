import React from "react";



export default class About1 extends React.Component {

    render() {

        return (
            <div className="projectContainer">
                <div className="projMain">
                    <div className="projMain__Left">
                        <div className="projMain__Left-Nav">
                        </div>
                        <div className="projMain__Left-Info">
                            <div className="Name">jason clerk</div>
                            <div className="Heading">Toronto, Canada</div>
                            <div className="Description">{this.props.aboutData[0].bioBlurb}</div>
                        </div>
                    </div>
                    <div className="projMain__Image">
                        <img src={this.props.aboutData[0].bioImage} alt="baseball players"/>
                    </div>
                </div>
            </div>
        );
    }
}

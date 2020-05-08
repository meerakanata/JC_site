import React from 'react';

export default class CardThird extends React.Component {

    render() {
        return (
            <div className="cardThird">
                <img className="" src={this.props.rawDataImg} alt="need to add the alt message in the raw data"/>
            </div>
        );
    }
}

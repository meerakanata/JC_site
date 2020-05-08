import React from 'react';

export default class CardFull extends React.Component {

    render() {
        return (
            <div className="cardFull">
                <img className="" src={this.props.rawDataImg} alt="need to add the alt message in the raw data"/>
            </div>
        );
    }
}

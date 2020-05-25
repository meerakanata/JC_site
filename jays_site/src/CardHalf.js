import React from 'react';

export default class CardHalf extends React.Component {

    render() {
        return (
            <div className="cardHalf">
                <img className="" src={this.props.rawDataImg} alt="need to add the alt message in the raw data"/>
            </div>
        );
    }
}

import React from 'react';

class Box extends React.Component {
    render() {
        return(
            <div>
                <h3>{this.props.data.name}</h3>
                <p>I am a Box!</p>
                <p>Total Weight:{this.props.data.total_allowed_weight}</p>
            </div>
        )
    }
}

export default Box;
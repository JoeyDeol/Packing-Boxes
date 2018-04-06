import React from 'react';

class Box extends React.Component {
    render() {
        return(
            <div className='box'>
                <h3>{this.props.data.name}</h3>
                <p>Total Weight:{this.props.data.total_allowed_weight}</p>
            </div>
        )
    }
}

export default Box;
import React from 'react';

class Item extends React.Component {
    render() {
        return(
            <div className='item'>
                <h3>Item: {this.props.data.name}</h3>
                <p>Weight: {this.props.data.weight}</p>
            </div>
        )
    }
}

export default Item;
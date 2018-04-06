import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
    render() {
       return(
        <div>
            <p>I am the Item List</p>
            <Item/>
        </div>
       ) 
    }
}

export default ItemList;
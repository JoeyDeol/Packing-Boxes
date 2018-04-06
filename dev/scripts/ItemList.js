import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
    constructor() {
        super();
        this.state = {
            itemListData: [],
        }
    }
    componentDidMount() {
        const itemsRef = firebase.database().ref('item-list');
        itemsRef.on('value', (snapshot) => {
            const itemData = snapshot.val();
            this.setState({
                itemListData: itemData,
            })
        })
    }
    render() {
       return(
        <div>
            <p>I am the Item List</p>
            {this.state.itemListData.map((item) => {
                return(
                    <Item data={item} key={item.id}/>
                )
            })}
        </div>
       ) 
    }
}

export default ItemList;
import React from 'react';
import Box from './Box';

class BoxList extends React.Component {
    constructor(){
        super();
        this.state = {
            boxListData: [],
        }
    }
    componentDidMount() {
        const boxesRef = firebase.database().ref('box-list');
        boxesRef.on('value', (snapshot) => {
            const boxData = snapshot.val();
            this.setState({
                boxListData: boxData
            })
        })

    }
    render() {
        return(
            <div>
                <h2>Box List</h2>
                {this.state.boxListData.map((box) => {
                   return(
                       <Box data={box} key={box.id} />
                    ) 
                })}
            </div>
        )
    }
}

export default BoxList;
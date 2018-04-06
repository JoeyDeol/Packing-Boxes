import React from 'react';

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
        const dbref = firebase.database().ref('usersOnline');
        dbref.on('value', (snapshot) => {
            const usersData = snapshot.val();
            const usersArray = [];
            usersArray.push(usersData);
            this.setState({
                users: usersArray,
            })
        })
    }

    render(){
        // console.log(this.state.users);
        return(
            <div>
                <p>I am a User</p>
                {/* {this.state.users.map((item) => {
                    console.log(item);
                    return <p></p>
                })} */}
            </div>
        )
    }
}

export default Users
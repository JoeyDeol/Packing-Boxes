import React from 'react';

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: {},
        }
    }
    componentDidMount() {
        const dbref = firebase.database().ref('usersOnline');
        dbref.on('value', (snapshot) => {
            const usersData = snapshot.val();
            this.setState({
                users: usersData,
            })
        })
    }

    render(){
        return(
            <div>
                <h2>Users:</h2>
                {Object.keys(this.state.users).map((user) => {
                    return <p key={user}>{this.state.users[user]}</p>
                })}
            </div>
        )
    }
}

export default Users
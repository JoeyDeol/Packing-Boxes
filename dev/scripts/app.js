import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users';
import ItemList from './ItemList';
import BoxList from './BoxList';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA2lx5Tge-vOK2T0O9QfmlZZ_Hs0OSbjqY",
  authDomain: "packing-page.firebaseapp.com",
  databaseURL: "https://packing-page.firebaseio.com",
  projectId: "packing-page",
  storageBucket: "packing-page.appspot.com",
  messagingSenderId: "1082764197803"
};
firebase.initializeApp(config);

class App extends React.Component {
  componentDidMount() {
    const userListRef = firebase.database().ref('usersOnline');
    const myUserRef = userListRef.push();
    firebase.database().ref('.info/connected')
      .on('value', (snapshot) => {
        if (snapshot.val() === true) {
          myUserRef.onDisconnect().remove();
          // myUserRef.set(prompt('username'));
        }
      }
    );
  }
    render() {
      return (
        <div>
          <h1>Rose Rocket Packing Page</h1>
          <Users />
          <div className="item__list">
            <button>Items</button>
            <ItemList />
          </div>
          <div className="box__list">
            <button>Boxes</button>
            <BoxList />
          </div>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

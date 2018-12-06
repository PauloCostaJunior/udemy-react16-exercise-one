import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
  state = {
    userName: [
      {name:"Paulo"}
    ]
  }

  nameChangedHandler = (e) => {
    this.setState({
      userName: [
        { name: e.target.value }
      ]
    })
  }

  render() {
    return (
      <div className="App">

        <UserInput changed={this.nameChangedHandler} />

        <UserOutput name={this.state.userName[0].name} />

      </div>
    );
  }
}

export default App;

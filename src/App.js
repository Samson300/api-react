import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jokes from './Jokes';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }



  render() {
  return (
    <div className="App">
      <Jokes />
    </div>
  );
}
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Header from './Components/Header';  



class App extends Component {
render() {
return (
    <div className="App">

      <Header/>
      
    </div>
    );
  }
}

export default App;

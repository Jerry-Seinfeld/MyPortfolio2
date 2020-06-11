import React, { Component } from 'react';
import { render } from '@testing-library/react';
  
export default class Header extends Component {
render() {
return (
    <div className="Header">
      
        <ul>
            <li><a href="#banner">Home</a></li>
            <li><a className="active" href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
        </ul>

    </div>
    );
  }
}



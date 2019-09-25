import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <h1>Welcome to Forage!</h1>
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}

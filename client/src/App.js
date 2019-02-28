import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import {mapDispatchUsers} from './reducers/action'

class App extends Component {
  constructor(props){
    super(props);
    this.state={day:"Tuesday"}
    this.props.getUsers()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.name} Learns React<br></br>
            Today is {this.state.day}
          </a>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => {return {state:state}}

export default connect(mapStateToProps,mapDispatchUsers)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';
import {mapDispatchUsers} from '../reducers/action'

class Login extends Component {
  constructor(props){
    super(props);
    this.state={day:"Tuesday"}
    this.props.getUsers()
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
          User Name<input type="text" name="email" required className="form-control"/>
          Password   <input type="Password" name="password"  required  className="form-control"/>
          <br/>
          <div className="alert alert-danger" isOpen={this.state.alert}>{this.state.alert}</div>
          <button className="form-control btn btn-darkblue">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {return {state:state}}

export default connect(mapStateToProps,mapDispatchUsers)(Login);

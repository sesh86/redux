import React,{Component} from 'react';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom';

import {mapDispatchUsers} from '../reducers/action'

class Users extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getUsers();
    // axios('https://jsonplaceholder.typicode.com/users')
    // .then(res=>{console.log(res);this.setState({users:res.data})});
    // console.log(this.props.state)
  }
  getPosts=(uid,user)=>{
      this.props.getPosts(uid,user)
  }
  render(){
    const {state}= this.props;
    console.log(state.posts)
    return (
      <div className="container">
      <table className="table">
        <thead><tr><th>User Id</th><th>Name</th><th>Email</th><th>Phone</th></tr></thead>
        <UserDetails users={state.users} getPosts={this.getPosts}></UserDetails>
      </table>
      {state.posts.length>0?
      <div>
      <h3>Posts of {state.user}</h3>
      <table className="table">
        <thead><tr><th>Post-Id</th><th>Title</th><th>Body</th></tr></thead>
        <UserPosts posts={state.posts}/>
      </table>
      </div>
      :''}
    </div>)
  }
}

const UserDetails =(props)=>{
  console.log(props.users)  
  if(!props.users){
    return '';
  }
  return (<tbody>
      {props.users.map(user => (    
        <tr onClick={()=>props.getPosts(user.id,user.name)} className="hand text-left" key={user.id}><td>{user.id}</td><td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td></tr>
      ))}
      </tbody>);
}

const UserPosts =(props)=>{
    console.log(props.posts)  
    if(!props.posts){
      return '';
    }
    return (<tbody>
        {props.posts.map(post => (    
          <tr className="text-left" key={post.id}><td>{post.id}</td><td>{post.title}</td><td>{post.body}</td></tr>
        ))}
        </tbody>);
  }
const mapStateToProps = (state) => {return {state:state}}



export default connect(mapStateToProps,mapDispatchUsers)(Users);

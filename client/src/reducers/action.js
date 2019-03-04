import axios from 'axios';
// export const getUsers=(res)=>{
//     return {type: 'USERS',name: res};
//   }
  
  
// export const mapDispatchUsers = (dispatch) => {
// return {
//     getUsers: () =>{

//         dispatch(getUsers('uPDATED usER'))
//     }
//     }
    
// }

export const getUsers=(res)=>{
    return {type: 'USERS',name: res};
  }

  export const getPosts=(res,user)=>{
    return {type: 'POSTS',name: res,user:user};
  }  
  
  export const mapDispatchUsers = (dispatch) => {
    return {
      getUsers: () =>{
        const request = axios.get('https://jsonplaceholder.typicode.com/users');
        request.then(function(res){
          dispatch(getUsers(res.data))
        })
      },
      getPosts: (uid,user) =>{
        const request = axios.get('https://jsonplaceholder.typicode.com/posts?userId='+uid);
        request.then(function(res){
          dispatch(getPosts(res.data,user))
        })
      }      
    }
  }

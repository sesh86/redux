export const getUsers=(res)=>{
    return {type: 'USERS',name: res};
  }
  
  
export const mapDispatchUsers = (dispatch) => {
return {
    getUsers: () =>{

        dispatch(getUsers('uPDATED usER'))
    }
    }
}

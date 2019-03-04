const initState = {
    users:[],posts:[],name:'',designation:'',empList:[{name:'adhi',designation:'TL'},{name:'Zuckerburg',designation:'Founder'}],users:[]
  }
  
  const rootReducer = (state = initState, action) => {
    console.log(action.type)
    if(action.type=='USERS')
    {
      return {
        ...state,
        users:action.name
      }     
    }
    else if(action.type=='POSTS')
    {
      console.log(action.name)
      return {
        ...state,
        posts:action.name,
        user:action.user
      }     
    }
    if(!action.name)
      return state
  }
  
  export default rootReducer
  
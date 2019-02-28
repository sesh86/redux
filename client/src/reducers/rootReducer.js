const initState = {
    name:'',designation:'',empList:[{name:'adhi',designation:'TL'},{name:'Zuckerburg',designation:'Founder'}],users:[]
  }
  
  const rootReducer = (state = initState, action) => {
    
    if(action.type='USERS')
    {
      return {
        ...state,
        name:[action.name]
      }     
    }

    if(!action.name)
      return state
  }
  
  export default rootReducer
  
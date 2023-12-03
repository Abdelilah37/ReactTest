const initialState = {
  users: [{
    id: 1
    , name: "John", email: "john@gmail.com"
  }, {
    id: 1
    , name: "John", email: "john@gmail.com"
  }]
}  ;

const reducer=(state=initialState,action)=>{
switch(action.type){
  case "Add_User": return {...state,   users:[...state.users,action.payload] }
}
}
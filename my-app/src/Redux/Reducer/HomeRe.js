const intialstate = {
  list: []
}
export const reducer = function (state = intialstate, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        list: [...state.list, action.payload]
};


    case "delt":
      let user = state.list
      user.splice(action.payload, 1)
      return { ...state, list: [...user]
       };
       case "edit":
         return{
           
         }



    default:
      return state;
  }
};
export default reducer
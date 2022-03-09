export const additem= (list) =>{
    return{
        type:"add",
        payload:list
    }
 }
 export const deleteItem = (id) => {
   return({
       type: "delt",
       payload: id
    })
 }
 export const edititem = (i) =>{
    return{
       type: "edit",
       payload: i
    }
 }
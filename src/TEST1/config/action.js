export const adduser=(user) =>{
  return {type:"Add_User",pylod:user}
}
export const updateuser=(newUser) =>{
  return {type:"Update_User", pylode:newUser}
}
export const deleteuser=(id) =>{
  return {type:"Delete_User",pylod:id}
}
   
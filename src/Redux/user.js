import  {createSlice} from '@reduxjs/toolkit'

export const userslice=createSlice({
    name:'user',
    initialState :{email:'',name:""},
    reducers:{
        login : (state,action)=>{
           
            state.email=action.payload.Email
            state.name=action.payload.Name
        }
    }
})
export const {login}=userslice.actions
export default userslice.reducer
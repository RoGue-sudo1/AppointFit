const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name:"user",
    initialState:{
        users:[{
            firstName:"Harsh",
            userId:"123",
            lastName:"Rathore",
            location:"Jaipur",
            appointment:"today"
        }]
    },
    reducers:{
        addNewUser:(state,action)=>{
            state.users.push(action.payload)
        },

    }
})

export const {addNewUser} = userSlice.actions

export default userSlice.reducer
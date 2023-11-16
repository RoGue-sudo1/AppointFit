const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name:"user",
    initialState:{
        users:[],
        appointmentForm:false
    },
    reducers:{
        addNewUser:(state,action)=>{
            state.users.push(action.payload)
        },
        toggleAppointmentForm:(state)=>{
            state.appointmentForm = !state.appointmentForm
        }
    }
})

export const {addNewUser,toggleAppointmentForm} = userSlice.actions

export default userSlice.reducer
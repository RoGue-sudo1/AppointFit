const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    appointmentForm: false,
  },
  reducers: {
    addNewUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      const indexToDelete = action.payload;
      state.users = state.users.filter(
        ( user,index) => index !== indexToDelete
      );
    },
    editUserDetails:(state,action)=>{
        
    },
    // appointmentEdit:(state,action)=>{
    //   const {index, appointmentIndex } = action.payload;
    //   state.users[index].appointments.filter((appointment,index)=> index !== appointmentIndex)
      
      
    // },
    appointmentEdit: (state, action) => {
      const { index, appointmentIndex } = action.payload;
      
    
      // Check if the user at userIndex exists
      if (state.users[index]) {
        // Check if the 'appointments' array exists in the user object
        if (state.users[index].appointments) {
          // Update the 'appointments' array by removing the specified appointment
          state.users[index].appointments = state.users[index].appointments.filter(
            (appointment, index) => index !== appointmentIndex
          );
        }
      }
    },
    toggleAppointmentForm: (state) => {
      state.appointmentForm = !state.appointmentForm;
    },
  },
});

export const { addNewUser, toggleAppointmentForm, deleteUser,appointmentEdit } =
  userSlice.actions;

export default userSlice.reducer;

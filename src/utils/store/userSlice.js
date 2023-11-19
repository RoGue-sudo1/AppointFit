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
        (user, index) => index !== indexToDelete
      );
    },
    editUserDetails: (state, action) => {
      const { userIndex, userInfo } = action.payload;
      state.users = state.users.map((user, index) => {
        if (index === userIndex) {
          return { ...user, ...userInfo };
        }
        return user;
      });
    },
    appointmentDelete: (state, action) => {
      const { index, appointmentIndex } = action.payload;

      state.users[index].appointments = state.users[index].appointments.filter(
        (appointment, index) => index !== appointmentIndex
      );
    },
    toggleAppointmentForm: (state) => {
      state.appointmentForm = !state.appointmentForm;
    },
  },
});

export const {
  addNewUser,
  toggleAppointmentForm,
  deleteUser,
  appointmentDelete,
  editUserDetails,
} = userSlice.actions;

export default userSlice.reducer;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { appointmentEdit, deleteUser } from "../../utils/store/userSlice";
import { MdOutlineDeleteOutline } from "react-icons/md";

function AppointmentCard({ user, index }) {
  const dispatch = useDispatch();

  const [appointmentUsers, setAppointmentUsers] = useState(user.appointments);
  const [change,setChange] = useState(false)

  useEffect(() => {
    setAppointmentUsers(user.appointments);
  }, [user.appointments]);

  const handleCancelButtonPressed = (index) => {
    dispatch(deleteUser(index));
  };

  const handleChangeButtonPressed = (index) => {};

  const handleAppointmentDelete = (appointmentIndex) => {
    
    dispatch(
      appointmentEdit({ index: index, appointmentIndex: appointmentIndex })
    );
  };

  return (
    <div className=" p-2 w-[20%] shadow-lg mx-2 bg-teal-800 rounded-md m-2 ">
      <div className="shadow-lg px-2 py-1 bg-white my-1 flex justify-between rounded-md">
        <span className="font-bold">
          First Name: <span className="font-normal">{user.firstName}</span>
        </span>
        {/* <span className=" pt-1" ><MdOutlineModeEdit/></span> */}
      </div>
      <div className="shadow-lg px-2 py-1 bg-white my-2 flex justify-between rounded-md">
        <span className="font-bold">
          Last Name: <span className="font-normal">{user.lastName}</span>
        </span>
        {/* <span className="  pt-1 "><MdOutlineModeEdit/></span> */}
      </div>
      <div className="shadow-lg px-2 py-1 bg-white my-2 flex justify-between rounded-md">
        <span className="font-bold">
          Location: <span className="font-normal">{user.location}</span>
        </span>
        {/* <span className=" pt-1 "><MdOutlineModeEdit/></span> */}
      </div>
      <div className="shadow-lg px-2 py-1 bg-white my-1  rounded-md">
        <span className="font-bold">Appointments: </span>
        {appointmentUsers.map((appointment, appointmentIndex) => (
          <div className="flex justify-between">
            <span>
              {appointment.date}
              {" , "}
              {appointment.time}
            </span>
            <span
              className=" pt-1 bg-teal-800 text-white p-0.5 rounded-md m-1 cursor-pointer"
              onClick={() => {
                handleAppointmentDelete(appointmentIndex);
              }}
            >
              <MdOutlineDeleteOutline />
            </span>
          </div>
        ))}
      </div>
      <div className=" ">
        <button
          className="font-bold  px-10 py-2 hover:bg-gray-300 bg-white mt-1 rounded-md"
          onClick={() => {
            handleCancelButtonPressed(index);
          }}
        >
          Cancel
        </button>
        <button
          className="font-bold px-11 ml-2 py-2 hover:bg-gray-300 bg-white mt-1 rounded-md"
          onClick={() => {
            handleChangeButtonPressed(index);
          }}
        >
          Change
        </button>
      </div>
    </div>
  );
}

export default AppointmentCard;

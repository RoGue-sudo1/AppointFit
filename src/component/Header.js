import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleAppointmentForm } from "../utils/store/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch =useDispatch()
  const appointmentForm = useSelector((store) => store.user.appointmentForm);

  const handleAddNewButtonClicked = () => {
    dispatch(toggleAppointmentForm())
    navigate("/addNewAppointment");
    
  };

  const handleBackButtonClicked = () => {
    dispatch(toggleAppointmentForm())
    navigate("/");
  };

  return (
    <div className=" flex justify-between align-middle shadow-md ">
      {!appointmentForm ? (
        <div className="flex cursor-pointer  p-2" onClick={()=>{navigate("/")}} >
          <img src="./logo.png" alt="Logo" className="w-14" />
          <h1 className="pt-2 text-green-900 text-2xl font-bold">AppointFit</h1>
        </div>
      ) : (
        <div
          className="text-2xl flex  p-4 cursor-pointer font-bold "
          onClick={handleBackButtonClicked}
        >
          <IoChevronBackOutline />
          <h1 className="-mt-1 ml-1 ">Back</h1>
        </div>
      )}
      <div className="mr-4">
        {!appointmentForm && <button
          className="p-2 bg-teal-600 mr-12 rounded-lg font-bold  m-4"
          onClick={handleAddNewButtonClicked}
        >
          Add New
        </button>}
        <button className="p-2 bg-teal-600 -ml-8 rounded-lg font-bold  m-4">
          Calendar
        </button>
      </div>
    </div>
  );
}

export default Header;

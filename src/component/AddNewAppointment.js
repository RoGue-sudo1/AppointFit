import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function AddNewAppointment() {
  const navigate = useNavigate();

  const handleBackButtonClicked = () => {
    navigate("/");
  };
  return (
    <div>
      <div
        className="text-2xl flex  p-4 shadow-md font-bold "
        onClick={handleBackButtonClicked}
      >
        <IoChevronBackOutline />
        <h1 className="-mt-1 ml-1 ">Back</h1>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="bg-teal-700 p-2 rounded-md ">
          <form onSubmit={(e)=>e.preventDefault()} className="flex-row" >
            <label for="first_name" className="font-bold">First Name : </label>
            <input
              type="text"
              id="first_name"
              placeholder="What is your first name?"
              className="border border-black p-1 rounded-md"
            />
            <label for="last_name" className="font-bold">Last Name : </label>
            <input
              type="text"
              id="last_name"
              placeholder="What is your last name?"
              className="border border-black px-3 py-1 rounded-md"
            />
            <label for="location" className="font-bold">Location : </label>
            <input
              type="text"
              id="location"
              placeholder="What is your location?"
              className="border border-black p-1 rounded-md"
            />

            <button className="p-1 rounded-md">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewAppointment;

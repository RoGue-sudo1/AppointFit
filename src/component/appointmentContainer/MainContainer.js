import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppointmentCard from "./AppointmentCard";

function MainContainer() {
  const reduxUsers = useSelector((store) => store.user.users);
  const [users, setUsers] = useState(reduxUsers);
  useEffect(() => {
    setUsers(reduxUsers);
  }, [reduxUsers]);

  return (
    <div className="flex  justify-center items-center flex-wrap h-screen">
      {users.map((user, index) => (
        <AppointmentCard key={user.userId} user={user} index={index} />
      ))}
    </div>
  );
}

export default MainContainer;

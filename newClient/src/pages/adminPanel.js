import React from "react";
import AppoinmentLists from "../components/appoinmentLists";
import AddDoctor from "../components/AddDoctor";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div>
      <AppoinmentLists />
      <AddDoctor />{" "}
      <Link to='/'>
        <button style={{ alignItems: "center" }} className='btn btn-primary'>
          Return To Home
        </button>
      </Link>
    </div>
  );
};

export default AdminPanel;

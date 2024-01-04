import axios from "axios";
import React, { useEffect, useState } from "react";

const AppoinmentLists = () => {
  const [state, setState] = useState({ appoinments: [] });
  useEffect(() => {
    const getAllAppoinmentLists = async () => {
      try {
        const response = await axios.get(
          "https://doctor-server-uani.onrender.com/api/v1/appoinment/getAllAppoinemnt"
        );

        const appoinments = response.data.Appoinments;
        setState((prevState) => ({
          ...prevState,
          appoinments,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    getAllAppoinmentLists();
  }, []);

  const deleteAppoinmnet = async (id) => {
    console.log(id);
    try {
      await axios.delete(
        `https://doctor-server-uani.onrender.com/api/v1/appoinment/deleteAppoinment?appoinment=${id}`
      );
      document.getElementById(id).style.display = "none";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2 className='d-flex justify-content-center pt-2'>Appoinments</h2> <br />
      <div
        style={{
          height: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        <ol class='list-group list-group-numbered '>
          {state.appoinments.map((item) => (
            <li id={item._id} key={item._id} class='list-group-item'>
              <span>Patient Name : {item.patientName}</span> <br />
              <span style={{ textAlign: "center" }}>
                Doctor Name : {item.doctorName}
              </span>
              <br />
              <span style={{ textAlign: "center" }}>
                Appoinment Time : {item.selectedSlot}
              </span>
              <button
                onClick={() => {
                  deleteAppoinmnet(item._id);
                }}
                style={{ margin: "10px" }}
                type='button'
                class='btn btn-outline-danger'
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>{" "}
    </>
  );
};

export default AppoinmentLists;

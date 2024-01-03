import React, { useEffect, useState } from "react";

import axios from "axios";

const DoctorCard = () => {
  const [state, setState] = useState({ data: { doctors: [] } });
  const [user, setUser] = useState({ _id: "", email: "", password: "" });

  const checkAuth = async () => {
    const cookieValue = localStorage.getItem("token");

    // Check if the cookie value is present
    if (cookieValue) {
      const parts = cookieValue.split(".");

      // Decode the payload (the second part of the JWT)
      const decodedPayload = await JSON.parse(atob(parts[1]));

      const { _id, name, email, password } = decodedPayload;

      setUser({ _id: _id, name: name, email: email, password: password });

      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    const getAllDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/doctor/getAllDoctor"
        );
        const doctorsData = response.data.doctors;

        setState((prevState) => ({
          ...prevState,
          data: { doctors: doctorsData },
        })); // Set the response.data as the state
      } catch (error) {
        console.log(error);
      }
    };

    getAllDoctors();
  }, []);

  const setAppoinment = async (doctor, selectedSlot) => {
    checkAuth();

    if (checkAuth()) {
      const appoinment = await {
        patientId: user._id,
        patientName: user.name,
        doctorId: doctor._id,
        doctorName: doctor.name,
        selectedSlot: selectedSlot,
      };

      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/appoinment/addAppoinment",
          appoinment
        );

        if (response.statusText === "OK") {
          document.getElementById("created").style.display = "block";
          document.getElementById(doctor._id).style.display = "none";
        } else {
          document.getElementById("created").style.display = "none";
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      checkAuth();
    }
  };
  return (
    <div>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {state.data.doctors.map((item) => (
          <div className='col' key={item._id}>
            <div className='card'>
              <img
                style={{ height: "30rem" }}
                src={`/images/doctorImages/${item.avatar}`}
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p>{item.degree}</p>
                <p>{item.designation}</p>
                <p>{item.department}</p>
                <p>{item.division} </p>
              </div>

              <div class='btn-group'>
                <button
                  id={item._id}
                  type='button'
                  class='btn btn-danger dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Take an appoinment
                </button>
                <ul class='dropdown-menu'>
                  <p style={{ textAlign: "center" }}>Available Slots</p>
                  {item.available.map((selectedSlot) => (
                    <li
                      onClick={() => {
                        setAppoinment(item, selectedSlot);
                      }}
                      className='dropdown-item'
                    >
                      <button type='button' class='btn btn-primary'>
                        {selectedSlot}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        id='created'
        style={{ display: "none", textAlign: "center", margin: "2%" }}
        class='alert alert-primary'
        role='alert'
      >
        An Appoinment Created Successfully!
      </div>
    </div>
  );
};

export default DoctorCard;

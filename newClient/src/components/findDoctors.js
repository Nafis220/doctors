import axios from "axios";
import React, { useEffect, useState } from "react";

const FindDoctors = () => {
  const [state, setState] = useState({ data: { doctors: [] } });
  const [user, setUser] = useState({ _id: "", email: "", password: "" });
  const [division, setDisivion] = useState("");
  const findDoctors = async (division) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/doctor/searchedDoctors?division=${division}`
      );

      const doctorsData = response.data.doctors;

      setState((prevState) => ({
        ...prevState,
        data: { doctors: doctorsData },
      }));
    } catch (error) {
      console.log(error);
    }
    document.getElementById("heading").style.display = "block";
  };

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

  const setAppoinment = async (doctor, selectedSlot) => {
    checkAuth();

    if (checkAuth()) {
      const appoinment = {
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
          alert("An Appoinment Created Successfully!");

          document.getElementById(doctor._id).style.display = "none";
        } else {
          alert("Failed To create an appoinment!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      checkAuth();
    }
  };

  return (
    <div style={{ padding: "2.5%" }}>
      <h1 style={{ textAlign: "center" }}>Which Division are you From ?</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul className='list-group' style={{ width: "50%" }}>
          <li
            style={{ margin: "1%" }}
            className='list-group-item list-group-item-primary'
            onClick={() => {
              findDoctors("Dhaka");
              setDisivion("Dhaka");
            }}
          >
            Dhaka
          </li>
          <li
            style={{ margin: "1%" }}
            className='list-group-item list-group-item-primary'
            onClick={() => {
              findDoctors("Chattogram");
              setDisivion("Chattogram");
            }}
          >
            Chattogram
          </li>
          <li
            style={{ margin: "1%" }}
            className='list-group-item list-group-item-primary'
            onClick={() => {
              findDoctors("Barisal");
              setDisivion("Barisal");
            }}
          >
            Barisal
          </li>
          <li
            style={{ margin: "1%" }}
            className='list-group-item list-group-item-primary'
            onClick={() => {
              findDoctors("Rajshahi");
              setDisivion("Rajshahi");
            }}
          >
            Rajshahi
          </li>
          <li
            style={{ margin: "1%" }}
            className='list-group-item list-group-item-primary'
            onClick={() => {
              findDoctors("Khulna");
              setDisivion("Khulna");
            }}
          >
            Khulna
          </li>
          <li
            style={{ margin: "1%" }}
            className='list-group-item list-group-item-primary'
            onClick={() => {
              findDoctors("Sylhet");
              setDisivion("Sylhey");
            }}
          >
            Sylhet
          </li>
          <li
            style={{ margin: "1%" }}
            className='list-group-item list-group-item-primary'
            onClick={() => {
              findDoctors("Rangpur");
              setDisivion("Rangpur");
            }}
          >
            Rangpur
          </li>
          <li
            style={{ margin: "1%" }}
            className='list-group-item list-group-item-primary'
            onClick={() => {
              findDoctors("Mymensingh");
              setDisivion("Mymensingh");
            }}
          >
            Mymensingh
          </li>
        </ul>
      </div>
      <h2
        id='heading'
        style={{ textAlign: "center", padding: "2%", display: "none" }}
      >
        Doctors from {division} division
      </h2>
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
              <div
                id='test'
                style={{ display: "none" }}
                className='alert alert-primary'
                role='alert'
              >
                An Appoinment Created Successfully!
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
    </div>
  );
};

export default FindDoctors;

import axios from "axios";
import React, { useState } from "react";

const AddDoctor = () => {
  const [state, setState] = useState({
    name: "",
    degree: "",
    department: "",
    designation: "",
    avatar: "",
    division: "",
  });

  const [available, setAvailable] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = document.querySelector("#form");

    const formData = new FormData(form);
    const acceptedNames = [
      "Dhaka",
      "Rajshahi",
      "Khulna",
      "Barisal",
      "Chattogram",
      "Mymensingh",
      "Sylhet",
      "Rangpur",
    ];
    let givenAllData =
      document.forms["form"]["name"].value &&
      document.forms["form"]["degree"].value &&
      document.forms["form"]["department"].value &&
      document.forms["form"]["degree"].value &&
      document.forms["form"]["designation"].value &&
      acceptedNames.includes(document.forms["form"]["division"].value) &&
      document.forms["form"]["avatar"].files &&
      available.length > 0
        ? true
        : false;

    if (givenAllData) {
      const response = await axios.post(
        "https://doctor-server-uani.onrender.com/api/v1/doctor/addDoctor",
        formData
      );
      if (Object.keys(response).length > 0) {
        document.getElementById("test").style.display = "block";
      } else {
        document.getElementById("test").style.display = "none";
      }
    } else {
      alert("Put all the information correctly");
    }
  };

  return (
    <form
      name='form'
      id='form'
      className='container'
      action='submit'
      onSubmit={handleSubmit}
    >
      <br />
      <h2 className='text-center'> Add New Doctor Here</h2>
      <div className='row p-2'>
        <div className='col d-flex justify-content-center'>
          {" "}
          <span className='input-group-text' id='inputGroup-sizing-default'>
            Name
          </span>
          <input
            name='name'
            type='text'
            className='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default'
            value={state.name}
            onChange={(e) => {
              setState({ name: e.target.value });
            }}
          />
        </div>
      </div>
      <div className='row p-2'>
        <div className='col d-flex justify-content-center'>
          {" "}
          <span className='input-group-text' id='inputGroup-sizing-default'>
            Degree
          </span>
          <input
            name='degree'
            type='text'
            class='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default'
            value={state.degree}
            onChange={(e) => {
              setState({ ...state, degree: e.target.value });
            }}
          />
        </div>
      </div>
      <div className='row p-2'>
        <div className='col d-flex justify-content-center'>
          {" "}
          <span className='input-group-text ' id='inputGroup-sizing-default'>
            Designation
          </span>
          <input
            name='designation'
            type='text'
            className='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default'
            value={state.designation}
            onChange={(e) => {
              setState({ ...state, designation: e.target.value });
            }}
          />
        </div>
        <div className='row p-2'>
          <div className='col d-flex justify-content-center'>
            {" "}
            <span className='input-group-text ' id='inputGroup-sizing-default'>
              Department
            </span>
            <input
              name='department'
              type='text'
              className='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-default'
              value={state.department}
              onChange={(e) => {
                setState({ ...state, department: e.target.value });
              }}
            />
          </div>
        </div>
        <div className='row p-2'>
          <div className='col d-flex justify-content-center'>
            {" "}
            <span className='input-group-text ' id='inputGroup-sizing-default'>
              Division
            </span>
            <input
              name='division'
              type='text'
              className='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-default'
              value={state.division}
              onChange={(e) => {
                setState({ ...state, division: e.target.value });
              }}
            />
          </div>
        </div>
        <div className='row '>
          <label htmlFor='formFile' className='form-label'>
            Doctor's Picture
          </label>
          <input
            name='avatar'
            className='form-control'
            type='file'
            id='formFile'
            onChange={(e) => {
              setState({
                ...state,
                avatar: e.target.files[0],
              });
            }}
          />
        </div>
      </div>
      <div className='col-auto'>
        <p>Doctor's Available Slot</p>
        <div className='form-check form-check-inline'>
          <input
            name='available'
            class='form-check-input'
            type='checkbox'
            id='inlineCheckbox1'
            value='07:00am - 10:00am'
            onClick={(e) => {
              setAvailable([...available, e.target.value]);
            }}
          />
          <label className='form-check-label' for='inlineCheckbox1'>
            07:00am - 10:00am
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            name='available'
            className='form-check-input'
            type='checkbox'
            id='inlineCheckbox2'
            value='11:00am - 02:00pm'
            onClick={(e) => {
              setAvailable([...available, e.target.value]);
            }}
          />
          <label className='form-check-label' for='inlineCheckbox2'>
            11:00am - 02:00pm
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            name='available'
            className='form-check-input'
            type='checkbox'
            id='inlineCheckbox2'
            value='03:00pm - 06:00pm'
            onClick={(e) => {
              setAvailable([...available, e.target.value]);
            }}
          />
          <label className='form-check-label' for='inlineCheckbox2'>
            03:00pm - 06:00pm
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            name='available'
            className='form-check-input'
            type='checkbox'
            id='inlineCheckbox2'
            value='07:00pm - 10:00pm'
            onClick={(e) => {
              setAvailable([...available, e.target.value]);
            }}
          />
          <label className='form-check-label' for='inlineCheckbox2'>
            07:00pm - 10:00pm
          </label>
        </div>
      </div>
      <div className='col-auto'>
        <button type='submit' className='btn btn-primary mb-3'>
          Confirm identity
        </button>
      </div>

      <div
        id='test'
        style={{ display: "none" }}
        class='alert alert-primary'
        role='alert'
      >
        A Doctor Account Created Successfully!
      </div>
    </form>
  );
};

export default AddDoctor;

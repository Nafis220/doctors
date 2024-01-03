import React from "react";
import { Link } from "react-router-dom";

import Doctors from "../components/doctors";

import SlideShow from "../components/slideShow";

const HomePage = () => {
  return (
    <div className='p-2'>
      <div className='row'>
        <div className='col'>
          {" "}
          <img
            class='d-flex ustify-content-start col'
            src='https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/logo-dark.png'
            alt=''
          />
        </div>
        <div className='col'>
          {" "}
          <ul class='nav justify-content-center'>
            <li class=' row '>
              <i
                class='fa-solid fa-phone col pt-1'
                style={{ color: "#20511f" }}
              ></i>
              <p class='col align-middle'>+880121*******</p>
            </li>
            <li class=' row '>
              <i
                class='fa-solid fa-clock d-flex justify-content-end align-middle col pt-1'
                style={{ color: "#20511f" }}
              ></i>
              <p class='col '>Mon-Fri: 9:00AM- 5:00PM</p>
            </li>
            <li class=' row '>
              <i
                class='fa-solid fa-envelope col pt-1'
                style={{ color: "#20511f" }}
              ></i>
              <p class='col align-middle'>mediclinic@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>

      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='/'>
            Home
          </a>
          <a class='navbar-brand' href='/doctors'>
            Doctors
          </a>
          <a class='navbar-brand' href='/admin'>
            Admin Panel
          </a>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'></ul>
            <div class='d-flex'>
              <Link to='/login'>
                {" "}
                <button class='btn btn-outline-success m-1'>Login</button>
              </Link>
              <Link to='/register'>
                <button class='btn btn-outline-primary m-1'> Register </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <SlideShow />
      <Doctors />
    </div>
  );
};

export default HomePage;

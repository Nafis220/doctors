import React from "react";
import slideLogo from "../image/h1-slider-image-2.png";
import slideLogoOne from "../image/h1-slider-image-3.png";
import slideLogoTwo from "../image/h1-slider-image-4.png";
import slideLogoThree from "../image/h1-slider-image-5.png";
import slidePicOne from "../image/photo_2024-01-03_17-51-51.jpg";
import slidePicTwo from "../image/photo_2024-01-03_17-51-49.jpg";
import slidePicThree from "../image/photo_2024-01-03_17-51-47.jpg";
const SlideShow = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2.5%" }}>
      <div
        style={{
          width: "50%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
        }}
        id='carouselExampleDark'
        class='carousel carousel-dark slide'
        data-bs-ride='carousel'
      >
        <div class='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='0'
            class='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div class='carousel-inner'>
          <div class='carousel-item active' data-bs-interval='10000'>
            <img src={slidePicOne} class='d-block w-100' alt='...' />
            <div class='carousel-caption d-none d-md-block'>
              <h4 className='text-white bg-info rounded mb-3'>
                We are bound to provide you a better health treatment
              </h4>
              <img src={slideLogo} alt='' />
              <img src={slideLogoOne} alt='' />
              <img src={slideLogoTwo} alt='' />
              <img src={slideLogoThree} alt='' />
            </div>
          </div>
          <div class='carousel-item' data-bs-interval='2000'>
            <img src={slidePicTwo} class='d-block w-100' alt='...' />
            <div class='carousel-caption d-none d-md-block'>
              <h4 className='text-white bg-info rounded mb-3'>
                Set Appoinment in a favourable time
              </h4>
              <img src={slideLogo} alt='' />
              <img src={slideLogoOne} alt='' />
              <img src={slideLogoTwo} alt='' />
              <img src={slideLogoThree} alt='' />
            </div>
          </div>
          <div class='carousel-item'>
            <img src={slidePicThree} class='d-block w-100' alt='...' />
            <div class='carousel-caption d-none d-md-block'>
              <h4 className='text-white bg-info rounded mb-3'>
                Get Our Best Doctor in your Locality
              </h4>
              <img src={slideLogo} alt='' />
              <img src={slideLogoOne} alt='' />
              <img src={slideLogoTwo} alt='' />
              <img src={slideLogoThree} alt='' />
            </div>
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
      ;
    </div>
  );
};

export default SlideShow;

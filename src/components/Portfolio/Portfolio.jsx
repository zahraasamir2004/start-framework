import React from "react";
import "./Portfolio.css";

// Import images at the top of the file
import poert1 from "../../assets/imgs/poert1.png";
import port2 from "../../assets/imgs/port2.png";
import port3 from "../../assets/imgs/port3.png";
import poert4 from "../../assets/imgs/poert1.png"; // Same image or different one
import port5 from "../../assets/imgs/port2.png"; // Same image or different one
import port6 from "../../assets/imgs/port3.png"; // Same image or different one

export default function Portfolio() {
  function previewImg(src) {
    document.querySelector("#img-preview").setAttribute("src", src);
    document.querySelector(".preview-img").classList.remove("d-none");
    document.querySelector(".preview-img").classList.add("d-block");
  }

  function closeImg() {
    document.querySelector(".preview-img").classList.remove("d-block");
    document.querySelector(".preview-img").classList.add("d-none");
  }

  return (
    <section
      id="portfolio"
      className="min-vh-100 d-flex justify-content-center align-items-center mt-3 mb-5"
    >
      <div className="container mt-5">
        <div className="title mt-5">
          <h1 className="text-center display-6 fw-bold t-color">
            PORTFOLIO COMPONENT
          </h1>

          <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div id="line"></div>
            <i className="fa fa-solid fa-star t-color"></i>
            <div id="line"></div>
          </div>
        </div>

        <div className="row g-4 mt-3">
          {/* Image 1 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(poert1)} // Use imported image
            >
              <img
                src={poert1} // Use imported image
                className="img-fluid"
                alt="poert1"
              />
              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port2)} // Use imported image
            >
              <img
                src={port2} // Use imported image
                className="img-fluid"
                alt="port2"
              />
              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          {/* Image 3 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port3)} // Use imported image
            >
              <img
                src={port3} // Use imported image
                className="img-fluid"
                alt="port3"
              />
              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-3">
          {/* Image 4 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(poert4)} // Use imported image
            >
              <img
                src={poert4} // Use imported image
                className="img-fluid"
                alt="poert4"
              />
              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          {/* Image 5 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port5)} // Use imported image
            >
              <img
                src={port5} // Use imported image
                className="img-fluid"
                alt="port5"
              />
              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          {/* Image 6 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port6)} // Use imported image
            >
              <img
                src={port6} // Use imported image
                className="img-fluid"
                alt="port6"
              />
              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="preview-img d-flex justify-content-center align-items-center bg-info bg-opacity-25 position-fixed top-0 start-0 w-100 vh-100 d-none"
        onClick={closeImg}
      >
        <img
          id="img-preview"
          alt="preview img"
          className="w-50 mt-5 rounded-3"
        />
      </div>
    </section>
  );
}

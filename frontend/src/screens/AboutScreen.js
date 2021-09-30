import React, { Component } from "react";
import profile from "./PROFILE_IMAGE.jpg";
import abt from "./abt.png";
import { Link } from "react-router-dom";

const AboutScreen = (props) => {
  return (
    <div>
      <div className="bg-dark">
        <div className="container text-white py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4 text-white ms-4">About us</h1>
              <p className="lead mb-0 ms-4">
                HealthyMeal is our effort to simplify the food ordering process.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img src="images/about.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="font-weight-light">What is HealthyMeal?</h2>
              <p className="font-italic text-muted mb-4">
                HealthyMeal is a system that will provide online food ordering
                service to users. With HealthyMeal, users can explore and order
                nutritious food and track their calories as per their order
                history. User can browse products, add it to cart and order food
                and do checkout. Admin can add, edit, and remove products.
              </p>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="assets/images/about.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light text-white ms-4">
                Our team
              </h2>
              <p className="font-italic text-light ms-4">Meet our team.</p>
              <p className="lead text-muted ms-4">
                Designed with love in India.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-6 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="images/1.jpeg"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Hitesh Narkhede</h5>
                <span className="small  text-muted">Co-founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="!#" className="social-link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="!#" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="!#" className="social-link">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-6 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="images/5.jpeg"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Prasad Jagtap</h5>
                <span className="small text-muted">Co-founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="!#" className="social-link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="!#" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="!#" className="social-link">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutScreen;

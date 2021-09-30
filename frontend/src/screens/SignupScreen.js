import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { signup } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const SignupScreen = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const userSignup = useSelector((store) => store.userSignup);
  const { loading, response, error, isSignupSuccess } = userSignup;
  const onSignup = () => {
    dispatch(
      signup(firstname, lastname, email, password, address, pinCode, phone)
    );
  };
  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);
    console.log(isSignupSuccess);
    if (isSignupSuccess === "CUSTOMER") {
      props.history.push("/signin");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("Please Enter All the Details");
    }
  }, [loading, response, error, isSignupSuccess]);

  return (
    <div className="container signup-form">
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div
            className="d-none d-md-flex col-md-4 col-lg-6 bg-image"
            style={{ backgroundImage: `url("assets/images/bg/login-bg.jpeg")` }}
          ></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Register Here!</h3>

                    {/* <!-- Sign Up Form --> */}
                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">First Name</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Last Name</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Mobile Number</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Address</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setPinCode(e.target.value);
                        }}
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Pincode</label>
                    </div>

                    <div className="d-grid">
                      <button
                        onClick={onSignup}
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        // type="submit"
                      >
                        Sign up
                      </button>
                      <div className="text-center">
                        <h3 className="fs-6 lh-lg">
                          Already Registered ?{" "}
                          <Link to="/signin">Login Here</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="form">
        <h2> Register User </h2>

        <div className="form-group">
          <strong className="col-sm-3 control-label">firstname</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              placeholder="FirstName"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <strong className="col-sm-3 control-label">lastname</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              placeholder="LastName"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <strong className="col-sm-3 control-label">Email </strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
              className="form-control"
              name=""
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Password</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
              placeholder="Password"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Address</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              type="text"
              placeholder="Address"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Pin Code</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setPinCode(e.target.value);
              }}
              type="text"
              placeholder="pincode"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Phone </strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="phoneNumber"
              placeholder="Phone number"
              className="form-control"
            />
            <span className="help-block"> </span>
          </div>
        </div>

        <div className="form-group signup-button">
          <div className="row">
            <div className="col-sm-3">
              <button onClick={onSignup} className="btn btn-primary btn-block">
                Register
              </button>
            </div>

            <div className="col-sm-6">
              <Link to="/login">
                <button className="btn btn-success ">Back to login</button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SignupScreen;

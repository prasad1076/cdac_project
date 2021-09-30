import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { signin } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";

const SigninScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((store) => store.userSignin);
  const { loading, erro, response, role, id } = userSignin;

  const dispatch = useDispatch();
  const onSignin = () => {
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (role === "ADMIN") {
      //sessionStorage.setItem('token', id)
      props.history.push("/admin");
    } else if (role === "CUSTOMER") {
      // sessionStorage.setItem('token', id)
      props.history.push("/home");
    } else if (role === "EMPLOYEE") {
      //sessionStorage.setItem('token', id)
      props.history.push("/employee");
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (erro) {
      alert(erro);
    }
  }, [loading, erro, response, role, id]);
  return (
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
                  <h3 className="login-heading mb-4">Welcome back!</h3>

                  {/* <!-- Sign In Form --> */}
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
                    <label for="floatingInput">Email address</label>
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

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPasswordCheck"
                    />
                    <label
                      className="form-check-label"
                      for="rememberPasswordCheck"
                    >
                      Remember password
                    </label>
                  </div>

                  <div className="d-grid">
                    <button
                      onClick={onSignin}
                      className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                      // type="submit"
                    >
                      Sign in
                    </button>
                    <div className="text-center">
                      <a className="small" href="#">
                        Forgot password?
                      </a>
                      <h3 className="fs-6 lh-lg">
                        New User ? <Link to="/signup">Register Here</Link>
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
  );
};

export default SigninScreen;

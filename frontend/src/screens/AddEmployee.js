import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { signupSupplier } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";

const AddEmployee = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  const userSignup = useSelector((store) => store.userSignup);
  const { loading, response, error, isSignupSuccess } = userSignup;
  const onSignup = () => {
    dispatch(
      signupSupplier(
        firstName,
        lastName,
        email,
        password,
        address,
        pinCode,
        phone,
        role
      )
    );
  };
  useEffect(() => {
    if (response) {
      props.history.push("/admin");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error, isSignupSuccess]);

  return (
    <div class="container">
      <div class="col-md-6 mx-auto text-center">
        <Form>
          <h3 className="login-heading mb-4 pt-5">Add Employee</h3>
          <Row className="mb-3">
            <Col>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="first-name"
                />
                <label for="floatingInput">First Name</label>
              </div>
            </Col>
            <Col>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="last-name"
                />
                <label for="floatingInput">Last Name</label>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="description"
                />
                <label for="floatingInput">Email</label>
              </div>
            </Col>
            <Col>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                  id="floatingInput"
                  placeholder="description"
                />
                <label for="floatingInput">Password</label>
              </div>
            </Col>
          </Row>
          <div className="form-floating mb-3">
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="description"
            />
            <label for="floatingInput">Address</label>
          </div>
          <Row className="mb-3">
            <Col>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    setPinCode(e.target.value);
                  }}
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="description"
                />
                <label for="floatingInput">Pincode</label>
              </div>
            </Col>
            <Col>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="description"
                />
                <label for="floatingInput">Mobile Number</label>
              </div>
            </Col>
          </Row>
          <div class="form-floating mb-3">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="category-type"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value=" ADMIN">Admin</option>
              <option value="EMPLOYEE">Employee</option>
              <option value="CUSTOMER">Customer</option>
            </select>
            <label for="floatingSelect">Select Employee Role</label>
          </div>

          <Row className="mb-3">
            <Col></Col>
            <Col></Col>
            <Col>
              <Button onClick={onSignup} variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col>
              <Link to="/admin">
                <Button variant="secondary">Back</Button>
              </Link>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AddEmployee;

import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from '../actions/userActions';
import Header from '../components/Header'

const EditProfileScreen = (props) => {
  const userInfo = useSelector((store) => store.userProfile);
  const {response,id,name,email,password,address,phone,pinCode,role} = userInfo;

    const [nameNew, setNameNew] = useState(name)
    const [emailNew, setEmailNew] = useState(email)
    const [passwordNew, setPasswordNew] = useState(password)
    const [addressNew, setAddressNew] = useState(address)
    const [phoneNew, setPhoneNew] = useState(phone)
    const [pinCodeNew, setPinCodeNew] = useState(pinCode)
    const [roleNew, setRoleNew] = useState(role)

  const dispatch = useDispatch();

  const updateprofileReducer = useSelector((store) => store.userUpdateProfile);
  const {loading,response2, error,updateprofileSuccess} = updateprofileReducer;

  
  const onCancel = () =>{
    props.history.push("/home");
  }
  const onUpdateProfile = () => {
    alert(id)
    alert(nameNew)
    alert(emailNew)
    alert(passwordNew)
    alert(addressNew)
    alert(phoneNew)
    alert(pinCodeNew)
    dispatch(updateProfile(id,nameNew,emailNew,passwordNew,addressNew,pinCodeNew,phoneNew,roleNew));
    props.history.push("/home");
  };
  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);

    if (response2 && updateprofileSuccess) {
      props.history.push("/home");
    } else if (error) {
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response2, error, updateprofileSuccess]);
  
  return (
    <div>
      <div>
        <br />
        <center>
        <Header title="Update My Profile"></Header>
        </center>
      </div>
      <br />
      <br />
      <br />
      <Form.Group>
        <div>
          <h5>Enter New Name : </h5>
        </div>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter New Name"
            value={nameNew}
            onChange={(e) => {
                setNameNew(e.target.value);
            }}
            // onChange={onChange}
          />
        </Col>
        <br />
        
        <div>
          <h5>Email : </h5>
        </div>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter New Email"
            value={emailNew}
            readOnly="true"
            onChange={(e) => {
              setEmailNew(e.target.value);
            }}
          />
        </Col>
        <br />
        <div>
          <h5>Enter New Password : </h5>
        </div>
        <Col>
          <Form.Control
            type="text"
            // placeholder={password}
            value={passwordNew}
            onChange={(e) => {
              setPasswordNew(e.target.value);
            }}
          />
        </Col>
        <br />

        <div>
          <h5>Enter New Address : </h5>
        </div>
        <Col>
          <Form.Control
            type="text"
            value={addressNew}
            // value={response.password}
            onChange={(e) => {
                setAddressNew(e.target.value);
            }}
          />
        </Col>
        <br />

        <div>
          <h5>Enter New PinCode : </h5>
        </div>
        <Col>
          <Form.Control
            type="text"
            value={pinCodeNew}
            // value={response.phone}
            onChange={(e) => {
                setPinCodeNew(e.target.value);
            }}
          />
        </Col>
        <br />
        <div>
          <h5>Enter New PhoneNo : </h5>
        </div>
        <Col>
          <Form.Control
            type="number"
            value={phoneNew}
            // value={response.phone}
            onChange={(e) => {
              setPhoneNew(e.target.value);
            }}
          />
        </Col>
        <br />
        <center>
          <Button type="submit" onClick={onUpdateProfile}>
            Update
          </Button>
          <Button type="submit" onClick={onCancel}>
            Cancel
          </Button>
        </center>
      </Form.Group>
    </div>
  );
};

export default EditProfileScreen;

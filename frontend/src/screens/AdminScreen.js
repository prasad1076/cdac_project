import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
const AdminScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { response } = userSignin;
  return (
    <div>
      <h3 className="login-heading mb-4 pt-5">Hey Admin!</h3>
      <ListGroup horizontal>
        <ListGroup.Item>
          <Link to="/add-product">
            <h5 className="login-heading mb-1 pt-1 text-ul">Add Product</h5>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/products">
            <h5 className="login-heading mb-1 pt-1 text-ul">Products</h5>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/add-emp">
            <h5 className="login-heading mb-1 pt-1 text-ul">Add Employee</h5>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/list-employee">
            <h5 className="login-heading mb-1 pt-1 text-ul">Employees</h5>
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AdminScreen;

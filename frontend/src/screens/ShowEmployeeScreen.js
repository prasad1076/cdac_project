import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getSingleProduct,
  updateProduct,
} from "../actions/productAction";
import Header from "../components/Header";
import axios from "axios";
import React from "react";
import { getEmployees } from "../actions/userActions";

const ShowEmployeeScreen = (props) => {
  const dispatch = useDispatch();
  const employees = useSelector((store) => store.fetchEmployee);
  const { error, response, loading } = employees;

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  useEffect(() => {}, [error, response, loading]);

  const onEdit = (id) => {
    debugger;
    //dispatch(getSingleProduct(id))
    //props.history.push('/update-product/${id}')
  };

  const onDelete = (id) => {
    const header = {
      headers: {
        "Content-Type": "application/json",
        //token: sessionStorage['token'],
      },
    };
    const url = "http://localhost:8080/product/delete-product-by-id/" + id;
    axios
      .delete(url, header)
      .then((response) => {
        dispatch(getProducts());
        console.log(response.status);
      })
      .catch((error) => {
        alert("error in calling APT : " + error);
      });
  };

  return (
    <div className="container">
      <Header title="Employee List"></Header>
      <Link className="float-end" to="/add-emp">
        <button className="btn btn-success ">Add Employee</button>
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Role</th>
            {/*<th>categoryType</th>*/}
            {/* <th>Category</th> */}
            {/* <th>productImage</th> */}
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {response &&
            response.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.role}</td>
                  {/*<td>{product.weight}</td>*/}
                  {/* <td>{product.stock}</td> */}
                  {/* <td>{product.status}</td>
                  <td>{product.categoryType}</td> */}
                  {/* <td>{product.image}</td> */}

                  <td>
                    <Link
                      to={{
                        pathname: "/update-product",
                        state: { id: employee.id },
                      }}
                    >
                      <button
                        onClick={() => onEdit(employee.id)}
                        className="btn btn-primary "
                      >
                        Edit
                      </button>
                    </Link>
                    {/* <button onClick={() => onEdit(product.id)} className="btn btn-primary ">Edit</button> */}
                    <button
                      onClick={() => onDelete(employee.id)}
                      className="btn btn-danger "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Link to="/admin">
        <button className="btn btn-success ">Back</button>
      </Link>
    </div>
  );
};

export default ShowEmployeeScreen;

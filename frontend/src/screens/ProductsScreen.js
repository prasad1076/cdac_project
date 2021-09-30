import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productAction";
import Header from "../components/Header";
import axios from "axios";
import React from "react";

const ProductsScreen = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.fetchProduct);
  const { error, response, loading } = products;

  useEffect(() => {
    dispatch(getProducts());
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
      <Header title="Products Screen"></Header>
      <Link className="float-end" to="/add-product">
        <button className="btn btn-success ">Add Product</button>
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>status</th>
            <th>categoryType</th>
            {/* <th>Category</th> */}
            {/* <th>productImage</th> */}
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {response &&
            response.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  {/*<td>{product.weight}</td>*/}
                  {/* <td>{product.stock}</td> */}
                  <td>{product.status}</td>
                  <td>{product.categoryType}</td>
                  {/* <td>{product.image}</td> */}

                  <td>
                    <Link
                      to={{
                        pathname: "/update-product",
                        state: { id: product.id },
                      }}
                    >
                      <button
                        onClick={() => onEdit(product.id)}
                        className="btn btn-primary "
                      >
                        Edit
                      </button>
                    </Link>
                    {/* <button onClick={() => onEdit(product.id)} className="btn btn-primary ">Edit</button> */}
                    <button
                      onClick={() => onDelete(product.id)}
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

export default ProductsScreen;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts,getSingleProduct } from "../actions/productAction";
import Header from "../components/Header";
import axios from 'axios'
import React, { Component } from 'react'

const ProductsScreen  = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.fetchProduct);
  const { error, productresponse, loading } = products;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {}, [error, productresponse, loading]);

  const onEdit = (productId) => {
    dispatch(getSingleProduct(productId))
    props.history.push('/update_product')
  }

  const onDelete = (productId) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }
    const url = 'http://localhost:8080/products/remove_product/'+productId
      axios
        .delete(url, header)
        .then((response) => {
          dispatch(getProducts())
            console.log(response.status)
          })
        .catch((error) => {
          alert("error in calling APT : "+error)
        })
        
  }

  return (
    <div className="container">
      <Header title="Products Screen"></Header>
      <Link className="float-end" to="/add_product">
        <button className="btn btn-success ">Add Product</button>
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Weight</th>
            <th>Stock</th>
            {/* <th>Category</th> */}
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productresponse &&
            productresponse.map((product) => {
              return (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.weight}</td>
                  <td>{product.stock}</td>
                  {/* <td>{product.category.name}</td> */}
                  <td>{product.image}</td>
                  <td>
                    <button onClick={() => onEdit(product.id)} className="btn btn-primary ">Edit</button>
                    <button onClick={() => onDelete(product.id)} className="btn btn-danger ">Delete</button>
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

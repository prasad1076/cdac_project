import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../actions/categoryAction";
import Header from "../components/Header";
import axios from 'axios'
import React, { Component } from 'react'

const CategoryScreen = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.fetchCategory);
  const { categoryerror, categoryresponse, categoryloading } = categories;

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  useEffect(() => {}, [categoryerror, categoryresponse, categoryloading]);

  const onDelete = (categoryId) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }
    const url = 'http://localhost:8080/category/remove_category/'+categoryId
      axios
        .delete(url, header)
        .then((response) => {
          dispatch(getCategory())
            console.log(response.status)
          })
        .catch((error) => {
          alert("error in calling APT : "+error)
        })
  }

  return (
    <div className="container">
      <Header title="Categories Screen"></Header>
      <Link className="float-end" to="/add_category">
        <button className="btn btn-success ">Add Category</button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Thumbnails</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoryresponse &&
            categoryresponse.map((category) => {
              return (
                <tr>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>{category.thumbnails}</td>
                  <td>
                    <button className="btn btn-primary ">Edit</button>
                    <button onClick={() => onDelete(category.id)} className="btn btn-danger ">Delete</button>
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

export default CategoryScreen;

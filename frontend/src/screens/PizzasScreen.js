import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts } from "../actions/productAction";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
//  import {
//    Card, Button, CardImg, CardTitle, CardText, CardGroup,
//    CardSubtitle, CardBody
//  } from 'reactstrap';
import slide1 from "./images/slide_1.jpg";
import pizza1 from "./images/pizza1.jpg";
import pizza2 from "./images/pizza2.jpg";
import pizza3 from "./images/pizza3.jpg";
import pizza4 from "./images/pizza4.jpg";
import slide3 from "./images/slide_3.jpg";
import slide4 from "./images/slide_4.jpg";
import slide5 from "./images/slide_5.jpg";
import slide6 from "./images/slide_6.jpg";
import slide7 from "./images/slide_7.jpg";

const PizzasScreen = (props) => {
  let [slideImages, setSlideImages] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((store) => store.fetchProduct);
  const { error, productresponse, loading } = products;

  const user = useSelector((store) => store.userSignin);
  const { response, id, name, islogin } = user;
  const quantity = 1;
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {}, [error, productresponse, loading]);

  const onAddToCart = (product) => {
    if (islogin) {
      const header = {
        headers: {
          "Content-Type": "application/json",
          // token: sessionStorage['token'],
        },
      };
      const user = { id, name };
      const body = { user, product, quantity };

      const url = "http://localhost:8080/customer/add-to-cart";
      axios
        .post(url, body, header)
        .then((response) => {
          dispatch(getProducts());
          console.log(response.status);
        })
        .catch((error) => {
          alert("error in calling APT : " + error);
        });
      alert("Product Added");
    } else {
      props.history.push("/login");
    }
  };
  return (
    <div>
      {/* *******************************Slide Images*********************************** * */}

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src={pizza1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Margherita</h5>
              <p class="card-text">Cheese</p>
              <button type="button" class="btn btn-success">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={pizza2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tandoori Paneer</h5>
              <p class="card-text">
                Spiced paneer, Onion, Green Capsicum & Red Paprika in Tandoori
                Sauce
              </p>
              <button type="button" class="btn btn-success">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={pizza3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Double Paneer Supreme</h5>
              <p class="card-text">
                Spiced Paneer, Herbed Onion & Green Capsicum, Red Paprika
              </p>
              <button type="button" class="btn btn-success">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={pizza4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Veg Kebab Surprise</h5>
              <p class="card-text">
                Veg Kebab, Onion, Green Capsicum, Tomato & Sweet Corn in
                Tandoori Sauce
              </p>
              <button type="button" class="btn btn-success">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {productresponse &&
          productresponse.map((product) => {
            return (
              <div className="product col-md-3">
                <div className="title">{product.name}</div>
                <div className="description">{product.description}</div>
                <div className="price">Price: ₹ {product.price}/-</div>
                <button
                  onClick={() => {
                    onAddToCart(product);
                  }}
                  className="btn btn-sm btn-success btn-add-to-cart"
                >
                  Add to cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default PizzasScreen;

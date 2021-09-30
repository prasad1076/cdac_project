import React from "react";
import Header from "../components/Header";
import {
  Row,
  Col,
  Card,
  Button,
  Carousel,
  CardGroup,
  Alert,
  Toast,
} from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts } from "../actions/productAction";
import axios from "axios";
import slide1 from "./images/slide_1.jpg";
import slide2 from "./images/slide_2.jpg";
import slide3 from "./images/slide_3.jpg";
import slide4 from "./images/slide_4.jpg";
import { DISHES } from "../shared/dishes";

const HomeScreen = (props) => {
  const [toast, setToast] = useState(true);
  const toggleToast = () => setToast(!toast);

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
          // alert("error in calling APT : " + error);
        });
      alert("Product Added to Cart");
      // <Alert variant="success">Product Added to cart</Alert>;
    } else {
      props.history.push("/signin");
    }
  };

  const productList = DISHES.map((product) => {
    return (
      <Card className="card-box">
        <Card.Img variant="top" className="card-img" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>

          <Row>
            <Col sm={4}>
              <b>₹ {product.price}</b>
            </Col>
            <Col sm={8}>
              <Button
                onClick={() => {
                  onAddToCart(product);
                }}
                variant="success"
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div>
      <br />
      {/* *******************************Slide Images*********************************** * */}
      <Carousel nextLabel="" prevLabel="">
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide4} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
      <hr />
      {/* <Alert variant="success">Product Added to cart</Alert> */}
      {/* <Toast show={toast} onClose={toggleToast}>
        {" "}
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
      <button onClick={toggleToast}>Toast</button> */}
      <CardGroup>
        <Row md="auto" sm="auto">
          {productList}
        </Row>
      </CardGroup>
    </div>
  );
};

export default HomeScreen;

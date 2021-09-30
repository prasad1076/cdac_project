import React from 'react';
import Header from '../components/Header'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts } from "../actions/productAction";
import 'react-slideshow-image/dist/styles.css';
import axios from 'axios'
//  import {
//    Card, Button, CardImg, CardTitle, CardText, CardGroup,
//    CardSubtitle, CardBody
//  } from 'reactstrap';
import slide1 from "./images/slide_1.jpg"
import burger1 from "./images/burger1.jpg"
import burger2 from "./images/burger2.jpg"
import burger3 from "./images/burger3.jpg"
import burger4 from "./images/burger4.jpg"
import slide3 from "./images/slide_3.jpg"
import slide4 from "./images/slide_4.jpg"
import slide5 from "./images/slide_5.jpg"
import slide6 from "./images/slide_6.jpg"
import slide7 from "./images/slide_7.jpg"


const PizzasScreen  = (props) => {
 
 let [slideImages, setSlideImages] = useState('')
  const dispatch = useDispatch();
  const products = useSelector((store) => store.fetchProduct);
  const { error, productresponse, loading } = products;

  const user = useSelector((store) => store.userSignin);
  const { response , id,name,islogin} = user;
  const quantity = 1
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {}, [error, productresponse, loading]);

  const onAddToCart = (product) => {
    if(islogin){
    const header = {
      headers: {
        'Content-Type': 'application/json',
       // token: sessionStorage['token'],
      },
     
    }
    const user ={id,name}
    const body ={user,product,quantity}

    const url = 'http://localhost:8080/customer/add-to-cart'
      axios
        .post(url,body, header)
        .then((response) => {
          dispatch(getProducts())
            console.log(response.status)
          })
        .catch((error) => {
          alert("error in calling APT : "+error)
        })
        alert("Product Added")
      }else{
        props.history.push("/login");
      }

  }
    return (
      <div>
      {/* *******************************Slide Images*********************************** * */}
    
      <div class="row row-cols-1 row-cols-md-2 g-4">
 <div class="col">
   <div class="card">
     <img src={burger1} class="card-img-top" alt="..."/>
     <div class="card-body">
       <h5 class="card-title">Chicken Twisted Whopper</h5>
       <p class="card-text">It's sweet yet spicy, spicy yet sweet. Our Limited Time Twisted Chicken Whopper with crunchy chips, flame grilled chicken patty, cheese slice, tangy jalapenos, sweet spicy sauces, juicy tomatoes, crispy lettuce, xxl buns.</p>
       <button type="button" class="btn btn-success">Add To Cart</button>
     </div>
   </div>
 </div>
 <div class="col">
   <div class="card">
     <img src={burger2} class="card-img-top" alt="..."/>
     <div class="card-body">
       <h5 class="card-title">Veg Whopper</h5>
       <p class="card-text">Our signature Whopper with 7 layers between the buns. Extra crunchy veg Patty, fresh onion, crispy lettuce, juicy tomatoes, tangy gherkins, creamy and smoky sauces with xxl buns. It?s Not A Burger, it?s a Whopper.
</p>
       <button type="button" class="btn btn-success">Add To Cart</button>
     </div>
   </div>
 </div>
 <div class="col">
   <div class="card">
     <img src={burger3} class="card-img-top" alt="..."/>
     <div class="card-body">
       <h5 class="card-title">Twisted Veg Whopper</h5>
       <p class="card-text">It's sweet yet spicy, spicy yet sweet. Our Limited Time Twisted Veg Whopper with crunchy chips, extra crunchy veg patty, cheese slice, tangy jalapenos, sweet spicy sauces, juicy tomatoes, crispy lettuce, xxl buns.
</p>
       <button type="button" class="btn btn-success">Add To Cart</button>
     </div>
   </div>
 </div>
 <div class="col">
   <div class="card">
     <img src={burger4} class="card-img-top" alt="..."/>
     <div class="card-body">
       <h5 class="card-title">Fiery Chicken Burger</h5>
       <p class="card-text">Too Hot to Handle. Our Spicy & Crunchy Chicken Patty topped with crispy lettuce, juicy tomatoes and creamy sauce with our unique corn dust buns. An indulgent treat from our King's Collection!
</p>
       <button type="button" class="btn btn-success">Add To Cart</button>
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
               onAddToCart(product)
                }}
                className="btn btn-sm btn-success btn-add-to-cart">
                Add to cart
              </button>
            </div>
          )
        })}
      </div>
      </div>
    )
};
export default PizzasScreen;

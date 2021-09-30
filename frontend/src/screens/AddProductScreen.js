import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";

const AddProductScreen = (props) => {
  //const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  //const [image, setImage] = useState("");
  const [categoryType, setcategoryType] = useState("");
  const dispatch = useDispatch();

  const addproduct = useSelector((store) => store.addProduct);
  const { loading, response, error, isProductAdd } = addproduct;
  const onAddProduct = () => {
    dispatch(addProduct(name, description, price, status, categoryType));
  };
  useEffect(() => {
    if (isProductAdd) {
      props.history.push("/admin");
    } else if (error) {
      // there is an error while making the API call
      console.log("category error");
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error, isProductAdd]);
  return (
    <div class="container">
      <div class="col-md-6 mx-auto text-center">
        <Form>
          <h3 className="login-heading mb-4 pt-5">Add Product</h3>
          <Row className="mb-3">
            <Col>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name"
                />
                <label for="floatingInput">Product Name</label>
              </div>
            </Col>
            <Col>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="price"
                />
                <label for="floatingInput">Product Price</label>
              </div>
            </Col>
          </Row>
          <div className="form-floating mb-3">
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="description"
            />
            <label for="floatingInput">Product Description</label>
          </div>
          <div class="form-floating mb-3">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="category-type"
              onChange={(e) => {
                setcategoryType(e.target.value);
              }}
            >
              <option value="STARTER">Starters</option>
              <option value="MAIN_COURSE">Main Course</option>
              <option value="ROLL">Rolls</option>
              <option value="DRINKS">Drinks</option>
            </select>
            <label for="floatingSelect">Select Category Type</label>
          </div>
          <div key="default-radio" className="form-floating mb-3">
            <Row>
              <Col></Col>
              <Col>
                <Form.Check
                  type="radio"
                  id="default-radio"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  name="radios"
                  label="Active"
                  value="ACTIVE"
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  id="default-radio"
                  name="radios"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  label="Inactive"
                  value="INACTIVE"
                />
              </Col>
              <Col></Col>
            </Row>
          </div>

          <Row className="mb-3">
            <Col></Col>
            <Col></Col>
            <Col>
              <Button onClick={onAddProduct} variant="primary" type="submit">
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

export default AddProductScreen;

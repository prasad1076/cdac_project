import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../actions/productAction";
import Header from "../components/Header";
import { fetchSingleProductReducer, updateProductReducer } from "../reducers/productReducers";

const UpdateProductScreen = (props) => {
  //debugger
  const userInfo = useSelector((store) => store.updateProduct);
  const {name, description, price, status, categoryType} = userInfo;
  //const [id, setId] = props['location']['state']['id'];
  const id = props.location.state.id;
  const [nameNew, setNameNew] = useState("");
  const [descriptionNew, setDescriptionNew] = useState("");
  const [priceNew, setPriceNew] = useState("");
  const [statusNew, setStatusNew] = useState("");
  //const [imageNew, setImageNew] = useState("");
  const [categoryTypeNew, setcategoryTypeNew] = useState("");
  
  const dispatch = useDispatch();
  
  const singleProduct = useSelector((store) => store.updateProduct);
  const {loading, response, error, isProductUpdate} = singleProduct;

  const onUpdateProduct = () => {
    dispatch(
      updateProduct(
        id,
        nameNew,
        descriptionNew,
        priceNew,
        statusNew,
        categoryTypeNew
      )
    );
 
    console.log("nameNew-->",nameNew)
  };
  useEffect(() => {
    if (isProductUpdate) {

    console.log("nameNew-------->",nameNew)

      props.history.push("/admin");
    } else if (error) {
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response,error, isProductUpdate]);
  return (
    <div className="container signup-form">
      <div className="form">
        <Header title="Update Product"></Header>
        {/* <div className="form-group">
          <strong className="col-sm-3 control-label">Id </strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setId(e.target.value);
              }}
              type="email"
              placeholder="Description" value ={response.id}
              className="form-control"
              name=""
            />
          </div>
        </div> */}
        <div className="form-group">
          <strong className="col-sm-3 control-label">Name</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setNameNew(e.target.value);
              }}
              type="text"
              name="nameNew"
              placeholder="Name" 
              value ={nameNew}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <strong className="col-sm-3 control-label">Description </strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setDescriptionNew(e.target.value);
              }}
              type="email"
              placeholder="Description" defaultValue ={description}
              className="form-control"
              name=""
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Price</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setPriceNew(e.target.value);
              }}
              type="text"
              placeholder="Price" defaultValue ={price}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Status</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setStatusNew(e.target.value);
              }}
              type="text"
              placeholder="status" defaultValue ={status}
              className="form-control"
            />
          </div>
        </div>

      

        {/* <div className="form-group">
          <strong className="col-sm-3 control-label">Image </strong>
          <div className="col-sm-9">
            <input
              type="file"
              placeholder="Image" value ={response.image}
              className="form-control" readonly="true"
            />
            <span className="help-block">
              Your phone number won't be disclosed anywhere{" "}
            </span>
          </div>
        </div> */}
        <div className="form-group">
          <strong className="col-sm-3 control-label">CategoryType</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setcategoryTypeNew(e.target.value);
              }}
              type="text"
              placeholder="categoryType" defaultValue ={categoryType}
              className="form-control"
            />
          </div>
        </div>
      
        <div className="form-group signup-button">
          <div className="row">
            <div className="col-sm-3">
              <button
                onClick={onUpdateProduct}
                className="btn btn-primary btn-block"
              >
                Update Product
              </button>
            </div>

            <div className="col-sm-6">
              <Link to="/admin">
                <button className="btn btn-success ">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductScreen;

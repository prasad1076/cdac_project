import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../actions/categoryAction";
import Select from "react-select";
import Header from "../components/Header";

const AddCategoryScreen = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnails, setThumbnails] = useState("");
  const dispatch = useDispatch();

  const addPcategory = useSelector((store) => store.addPCategory);
  const {
    categoryerror,
    categoryresponse,
    categoryloading,
    isCategoryAdd,
  } = addPcategory;

  const onAddCategory = () => {
    dispatch(addCategory(name, description, thumbnails));
  };
  useEffect(() => {
    if (isCategoryAdd) {
      props.history.push("/admin");
    } else if (categoryerror) {
      // there is an error while making the API call
      console.log(categoryerror);
      alert("error while making API call");
    }
  }, [categoryerror, categoryresponse, categoryloading, isCategoryAdd]);
  return (
    <div className="container signup-form">
      <div className="form">
        <Header title="Add Category"></Header>
        <div className="form-group">
          <strong className="col-sm-3 control-label">Name</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Name"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <strong className="col-sm-3 control-label">Description </strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="email"
              placeholder="Description"
              className="form-control"
              name=""
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Thumbnails</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setThumbnails(e.target.value);
              }}
              type="file"
              placeholder="Thumbnails"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group signup-button">
          <div className="row">
            <div className="col-sm-3">
              <button
                onClick={onAddCategory}
                className="btn btn-primary btn-block"
              >
                Add Category
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

export default AddCategoryScreen;

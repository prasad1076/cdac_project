import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {
  addProductReducer,
  fetchProductReducer,
  fetchSingleProductReducer,
  updateProductReducer,
} from "./reducers/productReducers";
import {
  userSignupReducer,
  userSigninReducer,
  fetchEmployeeReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
  addProduct: addProductReducer,
  fetchProduct: fetchProductReducer,
  fetchSingleProduct: fetchSingleProductReducer,
  updateProduct: updateProductReducer,

  fetchEmployee: fetchEmployeeReducer,

  // supplierFetchProduct : supplierFetchProductReduc,
  //supplierFetchCurrentOrders : supplierFetchCurrentOrdersReducer,

  //addPCategory : addPCategoryReducer,
  //fetchCategory : fetchCategoryReducer,
});

let store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;

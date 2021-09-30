import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen";
import RegistrationScreen from "./screens/SignupScreen";
import AboutScreen from "./screens/AboutScreen";
import Navigation from "./components/Navigation";
import AdminScreen from "./screens/AdminScreen";
import Footer from "./components/Footer";
import AddProductScreen from "./screens/AddProductScreen";
import ProductsScreen from "./screens/ProductsScreen";
import AddEmployee from "./screens/AddEmployee";
import UpdateProductScreen from "./screens/UpdateProductScreen";
import ShowEmployeeScreen from "./screens/ShowEmployeeScreen";
// import AddCategoryScreen from "./screens/AddCategoryScreen";

function App() {
  return (
    <Router>
      <Navigation />
      <div class="container">
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/signup" component={RegistrationScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/admin" component={AdminScreen} />
          <Route exact path="/signin" component={SigninScreen} />
          <Route exact path="/add-product" component={AddProductScreen} />
          <Route exact path="/products" component={ProductsScreen} />
          <Route exact path="/add-emp" component={AddEmployee} />
          <Route exact path="/update-product" component={UpdateProductScreen} />
          <Route exact path="/list-employee" component={ShowEmployeeScreen} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
//import "../App.css";

const Navigation = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { name, islogin, role } = userSignin;
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="text-ul">
        <LinkContainer to="/home">
          <Navbar.Brand>HealthyMeal</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* {islogin && <span class="nav-link">Welcome {name}</span>} */}
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            {!islogin && (
              <LinkContainer to="/signin">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {!islogin && (
              <LinkContainer to="/signup">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            )}

            {islogin && (
              <NavDropdown title="My Account" id="collasible-nav-dropdown">
                {islogin && (
                  <NavDropdown.Item href="">Profile</NavDropdown.Item>
                )}

                {role && role === "ADMIN" && (
                  <LinkContainer to="/admin">
                    <NavDropdown.Item>Admin</NavDropdown.Item>
                  </LinkContainer>
                )}
                {role && role === "SUPPLIER" && (
                  <LinkContainer to="/dashboard">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                )}
                {role && role === "CUSTOMER" && (
                  <LinkContainer to="/cart">
                    <NavDropdown.Item>Cart</NavDropdown.Item>
                  </LinkContainer>
                )}
                {role && role === "CUSTOMER" && (
                  <LinkContainer to="/orders">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                )}
                <NavDropdown.Divider />
                {islogin && (
                  <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
                )}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

{
  /* {role === "ADMIN" || (
        <nav class="navbar navbar-expand-lg menu_bar">
          <div>
            <div id="navbarNavAltMarkup">
              <div class="navbar ">
                <Link to="/pizza">
                  <span class="nav-link padding_menu">PIZZAS</span>
                </Link>
                <Link to="/Drink">
                  <span class="nav-link padding_menu">DRINKS</span>
                </Link>
                <Link to="/Burger">
                  <span class="nav-link padding_menu">BURGERS</span>
                </Link>
                <Link to="/Pasta">
                  <span class="nav-link padding_menu">PASTAS</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )} */
}

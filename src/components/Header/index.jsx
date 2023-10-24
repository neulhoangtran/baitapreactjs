import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">BAITAP - HOANGTN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending nav-link"
                  : isActive
                  ? "active nav-link"
                  : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/collection"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending nav-link"
                  : isActive
                  ? "active nav-link"
                  : "nav-link"
              }
            >
              Collection
            </NavLink>

            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavLink
                to="/product/1"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending nav-link"
                    : isActive
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                Product A
              </NavLink>
              <NavLink
                to="/product/2"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending nav-link"
                    : isActive
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                Product B
              </NavLink>
              <NavLink
                to="/product/3"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending nav-link"
                    : isActive
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                Product C
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

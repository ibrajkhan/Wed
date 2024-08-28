import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import headerImg from "../assets/Image/Marriage/Icon.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { HashLink } from "react-router-hash-link";

function CollapsibleExample() {
  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar__main");
      if (navbar) {
        const offsetTop = navbar.offsetTop;
        if (window.pageYOffset > offsetTop) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="bg-body-tertiary header__color navbar__main sticky-top">
      <Container>
        <Navbar.Brand href="#home">
          <LazyLoadImage src={headerImg} className="header_img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="header__text">
              <HashLink
                to="/#home"
                style={{ color: "black", textDecoration: "none" }}>
                Home
              </HashLink>
            </Nav.Link>

            <Nav.Link className="header__text">
              <HashLink
                to="/story/#Story"
                style={{ color: "black", textDecoration: "none" }}>
                Story
              </HashLink>
            </Nav.Link>

            <Nav.Link className="header__text">
              <HashLink
                to="/#venue"
                style={{ color: "black", textDecoration: "none" }}>
                Venue
              </HashLink>
            </Nav.Link>
            <Nav.Link className="header__text">
              <HashLink
                to="/#iternary"
                style={{ color: "black", textDecoration: "none" }}>
                Iternary
              </HashLink>
            </Nav.Link>
            <Nav.Link>
              <HashLink
                to="/#rsvp"
                className="header__text"
                style={{ color: "black", textDecoration: "none" }}>
                RSVP
              </HashLink>
            </Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

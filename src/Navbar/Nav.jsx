import { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav class="navbar navbar-dark  nav-bg-color navbar-expand-md px-3">
          <a href="hi.html" class="navbar-brand fs-3 fw-bold">
            Saran
          </a>
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse justify-content-end" id="navbar">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a href="hi.html" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="hi.html" class="nav-link">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="hi.html" class="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        
      </>
    );
  }
}

export default Navbar;

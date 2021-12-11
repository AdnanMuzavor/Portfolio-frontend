import React from "react";
import { NavLink } from "react-router-dom";
import WebIcon from '@material-ui/icons/Web';
//bg-light from nav tag
function Navbar() {
  return (
    <>
      {/* <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto"> */}
            <nav className="navbar navbar-expand-lg navbar-light nvbg">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                
                  I-Coder
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                       exact activeClassName="menu_active"
                        exact className="nav-link "
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about"  exact activeClassName="menu_active">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/projects"  exact activeClassName="menu_active">
                        Projects
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/gallery"  exact activeClassName="menu_active">
                        Gallery                                                    </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/services"  exact activeClassName="menu_active">
                       Services                                                    </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact"  exact activeClassName="menu_active">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
              
                </div>
              </div>
            </nav>
          {/* </div>
        </div>
      </div> */}
    </>
  );
}
export default Navbar;

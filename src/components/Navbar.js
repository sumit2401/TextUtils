//the first letter of the name of files inside the omponents must be in capital letters
import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
    >
      {/* we can use template literal inside back tick(``)  */}
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          {/* use $ sign to use variables in string */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            {/* mode==='light'?'dark':'light' means if(mode===light){
        return dark;
       }
       else{
        light
       } */}
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
//prop type simply says that this prop have this type
Navbar.propTypes = {
  title: PropTypes.string.isRequired, //is required means that we must pass the prop value
  aboutText: PropTypes.string,
};
// it show error when we send the different type of values.
//like in here we set the proptypes of title is string ... and if we write any value other than string then it weill show error
//ex-  <Navbar title={4} aboutText="About us"/> so from the example we cam clearly see that the value which is written in title is different from the proptype that's why its is not acceptable

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About text here",
};

//when we don't pass the prop value in case we use this defaltu prop
//ex- <Navbar/> in here we didn't pass any prop value so in this case the value will pass which we set in
//defalut prop

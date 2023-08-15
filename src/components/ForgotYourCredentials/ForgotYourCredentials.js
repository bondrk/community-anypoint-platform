import "./ForgotYourCredentials.css";
import React, { useState, useEffect } from "react";
import "../Css/Common.css";
import "../Css/SignInSignUp.css";
import { ImArrowLeft2 } from "react-icons/im";
import { Link, Route, useNavigate, Routes } from "react-router-dom";
const ForgotYourCrendentials = () => {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  useEffect(() => {
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated) {
      navigate("/community-platform-home");
    }
  }, [navigate]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    hideError();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      displayError("Required.");
      return;
    }

    const emailRegex = new RegExp(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    ); // Email regex
    const usernameRegex = new RegExp("^[a-zA-Z_]+$"); // Username regex

    if (!emailRegex.test(inputValue) && !usernameRegex.test(inputValue)) {
      displayError("Please enter a valid username or email.");
      return;
    }

    // Field is valid, perform form submission logic here

    setInputValue("");
  };

  const displayError = (message) => {
    setErrorMessage(message);
    setIsErrorVisible(true);
  };

  const hideError = () => {
    setErrorMessage("");
    setIsErrorVisible(false);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className="my-form">
      <figure className="image is-128x128 mule-logo pt-4">
        <img src="./Images/Mulelogo2.png" alt="page-logo" />
      </figure>
      <div className="wrapper">
        <div className="columns is-centered is-mobile">
          <div className="column is-4-widescreen is-6-tablet is-5-desktop is-4-fullhd is-flex-mobile is-justify-content-center is-flex-fullhd mx-3">
            <div className="card">
              <div className="card-content mx-4 my-4">
                <h1 className="mb-5 has-text-weight-bold is-size-5 mt-4 is-size-5-desktop has-text-centered">
                  Forgot your credentials ?
                </h1>
                <div className="context is-justify-content-center">
                  <p className="main-cont mb-3">
                    If you forgot your username, enter your email address to
                    receive a list of your usernames.
                  </p>
                  <p className="main-cont mb-3">
                    If you forgot your password, enter your username to reset
                    your password and create a new one.
                  </p>
                </div>

                <div className="content">
                  <div className={`field ${isErrorVisible ? "has-error" : ""}`}>
                    <div
                      className={`control ${
                        isInputFocused ? "is-focused" : ""
                      }`}
                    >
                      <input
                        className={`input ${isErrorVisible ? "is-danger" : ""}`}
                        type="text"
                        placeholder="Email address or username"
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        style={{
                          borderColor:
                            isInputFocused && !isErrorVisible ? "#00a2df" : "",
                          boxShadow:
                            isInputFocused && !isErrorVisible
                              ? "0 0 8px 0 rgba(0, 162, 223, 0.4)"
                              : "",
                        }}
                      />
                    </div>
                    {isErrorVisible && (
                      <p className="error-style">{errorMessage}</p>
                    )}
                  </div>
                  <div className="buttons">
                    <button
                      className="button is-fullwidth btn is-primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Request credentials
                    </button>
                  </div>
                </div>
                <Link to="/login" className="forgot-pass__link">
                  <span className="font-icon">
                    <ImArrowLeft2 />
                  </span>
                  <span className="signin-forcre">Back to sign in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="columns has-text-centered mt-1 mb-1">
          <div className="column">
            <span className="has-text-white">
              Don't have an account ?
              <button
                type="submit"
                className="button-signup"
                onClick={navigateToSignUp}
              >
                Sign up
              </button>
              <Routes>
                <Route path="/signup" element={<ForgotYourCrendentials />} />
              </Routes>
            </span>
          </div>
        </div>
      </div>

      <footer className="footer has-text-white">
        <div className="content has-text-centered">
          <span className="ftr-com">
            &copy;2023 MuleSoft Community, a Open source platform —
          </span>{" "}
          <a href="Privacy Policy" className="has-text-white footer-link">
            Privacy policy
          </a>
          <span> — </span>
          <a href="Cookie preferences" className="has-text-white footer-link">
            {" "}
            Cookie preferences
          </a>
        </div>
      </footer>
    </div>
  );
};
export default ForgotYourCrendentials;

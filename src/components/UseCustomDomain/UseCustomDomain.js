import "./UseCustomDomain.css";
import { useState, useEffect } from "react";
import "../Css/Common.css";
import "../Css/SignInSignUp.css";
import { ImArrowLeft2 } from "react-icons/im";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
const UseCustomDomain = () => {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };
  useEffect(() => {
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated) {
      navigate("/community-platform-home");
    }
  }, [navigate]);
  const [text, setText] = useState("");
  const [enteredData, setEnteredData] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleTextChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 30) {
      setText(inputValue);
      setEnteredData(inputValue);
      setIsErrorVisible(false);
    }
  };
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() === "") {
      setIsErrorVisible(true);
      return;
    }

    // Perform form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="my-form ">
      <figure className="image is-128x128 mule-logo pt-4">
        <img src="./Images/Mulelogo2.png" alt="page-logo" />
      </figure>
      <div className="wrapper">
        <div className="columns is-centered is-mobile is-fullhd">
          <div className="column is-4-widescreen is-7-tablet is-5-desktop is-4-fullhd is-flex-mobile is-justify-content-center is-flex-fullhd mx-3 is-flex-tablet">
            <div className="card">
              <div className="card-content mx-4 my-4">
                <h1 className="mb-5 has-text-weight-bold is-size-5 is-size-5-desktop has-text-centered">
                  Use custom domain
                </h1>
                <p className="main-cont">
                  To go to your company’s login page, enter the organization
                  domain name.
                </p>
                <div className="content mt-3">
                  <div className={`field ${isErrorVisible ? "has-error" : ""}`}>
                    <div
                      className={`control ${
                        isInputFocused ? "is-focused" : ""
                      }`}
                    >
                      <input
                        className={`input ${isErrorVisible ? "is-danger" : ""}`}
                        type="text"
                        value={text}
                        onFocus={handleInputFocus}
                        onChange={handleTextChange}
                        placeholder="Organization domain"
                        style={{
                          borderColor:
                            isInputFocused && !isErrorVisible ? "#00a2df" : "",
                          boxShadow:
                            isInputFocused && !isErrorVisible
                              ? "0 0 8px 0 rgba(0, 162, 223, 0.4)"
                              : "",
                        }}
                      />
                      {isErrorVisible && (
                        <p className="error-style">Required.</p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">
                      <span className="use--cust__dom">
                        https://community.mulesoft.com/login/domain/
                      </span>
                      <span className="custom-label-value">{enteredData}</span>
                    </label>
                  </div>
                  <div className="buttons">
                    <button
                      className="button btn is-fullwidth is-primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Continue
                    </button>
                  </div>
                  <Link to="/login" className="use--cust__link">
                    <span className="fonts-icon">
                      <ImArrowLeft2 />
                    </span>
                    <span className="signin-usecust">Back to sign in</span>
                  </Link>
                </div>
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
                <Route path="/signup" element={<UseCustomDomain />} />
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
export default UseCustomDomain;

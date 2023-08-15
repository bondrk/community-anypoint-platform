import "./Login.css";
import { useState, useEffect } from "react";
import "../Css/Common.css";
import "../Css/SignInSignUp.css";
import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isUsernameErrorVisible, setIsUsernameErrorVisible] = useState(false);
  const [isPasswordErrorVisible, setIsPasswordErrorVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated) {
      navigate("/community-platform-home");
    }
  }, [navigate]);
  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    setIsUsernameFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUsernameErrorVisible(true);
    setIsPasswordErrorVisible(true);

    if (username.trim() === "" || password.trim() === "") {
      setError("Required");
      setIsErrorVisible(true);
    } else if (username !== "dummy" || password !== "dummy") {
      setError("Your credentials are not valid.");
      setIsErrorVisible(true);
    } else {
      setError("");
      setIsErrorVisible(false);
      localStorage.setItem("authenticated", "true");
      navigate("/community-platform-home");
      console.log("Login successful");
    }
  };

  const handleInputChange = (e) => {
    setError("");
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="form-page has-text-centered">
      <div className="container form-login">
        <figure className="image is-128x128 mule-logo pt-4">
          <img src="./Images/Mulelogo2.png" alt="page-logo" />
        </figure>
        <div className="wrapper">
          <div className="columns is-centered is-fullhd ">
            <div className="column is-5-widescreen is-6-tablet is-5-desktop is-flex-mobile is-justify-content-center mx-3 is-4-fullhd is-flex-direction-column-mobile">
              <div className="card ">
                <div className="card-content mx-4 my-4">
                  <h1 className="mb-5 has-text-weight-bold is-size-5 mt-4 is-size-5-desktop has-text-centered">
                    Sign in to Community Platform
                  </h1>
                  {error &&
                    !(username.trim() === "" || password.trim() === "") && (
                      <p className="help has-text-white has-background-danger py-2 is-size-6 mb-4">
                        {error}
                      </p>
                    )}
                  <div className="content">
                    <div className="field mb-2">
                      <input
                        className={`input ${
                          isErrorVisible ? "is-danger" : "input mb-2"
                        }`}
                        onFocus={handleUsernameFocus}
                        onBlur={handleUsernameBlur}
                        style={{
                          borderColor:
                            isUsernameFocused && !isUsernameErrorVisible
                              ? "#00a2df"
                              : "",
                          boxShadow:
                            isUsernameFocused && !isUsernameErrorVisible
                              ? "0 0 8px 0 rgba(0, 162, 223, 0.4)"
                              : "",
                        }}
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                        placeholder="Username"
                      />
                      {error && username.trim() === "" && (
                        <p className="is-flex error-style">{error}</p>
                      )}
                    </div>
                    <div className="field">
                      <div
                        className={`control ${
                          error &&
                          password.trim() === "" &&
                          "has-icons-right is-danger"
                        }`}
                      >
                        <div className="password-input-wrapper">
                          <input
                            className={`input ${
                              isErrorVisible ? "is-danger" : "input mb-2"
                            }`}
                            onFocus={handlePasswordFocus}
                            onBlur={handlePasswordBlur}
                            style={{
                              borderColor:
                                isPasswordFocused && !isPasswordErrorVisible
                                  ? "#00a2df"
                                  : "",
                              boxShadow:
                                isPasswordFocused && !isPasswordErrorVisible
                                  ? "0 0 8px 0 rgba(0, 162, 223, 0.4)"
                                  : "",
                            }}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            placeholder="Password"
                          />
                          {password.trim() !== "" && (
                            <div className="show-hide-container">
                              <span
                                className={`show-hide-text ${
                                  showPassword ? "show" : "hide"
                                }`}
                                onClick={togglePasswordVisibility}
                              >
                                {showPassword ? "Hide" : "Show"}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      {error && password.trim() === "" && (
                        <p className="is-flex error-style">{error}</p>
                      )}
                    </div>
                    <div className="buttons">
                      <button
                        className="button is-fullwidth btn is-primary"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Sign in
                      </button>
                    </div>
                    <nav className="level my-3 has-text-centered ">
                      <div className="level-left">
                        <div className="level-item">
                          <Link to="/retrive-username" className="for-get-link">
                            Forget your credentials?
                          </Link>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-right">
                          <Link
                            to="/use-custom-domain"
                            className="use-cust-link"
                          >
                            Use custom domain
                          </Link>
                        </div>
                      </div>
                    </nav>
                    <div className="is-size-7 has-text-weight-bold mt-4 is-flex is-align-items-center is-justify-content-center">
                      <span className="has-text-danger mr-1">*</span>
                      Username : "dummy" & password : "dummy"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns mt-1 mb-1">
            <div className="column">
              <span className="has-text-white">
                Don't have an account?
                <button
                  type="submit"
                  className="button-signup"
                  onClick={navigateToSignUp}
                >
                  Sign up
                </button>
                <Routes>
                  <Route path="/signup" element={<Login />} />
                </Routes>
              </span>
            </div>
          </div>
        </div>
        <footer className="footer has-text-white is-m">
          <div className="content">
            <span className="ftr-com">
              &copy;2023 MuleSoft Community, an Open Source platform —
            </span>{" "}
            <a href="Privacy Policy" className="has-text-white footer-link">
              Privacy policy
            </a>
            <span> — </span>
            <a href="Cookie preferences" className="has-text-white footer-link">
              Cookie preferences
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Login;

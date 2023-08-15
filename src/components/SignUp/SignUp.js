import { useNavigate, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SignUp.css";
import "../Css/Common.css";
import "../Css/SignInSignUp.css";
import ReCAPTCHA from "react-google-recaptcha";
const SignUp = () => {
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate("/login");
  };
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [company, setCompany] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [username, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState([]);
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");

  useEffect(() => {
    // Check authentication status when the component mounts
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated) {
      navigate("/community-platform-home");
    }
  }, [navigate]);
  const handleFullNameChange = (event) => {
    const value = event.target.value;
    setFullName(value);

    if (!value.trim() || value.trim().split(" ").length < 2) {
      setFullNameError("Enter your first name and last name");
    } else {
      setFullNameError("");
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!value.trim()) {
      setEmailError("");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);

    if (!value.trim()) {
      setPhoneNumberError("");
    } else if (!/^(\+91[-\s])?[0]?(91)?[6789]\d{9}$/.test(value)) {
      setPhoneNumberError("Please enter a valid phone number");
    } else {
      setPhoneNumberError("");
    }
  };
  const handleCompanyChange = (event) => {
    const value = event.target.value;
    setCompany(value);

    if (value.trim().length < 2) {
      setCompanyError("Use at least 2 characters");
    } else {
      setCompanyError("");
    }
  };
  const handleUserNameChange = (event) => {
    const value = event.target.value;
    setUserName(value);

    if (value.trim().length < 2) {
      setUserNameError("Use atleast 3 characters long");
    } else {
      setUserNameError("");
    }
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    let errors = [];

    if (value.length < 8) {
      errors.push("Use at least 8 characters");
    }

    if (!/\d/.test(value)) {
      errors.push("Use at least 1 number");
    }

    if (!/[a-z]/.test(value)) {
      errors.push("Use at least 1 lowercase character");
    }

    if (!/[A-Z]/.test(value)) {
      errors.push("Use at least 1 uppercase character");
    }

    setPasswordError([...errors]);
  };
  const handleRecaptchaChange = (value) => {
    if (value) {
      setRecaptchaChecked(true);
      setRecaptchaError("");
    } else {
      setRecaptchaChecked(false);
      setRecaptchaError("Required");
    }
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaChecked(false);
    setRecaptchaError("Required");
  };

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setCheckboxChecked(checked);

    if (checked) {
      setCheckboxError("");
    } else {
      setCheckboxError("Required");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isFormValid = true;

    if (!fullName.trim() || fullName.trim().split(" ").length < 2) {
      setFullNameError("Enter your first name and last name");
      isFormValid = false;
    }

    if (!email.trim()) {
      setEmailError("Please enter your email address");
      isFormValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError("Please enter a valid email address");
      isFormValid = false;
    }

    if (!phoneNumber.trim()) {
      setPhoneNumberError("Please enter your phone number");
      isFormValid = false;
    } else if (!/^(\+91[-\s])?[0]?(91)?[6789]\d{9}$/.test(phoneNumber)) {
      setPhoneNumberError("Please enter a valid phone number");
      isFormValid = false;
    }

    if (company.trim().length < 2) {
      setCompanyError("Use at least 2 characters");
      isFormValid = false;
    }

    if (username.trim().length < 3) {
      setUserNameError("Use at least 3 characters long");
      isFormValid = false;
    }

    let passwordErrors = [];

    if (password.length < 8) {
      passwordErrors.push("Use at least 8 characters");
    }

    if (!/\d/.test(password)) {
      passwordErrors.push("Use at least 1 number");
    }

    if (!/[a-z]/.test(password)) {
      passwordErrors.push("Use at least 1 lowercase letter");
    }

    if (!/[A-Z]/.test(password)) {
      passwordErrors.push("Use at least 1 uppercase letter");
    }
    setPasswordError(passwordErrors);

    if (!recaptchaChecked) {
      setRecaptchaError("Required");
      isFormValid = false;
    }

    if (!checkboxChecked) {
      setCheckboxError("Required");
      isFormValid = false;
    }
    if (isFormValid) {
      // Proceed with form submission
      console.log("Form submitted");
      console.log("Full Name:", fullName);
      console.log("Email:", email);
      console.log("Phone Number:", phoneNumber);
      console.log("Company:", company);
      console.log("Username:", username);
      console.log("Password:", password);
      localStorage.setItem("authenticated", "true");
      navigate("/community-platform-home");
    }
  };
  return (
    <div className="my-form">
      <figure className="image is-128x128 mule-logo pt-4">
        <img src="./Images/Mulelogo2.png" alt="page-logo" />
      </figure>
      <div className="wrapper">
        <div className="columns is-centered ">
          <div className="column is-4-widescreen is-6-tablet is-5-desktop is-4-fullhd is-flex-mobile is-justify-content-center is-flex-fullhd mx-3">
            <div className="card form-cont">
              <div className="card-content mx-4 my-4">
                <h1 className="mb-5 has-text-weight-bold is-size-5 mt-4 is-size-5-desktop has-text-centered">
                  Sign in to Community Platform
                </h1>
                <div className="content mt-2 mb-3">
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Full name"
                      value={fullName}
                      onChange={handleFullNameChange}
                      className={
                        fullNameError
                          ? "input is-danger"
                          : "input custom-style  mb-2"
                      }
                    />
                    {fullNameError && (
                      <p className="error-style">{fullNameError}</p>
                    )}
                  </div>

                  <div className="field">
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleEmailChange}
                      className={
                        emailError
                          ? "input is-danger"
                          : "input custom-style mb-2"
                      }
                    />
                    {emailError && <p className="error-style">{emailError}</p>}
                  </div>

                  <div className="field">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      className={
                        phoneNumberError
                          ? "input is-danger"
                          : "input custom-style  mb-2"
                      }
                    />
                    {phoneNumberError && (
                      <p className="error-style">{phoneNumberError}</p>
                    )}
                  </div>

                  <div className="field">
                    <input
                      className={
                        companyError
                          ? "input is-danger"
                          : "input custom-style  mb-2"
                      }
                      type="text"
                      placeholder="Company"
                      value={company}
                      onChange={handleCompanyChange}
                    />
                    {companyError && (
                      <p className="error-style">{companyError}</p>
                    )}
                  </div>

                  <div className="field">
                    <input
                      className={
                        userNameError
                          ? "input is-danger"
                          : "input custom-style  mb-2"
                      }
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={handleUserNameChange}
                    />
                    {userNameError && (
                      <p className="error-style">{userNameError}</p>
                    )}
                  </div>

                  <div className="field">
                    <input
                      className={`input ${
                        passwordError.length > 0
                          ? "is-danger"
                          : "input custom-style mb-2"
                      }`}
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {passwordError.map((error, index) => (
                      <p key={index} className="error-style">
                        {error}
                      </p>
                    ))}
                  </div>

                  <div className="captcha is-flex is-justify-content-center mb-1">
                    <ReCAPTCHA
                      className="g-recaptcha"
                      sitekey="6LdrwXImAAAAALqU9wpEtZ9OR9i4hX6UvbLGlN5W"
                      onChange={handleRecaptchaChange}
                      onExpired={handleRecaptchaExpired}
                    />
                  </div>
                  {recaptchaError && (
                    <p className="error-style">{recaptchaError}</p>
                  )}
                  <div className="check-box__Footer">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        name="checkbox"
                        checked={checkboxChecked}
                        onChange={handleCheckboxChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <footer className="checkbox--for__form">
                      I agree to MuleSoft's
                      <a href="terms of service" className="terms-link">
                        <span> </span>terms of service
                      </a>
                      <span> </span>and <span> </span>
                      <a href="privacy policy" className="privacy-link">
                        <span> </span>privacy policy.
                      </a>
                    </footer>
                  </div>
                  {checkboxError && (
                    <p className="error-style">{checkboxError}</p>
                  )}
                  <div className="buttons mt-4">
                    <button
                      className="button is-fullwidth btn is-primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Accept and create account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns has-text-centered mt-1 mb-1">
          <div className="column">
            <span className="has-text-white">
              Already have an account ?
              <button
                type="submit"
                className="button-signin"
                onClick={navigateToSignIn}
              >
                Sign in
              </button>
              <Routes>
                <Route path="/login" element={<SignUp />}></Route>
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
export default SignUp;

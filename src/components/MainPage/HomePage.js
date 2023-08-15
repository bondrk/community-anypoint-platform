import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { BsBuildings, BsArrowRightShort } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineHelp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiNotebook, PiChatsFill, PiNote } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { VscSignOut } from "react-icons/vsc";
import { GoPerson } from "react-icons/go";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const settings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [hoveredComponent, setHoveredComponent] = useState(null);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const navigateToComingsoon = () => {
    // 👇️ navigate to /contacts
    navigate("/coming-soon");
  };
  const handleSignOut = () => {
    localStorage.removeItem("authenticated");
    navigate("/");
  };
  const handleMouseEnter = (component) => {
    setHoveredComponent(component);
  };

  const handleMouseLeave = () => {
    setHoveredComponent(null);
  };

  const toggleSidebar = () => {
    const newSidebarOpenState = !isSidebarOpen;
    setSidebarOpen(newSidebarOpenState);
    setOverlayVisible(newSidebarOpenState);
    setActiveDropdown(null);
  };

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const handleDropdownClick = (dropdownId) => {
    if (windowWidth >= 1023) {
      setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        activeDropdown &&
        !navbarRef.current.contains(event.target) &&
        !event.target.classList.contains("dropdown-toggle")
      ) {
        setActiveDropdown(null);
      }
    };
    const authenticated = localStorage.getItem("authenticated");
    if (!authenticated) {
      navigate("/");
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeDropdown, navigate]);
  return (
    <div className="my-homepage">
      <div className="nav-bar">
        <nav className="navbar is-transparent is-fixed-top" ref={navbarRef}>
          <div className="navbar-brand">
            <p className="navbar-item" onClick={toggleSidebar}>
              <RiMenu2Line size={22} />
            </p>
            <a
              className="navbar-item"
              href="/#"
              onClick={() => window.location.reload()}
            >
              <img src="./Images/mulecommunity.svg" alt="page-logo" />
              <a
                className="pl-2 has-text-white has-text-weight-bold is-size-5"
                href="/community-platform-home"
              >
                Community Platform
              </a>
            </a>
            <div className={`sidebar ${isSidebarOpen ? "open" : "close"}`}>
              <aside className="menu narrower-menu ">
                <div className="is-flex is-align-items-center ml-3">
                  <img
                    src="./Images/mulecommunity.svg"
                    alt="page-logo"
                    height={35}
                    width={35}
                  />
                  <a
                    className="menu-label is-capitalized has-text-white head-sidebar pl-3"
                    href="/community-platform-home"
                  >
                    community Platform
                  </a>
                  <span className="icon-close ml-4" onClick={toggleSidebar}>
                    <RiCloseLine size={20} />
                  </span>
                </div>
                <ul className="menu-list pl-3 mt-1 pb-3 side-bar__comp mt-3">
                  <li
                    className={`is-flex is-align-items-center mb-4 ${
                      hoveredComponent === "codeBuilder" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("codeBuilder")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="image-container">
                      <img
                        src={
                          hoveredComponent === "codeBuilder"
                            ? "./Images/api-portal-color.svg"
                            : "./Images/api-portal-greyscale.svg"
                        }
                        alt="page-logo"
                        height={35}
                        width={35}
                      />
                    </div>
                    <Link to="/coming-soon" className="main-menu__sidebar">
                      Code Builder (BETA)
                    </Link>
                  </li>
                  <li
                    className={`is-flex is-align-items-center mb-4 ${
                      hoveredComponent === "designCenter" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("designCenter")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="image-container">
                      <img
                        src={
                          hoveredComponent === "designCenter"
                            ? "./Images/design-center-color.svg"
                            : "./Images/design-center-greyscale.svg"
                        }
                        alt="page-logo"
                        height={35}
                        width={35}
                      />
                    </div>
                    <Link to="/coming-soon" className="main-menu__sidebar">
                      Design Center
                    </Link>
                  </li>
                  <li
                    className={`is-flex is-align-items-center mb-4 ${
                      hoveredComponent === "exchange" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("exchange")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="image-container">
                      <img
                        src={
                          hoveredComponent === "exchange"
                            ? "./Images/xchange-color.svg"
                            : "./Images/xchange-greyscale.svg"
                        }
                        alt="page-logo"
                        height={35}
                        width={35}
                      />
                    </div>
                    <Link to="/coming-soon" className="main-menu__sidebar">
                      Exchange
                    </Link>
                  </li>
                  <li
                    className={`is-flex is-align-items-center mb-4 ${
                      hoveredComponent === "dataGraph" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("dataGraph")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="image-container">
                      <img
                        src={
                          hoveredComponent === "dataGraph"
                            ? "./Images/service-mesh-color.svg"
                            : "./Images/service-mesh-grayscale.svg"
                        }
                        alt="page-logo"
                        height={35}
                        width={35}
                      />
                    </div>
                    <Link to="/coming-soon" className="main-menu__sidebar">
                      Data graph
                    </Link>
                  </li>
                </ul>
                <div
                  className={`is-flex is-align-items-center mb-4 ml-3 ${
                    hoveredComponent === "managementCenter" ? "hovered" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("managementCenter")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="image-container">
                    <img
                      src={
                        hoveredComponent === "managementCenter"
                          ? "./Images/manage-center-color.svg"
                          : "./Images/manage-center-greyscale.svg"
                      }
                      alt="page-logo"
                      height={35}
                      width={35}
                    />
                  </div>
                  <h2 className="menu-label is-capitalized side-bar__comp mt-0 ml-3">
                    Management center
                  </h2>
                </div>
                <ul className="menu-list side-bar__comp mt-4">
                  <li
                    className={`is-flex is-align-items-center ml-6 ${
                      hoveredComponent === "accessManagement" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("accessManagement")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="image-container">
                      <img
                        src={
                          hoveredComponent === "accessManagement"
                            ? "./Images/access-management-color.svg"
                            : "./Images/access-management-greyscale.svg"
                        }
                        alt="page-logo"
                        height={35}
                        width={35}
                      />
                    </div>
                    <Link to="/coming-soon" className="main-menu__sidebar">
                      Access management
                    </Link>
                  </li>
                  <li
                    className={`is-flex is-align-items-center ml-6 mt-4 ${
                      hoveredComponent === "apiManager" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("apiManager")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="image-container">
                      <img
                        src={
                          hoveredComponent === "apiManager"
                            ? "./Images/api-manager-color.svg"
                            : "./Images/api-manager-greyscale.svg"
                        }
                        alt="page-logo"
                        height={35}
                        width={35}
                      />
                    </div>
                    <Link to="/coming-soon" className="main-menu__sidebar">
                      API Manager
                    </Link>
                  </li>
                  <li
                    className={`is-flex is-align-items-center ml-6 mt-4 ${
                      hoveredComponent === "runtimeManager" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("runtimeManager")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="image-container">
                      <img
                        src={
                          hoveredComponent === "runtimeManager"
                            ? "./Images/runtime-manager-color.svg"
                            : "./Images/runtime-manager-greyscale.svg"
                        }
                        alt="page-logo"
                        height={35}
                        width={35}
                      />
                    </div>
                    <Link
                      to="/runtime-manager/application"
                      className="main-menu__sidebar"
                    >
                      Runtime manager
                    </Link>
                  </li>
                  <li
                    className={`is-flex is-align-items-center ml-6 mt-4 ${
                      hoveredComponent === "apiGovernance" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("apiGovernance")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="image-container">
                      <img
                        src={
                          hoveredComponent === "apiGovernance"
                            ? "./Images/edge-security-color.svg"
                            : "./Images/edge-security-greyscale.svg"
                        }
                        alt="page-logo"
                        height={35}
                        width={35}
                      />
                    </div>
                    <Link to="/coming-soon" className="main-menu__sidebar">
                      API Governance
                    </Link>
                  </li>
                  <li
                    className={`is-flex is-align-items-center ml-6 mt-4 ${
                      hoveredComponent === "visualizer" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("visualizer")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="image-container">
                      <img
                        src={
                          hoveredComponent === "visualizer"
                            ? "./Images/visualizer-color.svg"
                            : "./Images/visualizer-greyscale.svg"
                        }
                        alt="page-logo"
                        height={35}
                        width={35}
                      />
                    </div>
                    <Link to="/coming-soon" className="main-menu__sidebar">
                      Visualizer
                    </Link>
                  </li>
                  <li
                    className={`is-flex is-align-items-center ml-6 mt-4 ${
                      hoveredComponent === "monitoring" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("monitoring")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="image-container">
                      <img
                        src={
                          hoveredComponent === "monitoring"
                            ? "./Images/monitoring-color.svg"
                            : "./Images/monitoring-greyscale.svg"
                        }
                        alt="page-logo"
                        height={35}
                        width={35}
                      />
                    </div>
                    <Link to="/coming-soon" className="main-menu__sidebar">
                      Monitoring
                    </Link>
                  </li>
                  <li
                    className={`is-flex is-align-items-center ml-6 mt-4 ${
                      hoveredComponent === "secretsManager" ? "hovered" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("secretsManager")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="image-container">
                      <img
                        src={
                          hoveredComponent === "secretsManager"
                            ? "./Images/playground-color.svg"
                            : "./Images/playground-greyscale.svg"
                        }
                        alt="page-logo"
                        height={35}
                        width={35}
                      />
                    </div>
                    <Link to="/coming-soon" className="main-menu__sidebar">
                      Secrets manager
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div
              className={`overlay ${isOverlayVisible ? "show" : ""}`}
              onClick={toggleSidebar}
              style={{ display: isSidebarOpen ? "block" : "none" }}
            ></div>
            <button
              className={`navbar-burger burger ${
                isNavbarOpen ? "is-active" : ""
              }`}
              aria-label="menu"
              aria-expanded={isNavbarOpen ? "true" : "false"}
              onClick={toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className={`navbar-menu ${isNavbarOpen ? "is-active" : ""}`}>
            <div className="navbar-end mr-2">
              <div
                className={`navbar-item has-dropdown is-hidden-mobile ${
                  activeDropdown === "dropdown1" ? "is-active" : ""
                }`}
                onClick={() => handleDropdownClick("dropdown1")}
              >
                <Link
                  className="navbar-link  navbar-1 is-arrowless"
                  href="#"
                  role="button"
                  rel="noopener noreferrer"
                >
                  <BsBuildings />
                  <p className="ml-1 has-text-weight-bold is-hidden-touch">
                    Mulecraft Ind Pvt Limited
                  </p>
                </Link>
                <div className="navbar-dropdown is-boxed pb-5 pl-5 pt-4 navbar-dropdown1">
                  <a className="navbar-item" href="/#">
                    <p className="has-text-weight-bold mr-2">Business Groups</p>
                    <FiExternalLink size={15} />
                  </a>
                  <div className="navbar-item is-block root-ele mt-4">
                    <p className="is-size-7">-Root-</p>
                    <p className="has-text-weight-bold com-name">
                      Mulecraft Ind Pvt Limited
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`navbar-item is-hidden-mobile has-dropdown ${
                  activeDropdown === "dropdown2" ? "is-active" : ""
                }`}
                onClick={() => handleDropdownClick("dropdown2")}
              >
                <Link
                  className="navbar-link is-arrowless"
                  href="#"
                  role="button"
                  rel="noopener noreferrer"
                >
                  <MdOutlineHelp size={20} />
                </Link>
                <div className="navbar-dropdown is-boxed navbar-dropdown2">
                  <h5 className="navbar-item is-uppercase is-size-7 has-text-weight-bold py-4">
                    anypoint platform help
                  </h5>
                  <a
                    className="navbar-item is-flex-touch is-align-items-center py-2"
                    href="https://docs.mulesoft.com/design-center/design-create-publish-api-fragment"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiNotebook size={20} />
                    <p className="ml-2">
                      Create and Publish an API Fragment in <br />
                      the Text Editor in API Designer
                    </p>
                  </a>
                  <a
                    className="navbar-item is-flex-touch is-align-items-center py-2"
                    href="https://docs.mulesoft.com/design-center/design-create-publish-api-raml-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiNotebook size={20} />{" "}
                    <span className="ml-2 ">
                      Create an API Specification with the <br />
                      Text Editor
                    </span>
                  </a>
                  <a
                    className="navbar-item is-flex-touch is-align-items-center py-2 mb-4"
                    href="https://docs.mulesoft.com/design-center/spec-api-public-exchange"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiNotebook size={20} />{" "}
                    <span className="ml-2 ">
                      API Specification for MuleSoft <br />
                      Connectivity Ecosystem
                    </span>
                  </a>
                  <hr className="dropdown-divider" />
                  <a
                    className="navbar-item is-flex-touch is-align-items-center py-3 mt-5"
                    href="https://help.mulesoft.com/s/resources"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiNotebook size={20} />
                    <span className="ml-2">Documentation</span>
                  </a>
                  <a
                    className="navbar-item is-flex-touch is-align-items-center py-3"
                    href="https://help.mulesoft.com/s/forum"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiChatsFill size={20} />
                    <span className="ml-2">Forums</span>
                  </a>
                  <a
                    className="navbar-item is-flex-touch is-align-items-center py-3"
                    href="https://help.mulesoft.com/s/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiSupport size={20} />
                    <span className="ml-2">Help Center</span>
                  </a>
                  <a
                    className="navbar-item is-flex-touch is-align-items-center py-3"
                    href="https://help.mulesoft.com/s/training"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LiaUserGraduateSolid size={20} />
                    <span className="ml-2">Training</span>
                  </a>
                  <a
                    className="navbar-item is-flex-touch is-align-items-center py-3 mb-3"
                    href="https://developer.mulesoft.com/tutorials-and-howtos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaRegCompass size={20} />
                    <span className="ml-2">Tutorials</span>
                  </a>
                </div>
              </div>
              <div
                className={`navbar-item has-dropdown ${
                  activeDropdown === "dropdown3" ? "is-active" : ""
                }`}
                onClick={() => handleDropdownClick("dropdown3")}
              >
                <Link
                  className="navbar-link navbar-3 is-arrowless"
                  href="#"
                  rel="noopener noreferrer"
                  role="button"
                >
                  <CgProfile size={20} />
                </Link>
                <div className="navbar-dropdown is-boxed p-5 navbar-dropdown3">
                  <h5 className="has-text-weight-bold is-size-7 ml-4">Demo</h5>
                  <p className="has-text-weight-bold is-size-7 ml-4 mb-4">
                    Demo account
                  </p>
                  <a
                    className="navbar-item mb-3 is-flex-touch is-align-items-center"
                    href="/#"
                  >
                    <GoPerson size={20} />
                    <span className="ml-2">Profile</span>
                  </a>
                  <a
                    className="navbar-item mb-2 is-flex-touch is-align-items-center"
                    href="https://www.salesforce.com/company/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiNote size={20} />
                    <span className="ml-2">Privacy Policy</span>
                  </a>
                  <a
                    className="navbar-item is-flex-touch is-align-items-center"
                    href="/#"
                  >
                    <VscSignOut size={20} />
                    <span className="ml-2" onClick={handleSignOut}>
                      Sign Out
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <section className="hero is-small">
        <div className="hero-body hero-text">
          <p className="title has-text-white is-size-2">Good afternoon !</p>
          <p className="subtitle has-text-white has-text-weight-normal is-size-6">
            Welcome to the #1 platform for APIs and integretions
          </p>
        </div>
      </section>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-4-fullhd is-5-widescreen is-6-desktop is-6-tablet">
            <div className="main-comp">
              <div className="code-builder mt-6">
                <img
                  src="./Images/api-portal-color.svg"
                  alt="code-build"
                  height={40}
                  width={40}
                  className="mr-3"
                />
                <h1 className="is-size-3 has-text-weight-bold">
                  Anypoint Code Builder
                  <span className="beta-element">BETA</span>
                </h1>
                <p className="para-code">
                  Design, develop, and deploy APIs and Integrations.
                </p>
                <button
                  className="button mt-3 btn-all has-text-weight-bold"
                  type="submit"
                  onClick={navigateToComingsoon}
                >
                  Get Started
                </button>
              </div>
              <div className="design-center mt-6">
                <img
                  src="./Images/design-center-color.svg"
                  alt="design-center"
                  height={40}
                  width={40}
                  className="mr-3"
                />
                <span>
                  <h1 className="is-size-3 has-text-weight-bold">
                    Design Center
                  </h1>
                  <p className="para-code">
                    Get started creating Mule applications and APIs. Create
                    visual flows, and build, test, and reuse API specifications
                    and fragments.
                  </p>
                  <button
                    className="button mt-3 btn-all has-text-weight-bold"
                    type="submit"
                    onClick={navigateToComingsoon}
                  >
                    Start designing
                  </button>
                </span>
              </div>
              <div className="exchange mt-6">
                <img
                  src="./Images/xchange-color.svg"
                  alt="xchange"
                  height={40}
                  width={40}
                  className="mr-3"
                />
                <h1 className="is-size-3 has-text-weight-bold">Exchange</h1>
                <p className="para-code">
                  Discover and share reusable APIs, connectors, and templates.
                </p>
                <button
                  className="button mt-3 btn-all has-text-weight-bold"
                  type="submit"
                  onClick={navigateToComingsoon}
                >
                  Discover & Share
                </button>
              </div>
              <div className="platform mt-6">
                <img
                  src="./Images/platform-services-color.svg"
                  alt="xchange"
                  height={40}
                  width={40}
                  className="mr-3"
                />
                <h1 className="is-size-3 has-text-weight-bold">
                  Anypoint Platform
                </h1>
                <p className="para-code">
                  The desktop IDE for building and testing APIs and integrations
                  for Anypoint Platform.
                </p>
                <a
                  className="button mt-3 btn-all has-text-weight-bold"
                  type=""
                  href="https://www.mulesoft.com/lp/dl/anypoint-mule-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download <FiExternalLink size={25} className="pl-2" />
                </a>
              </div>
              <div className="tile-comp mt-5">
                <Slider {...settings}>
                  <a
                    href="https://developer.mulesoft.com/tutorials-and-howtos/getting-started/hello-mule/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="tile tile-comps">
                      <div class="tile is-parent p-0 slide-container">
                        <article className="tile is-child notification">
                          <div className="is-flex is-align-items-center pb-2">
                            <PiNotebook className="pr-2" size={25} />
                            <span>
                              <p className="title has-text-weight-bold">
                                Tutorials
                              </p>
                            </span>
                          </div>
                          <div className="is-flex is-align-items-center">
                            <p class="subtitle has-text-weight-bold mb-1">
                              Getting started with Mulesoft - Hello Mule
                            </p>
                            <span>
                              <BsArrowRightShort
                                className="pl-2 icon-slide"
                                size={25}
                              />
                            </span>
                          </div>
                          <p className="is-size-7">
                            First time using a mulesoft? build an API under 10
                            minutes and deploy it to cloudhub.
                          </p>
                        </article>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://developer.mulesoft.com/tutorials-and-howtos/dataweave/learn-dataweave-with-the-dataweave-playground-getting-started/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="tile tile-comps">
                      <div class="tile is-parent p-0 slide-container">
                        <article className="tile is-child notification">
                          <div className="is-flex is-align-items-center pb-2">
                            <PiNotebook className="pr-2" size={25} />
                            <span>
                              <p className="title has-text-weight-bold">
                                Tutorials
                              </p>
                            </span>
                          </div>
                          <div className="is-flex is-align-items-center">
                            <p className="subtitle has-text-weight-bold mb-1">
                              Learn Dataweave with the DataWeave Playground
                            </p>
                            <span>
                              <BsArrowRightShort
                                className="pl-2 icon-slide"
                                size={25}
                              />
                            </span>
                          </div>
                          <p className="subtitle2">
                            The dataweave playground enables developers to
                            create mock data transformations in their web
                            browser based on an input payload
                          </p>
                        </article>
                      </div>
                    </div>
                  </a>
                </Slider>
              </div>
            </div>
          </div>
          <div className="column is-4-fullhd is-5-widescreen is-6-desktop is-6-tablet">
            <div className="card-comp mt-6">
              <div className="card card-home__page">
                <div className="card-content">
                  <div className="content">
                    <img
                      src="./Images/service-mesh-color.svg"
                      alt="xchange"
                      height={35}
                      width={35}
                      className="mb-2"
                    />
                    <span className="">
                      <h1 className="is-size-4 has-text-weight-bold mb-1">
                        Data graph
                      </h1>
                      <p className="para-code mb-1">
                        Unify many APIs into a single graph of data, and consume
                        exactly the data you need in a single request.
                      </p>
                      <button
                        className="button mt-3 btn-all has-text-weight-bold"
                        type="submit"
                        onClick={navigateToComingsoon}
                      >
                        Unify & Consume
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card mt-6 card-home__page">
                <div className="card-content">
                  <div className="content">
                    <h1 className="has-text-weight-bold is-capitalized is-size-4 mb-5">
                      management center
                    </h1>
                    <hr className="dropdown-divider" />
                    <div className="manage-ment__component is-flex is-flex-direction-column">
                      <a
                        className="is-flex is-align-items-center manage-item"
                        href="/#"
                      >
                        <img
                          src="./Images/access-management-color.svg"
                          alt="access management"
                        />
                        <span className="px-3 manage-cont">
                          <Link
                            to="/coming-soon"
                            className="has-text-black has-text-weight-bold manage-list"
                          >
                            Access management
                          </Link>
                          <p className="li-comp has-text-black">
                            Manage Users,business groups and audit logs.
                          </p>
                        </span>
                        <BsArrowRightShort size={50} className="card-icon" />
                      </a>
                      <Link
                        to="/coming-soon"
                        className="is-flex is-align-items-center  manage-item"
                      >
                        <img
                          src="./Images/api-manager-color.svg"
                          alt="api manager"
                        />
                        <span className="px-3 manage-cont">
                          <Link
                            to="/coming-soon"
                            className="has-text-black has-text-weight-bold manage-list"
                          >
                            API Manager
                          </Link>
                          <p className="li-comp has-text-black">
                            Manage clients, policies SLA's traffic and alerts.
                          </p>
                        </span>
                        <BsArrowRightShort size={50} className="card-icon" />
                      </Link>
                      <Link
                        to="/coming-soon"
                        className="is-flex is-align-items-center  manage-item"
                      >
                        <img
                          src="./Images/runtime-manager-color.svg"
                          alt="runtime-manager"
                        />
                        <span className="px-3 manage-cont">
                          <Link
                            to="/runtime-manager/application"
                            className="has-text-black has-text-weight-bold manage-list"
                          >
                            Runtime Manager
                          </Link>
                          <p className="li-comp has-text-black">
                            Deploy, manage & monitor Deployed applications.
                          </p>
                        </span>
                        <BsArrowRightShort size={50} className="card-icon" />
                      </Link>
                      <Link
                        to="/coming-soon"
                        className="is-flex is-align-items-center  manage-item"
                      >
                        <img
                          src="./Images/edge-security-color.svg"
                          alt="api-governance"
                        />
                        <span className="px-3 manage-cont">
                          <Link
                            to="/coming-soon"
                            className="has-text-black has-text-weight-bold manage-list"
                          >
                            API Governance
                          </Link>
                          <p className="li-comp has-text-black">
                            Govern and monitor API conformation
                          </p>
                        </span>
                        <BsArrowRightShort size={50} className="card-icon" />
                      </Link>
                      <Link
                        to="/coming-soon"
                        className="is-flex is-align-items-center  manage-item"
                      >
                        <img
                          src="./Images/visualizer-color.svg"
                          alt="visualizer"
                        />
                        <span className="px-3 manage-cont">
                          <Link
                            to="/coming-soon"
                            className="has-text-black has-text-weight-bold manage-list"
                          >
                            Visualizer
                          </Link>
                          <p className="li-comp has-text-black">
                            Visualize your aplication network.
                          </p>
                        </span>
                        <BsArrowRightShort size={50} className="card-icon" />
                      </Link>
                      <Link
                        to="/coming-soon"
                        className="is-flex is-align-items-center manage-item"
                      >
                        <img
                          src="./Images/monitoring-color.svg"
                          alt="monitoring"
                        />
                        <span className="px-3 manage-cont">
                          <a
                            className="has-text-black has-text-weight-bold manage-list"
                            href="/#"
                          >
                            Monitoring
                          </a>
                          <p className="li-comp has-text-black">
                            Monitor, search, alert & troubleshoot.
                          </p>
                        </span>
                        <BsArrowRightShort size={50} className="card-icon" />
                      </Link>
                      <Link
                        to="/coming-soon"
                        className="is-flex is-align-items-center manage-item"
                      >
                        <img
                          src="./Images/playground-color.svg"
                          alt="secrets-manager"
                        />
                        <span className="px-3 manage-cont">
                          <Link
                            to="/coming-soon"
                            className="has-text-black has-text-weight-bold manage-list"
                          >
                            Secrets Manager
                          </Link>
                          <p className="li-comp has-text-black">
                            Manage public keys for SSL communication.
                          </p>
                        </span>
                        <BsArrowRightShort size={50} className="card-icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="level nav-level__comp">
          <div className="level-item has-text-centered ">
            <div>
              <a
                className="is-size-7 has-text-weight-bold is-flex is-align-items-center nav-level"
                href="https://help.mulesoft.com/s/resources"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiNotebook className="pr-2" size={25} />
                Documentation
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <a
                className="is-size-7 has-text-weight-bold is-flex is-align-items-center nav-level"
                href="https://help.mulesoft.com/s/training"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaUserGraduateSolid size={25} className="pr-2" />
                Training
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <a
                className="is-size-7 has-text-weight-bold is-flex is-align-items-center  nav-level"
                href="https://help.mulesoft.com/s/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiSupport size={25} className="pr-2" />
                Support Center
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <a
                className="is-size-7 has-text-weight-bold is-flex is-align-items-center  nav-level"
                href="https://help.mulesoft.com/s/forum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiChatsFill size={25} className="pr-2" />
                Forums
              </a>
            </div>
          </div>
        </nav>
      </div>
      <footer className="footer is-flex home-page__footer">
        <div className="content has-text-centered is-flex is-align-items-center">
          <img
            src="./Images/mulecommunity.svg"
            alt="page-logo"
            height={30}
            width={30}
            className="pr-3"
          />
          <p>MuleSoft © Copyright 2023 Open Source Community Platform</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

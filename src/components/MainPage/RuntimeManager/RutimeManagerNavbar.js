import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { BsBuildings } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineHelp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiNotebook, PiChatsFill, PiNote } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { VscSignOut } from "react-icons/vsc";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
function RuntimeManagerNavbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [hoveredComponent, setHoveredComponent] = useState(null);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
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
            <img
              src="https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/runtime-manager-color.svg"
              alt="page-logo"
            />
            <a
              className="pl-2 has-text-white has-text-weight-bold is-size-5"
              href="/runtime-manager/application"
            >
              Runtime Manager
            </a>
          </a>
          <div className={`sidebar ${isSidebarOpen ? "open" : "close"}`}>
            <aside className="menu narrower-menu ">
              <div className="is-flex is-align-items-center ml-3">
                <img
                  src="https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/mulecommunity.svg"
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
              <ul className="menu-list pl-3 mt-1 pb-3  side-bar__comp mt-3">
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
                          ? "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/api-portal-color.svg"
                          : "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/api-portal-greyscale.svg"
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
                          ? "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/design-center-color.svg"
                          : "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/design-center-greyscale.svg"
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
                          ? "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/xchange-color.svg"
                          : "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/xchange-greyscale.svg"
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
                          ? "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/service-mesh-color.svg"
                          : "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/service-mesh-grayscale.svg"
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
                        ? "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/manage-center-color.svg"
                        : "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/manage-center-greyscale.svg"
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
              <ul className="menu-list mt-4 side-bar__comp ">
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
                          ? "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/access-management-color.svg"
                          : "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/access-management-greyscale.svg"
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
                          ? "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/api-manager-color.svg"
                          : "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/api-manager-greyscale.svg"
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
                          ? "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/runtime-manager-color.svg"
                          : "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/runtime-manager-greyscale.svg"
                      }
                      alt="page-logo"
                      height={35}
                      width={35}
                    />
                  </div>
                  <Link to="/runtime-manager" className="main-menu__sidebar">
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
                          ? "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/edge-security-color.svg"
                          : "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/edge-security-greyscale.svg"
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
                          ? "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/visualizer-color.svg"
                          : "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/visualizer-greyscale.svg"
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
                          ? "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/monitoring-color.svg"
                          : "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/monitoring-greyscale.svg"
                      }
                      downo
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
                          ? "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/playground-color.svg"
                          : "https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/playground-greyscale.svg"
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
                <a className="navbar-item " href="/#">
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
              <div className="navbar-dropdown is-boxed navbar-dropdown2 runtime-manager__dropdown2">
                <h5 className="navbar-item is-uppercase is-size-7 has-text-weight-bold py-4 is-uppercase">
                  runtime manager help
                </h5>
                <a
                  className="navbar-item is-flex-touch is-align-items-center py-3"
                  href="https://docs.mulesoft.com/runtime-manager/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiNotebook size={20} />
                  <p className="ml-2 is-capitalized">
                    Anypoint runtime manager
                  </p>
                </a>
                <a
                  className="navbar-item is-flex-touch is-align-items-center py-3"
                  href="https://docs.mulesoft.com/runtime-manager/runtime-manager-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiNotebook size={20} />{" "}
                  <span className="ml-2 is-capitalized">
                    Runtime manager agent
                  </span>
                </a>
                <a
                  className="navbar-item is-flex-touch is-align-items-center py-3 mb-4"
                  href="https://docs.mulesoft.com/runtime-manager/monitoring-dashboards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiNotebook size={20} />{" "}
                  <span className="ml-2 is-capitalized">
                    Monitor dasboards on runtime <br />
                    manager
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
                <Link
                  className="navbar-item is-flex-touch is-align-items-center"
                  href="#"
                >
                  <VscSignOut size={20} />
                  <span className="ml-2" onClick={handleSignOut}>
                    Sign Out
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default RuntimeManagerNavbar;

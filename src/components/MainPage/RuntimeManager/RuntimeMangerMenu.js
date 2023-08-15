import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const RuntimeManagerMenu = () => {
  const [modalActive, setModalActive] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(null);
  const [activeEnvironment, setActiveEnvironment] = useState("Sandbox");
  const [selectedEnvironment, setSelectedEnvironment] = useState("");

  const handleEnvironmentSelect = (env) => {
    setSelectedEnvironment(env);
  };

  const handleEnvironmentSwitch = () => {
    if (selectedEnvironment !== "") {
      setActiveEnvironment(selectedEnvironment);
    }
    setSelectedEnvironment(""); // Clear the selected environment after switching
    closeModal();
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const routeToTabMapping = {
    "/runtime-manager/application": "applications",
    "/runtime-manager/servers": "Servers",
    "/runtime-manager/flexgateways": "Flex Gateways",
    "/runtime-manager/alerts": "Alerts",
    "/runtime-manager/vpc": "VPCs",
    "/runtime-manager/privatespaces": "Private spaces",
    "/runtime-manager/loadbalancers": "Load Balancers",
  };

  const determineActiveTab = () => {
    const tabName = routeToTabMapping[location.pathname];
    setActiveTab(tabName);
  };

  useEffect(() => {
    determineActiveTab();
  });

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <div className="runtime-manager__menu">
      <aside className="menu menu-runtime">
        <button
          className={`button mt-5 ml-2 is-uppercase is-normal px-5 btn-modal ${
            activeEnvironment === "Sandbox" ? "active" : ""
          }`}
          onClick={openModal}
        >
          {activeEnvironment}
        </button>
        <div className="columns">
          <div className="column is-4-fullhd">
            <div className={`modal ${modalActive ? "is-active" : ""}`}>
              <div className="modal-background" onClick={closeModal}></div>
              <div className="modal-content custom-modal-content">
                <div className="card">
                  <div className="card-content switch-part">
                    <div className="content">
                      <h3 className="is-capitalized switch-env">
                        Switch environment
                      </h3>
                      <table className="my-table">
                        <tr>
                          <td
                            className={`table-cont ${
                              selectedEnvironment === "Sandbox"
                                ? "selected"
                                : ""
                            } ${
                              activeEnvironment === "Sandbox" ? "active" : ""
                            }`}
                            onClick={() => handleEnvironmentSelect("Sandbox")}
                          >
                            Sandbox
                            {activeEnvironment === "Sandbox" && (
                              <span className="active-text">Active</span>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td
                            className={`table-cont ${
                              selectedEnvironment === "Design" ? "selected" : ""
                            } ${
                              activeEnvironment === "Design" ? "active" : ""
                            }`}
                            onClick={() => handleEnvironmentSelect("Design")}
                          >
                            Design
                            {activeEnvironment === "Design" && (
                              <span className="active-text">Active</span>
                            )}
                          </td>
                        </tr>
                      </table>

                      <div className="modal-profile__comp mt-6">
                        <Link
                          to="/coming-soon"
                          className="pt-5 pl-5 pr-5 modal-env___Comp"
                        >
                          Open your profile to change the default environment...
                        </Link>
                        <button
                          className="button is-primary is-outlined modal-cancel__btn"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                        <button
                          className="button is-link ml-3 modal-switch__env"
                          onClick={handleEnvironmentSwitch}
                        >
                          Switch
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="menu-list pb-4">
          <li
            className={`menu-items ${
              activeTab === "applications" ? "is-active" : ""
            }`}
            onClick={() => handleTabClick("applications")}
          >
            <Link
              to="/runtime-manager/application"
              className="menu-item"
              style={{
                color: activeTab === "applications" ? "#000000" : "#3a3b3c",
              }}
            >
              Applications
            </Link>
          </li>
          <li
            className={`menu-items ${
              activeTab === "Servers" ? "is-active" : ""
            }`}
            onClick={() => handleTabClick("Servers")}
          >
            <Link
              to="/runtime-manager/servers"
              className="menu-item"
              style={{
                color: activeTab === "Servers" ? "#000000" : "#3a3b3c",
              }}
            >
              Servers
            </Link>
          </li>
          <li
            className={`menu-items ${
              activeTab === "Flex Gateways" ? "is-active" : ""
            }`}
            onClick={() => handleTabClick("Flex Gateways")}
          >
            <Link
              to="/runtime-manager/flexgateways"
              className="menu-item"
              style={{
                color: activeTab === "Flex Gateways" ? "#000000" : "#3a3b3c",
              }}
            >
              Flex Gateways
            </Link>
          </li>
          <li
            className={`menu-items ${
              activeTab === "Alerts" ? "is-active" : ""
            }`}
            onClick={() => handleTabClick("Alerts")}
          >
            <Link
              to="/runtime-manager/alerts"
              className="menu-item"
              style={{
                color: activeTab === "Alerts" ? "#000000" : "#3a3b3c",
              }}
            >
              Alerts
            </Link>
          </li>
        </ul>
        <div class="dotted-line mx-3"></div>
        <ul className="menu-list">
          <li
            className={`menu-items ${activeTab === "VPCs" ? "is-active" : ""}`}
            onClick={() => handleTabClick("VPCs")}
          >
            <Link
              to="/runtime-manager/vpc"
              className="menu-item"
              style={{
                color: activeTab === "VPCs" ? "#000000" : "#3a3b3c",
              }}
            >
              VPCs
            </Link>
          </li>
          <li
            className={`menu-items ${
              activeTab === "Private spaces" ? "is-active" : ""
            }`}
            onClick={() => handleTabClick("Private Spaces")}
          >
            <Link
              to="/runtime-manager/privatespaces"
              className="menu-item is-capitalized"
              style={{
                color: activeTab === "Private spaces" ? "#000000" : "#3a3b3c",
              }}
            >
              Private Spaces
            </Link>
          </li>
          <li
            className={`menu-items ${
              activeTab === "Load Balancers" ? "is-active" : ""
            }`}
            onClick={() => handleTabClick("Load Balancers")}
          >
            <Link
              to="/runtime-manager/loadbalancers"
              className="menu-item is-capitalized"
              style={{
                color: activeTab === "Load Balancers" ? "#000000" : "##3a3b3c",
              }}
            >
              Load Balancers
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};
export default RuntimeManagerMenu;

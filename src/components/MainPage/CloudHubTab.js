import React, { useState } from "react";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";
const CloudHubTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="cloud-hub__tabs">
      {" "}
      <div className="tabs">
        <ul>
          <li
            className={`custom-tab-li ${
              activeTab === "tab1" ? "is-active" : ""
            }`}
          >
            <Link
              className="custom-tab"
              onClick={() => handleTabClick("tab1")}
              href="#"
            >
              <span className="tab-content-width"> Runtime</span>
            </Link>
          </li>
          <li
            className={`custom-tab-li ${
              activeTab === "tab2" ? "is-active" : ""
            }`}
          >
            <Link
              className="custom-tab"
              onClick={() => handleTabClick("tab2")}
              href="#"
            >
              <span className="tab-content-width"> Properties</span>
            </Link>
          </li>
          <li
            className={`custom-tab-li ${
              activeTab === "tab3" ? "is-active" : ""
            }`}
          >
            <Link
              className="custom-tab"
              onClick={() => handleTabClick("tab3")}
              href="#"
            >
              <span className="tab-content-width"> Insight</span>
            </Link>
          </li>
          <li
            className={`custom-tab-li ${
              activeTab === "tab4" ? "is-active" : ""
            }`}
          >
            <Link
              className="custom-tab"
              onClick={() => handleTabClick("tab4")}
              href="#"
            >
              <span className="tab-content-width"> Logging</span>
            </Link>
          </li>
          <li
            className={`custom-tab-li ${
              activeTab === "tab5" ? "is-active" : ""
            }`}
          >
            <Link
              className="custom-tab"
              onClick={() => handleTabClick("tab5")}
              href="#"
            >
              <span className="tab-content-width"> Static IPs</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        {activeTab === "tab1" && (
          <div className="columns is-multiline ">
            <div className="column is-4-fullhd is-4-desktop is-4-tablet">
              <p className="Deploy-application__name is-capitalized ">
                Runtime version
              </p>
              <input
                className="input deploy-form"
                type="text"
                placeholder="versions"
                disabled
              ></input>
            </div>
            <div className="column is-4-fullhd is-4-tablet">
              <p className="Deploy-application__name is-capitalized ">
                Worker size
              </p>
              <input
                className="input deploy-form"
                type="text"
                placeholder="size"
                disabled
              ></input>
            </div>
            <div className="column is-4-fullhd is-4-desktop is-4-tablet">
              <p className="Deploy-application__name is-capitalized ">
                Workers
              </p>
              <input
                className="input deploy-form"
                type="text"
                placeholder="1"
                disabled
              ></input>
            </div>
            <div className="column is-7-fullhd is-7-desktop is-7-tablet">
              <span className="is-flex mt-2">
                <TbBrandGoogleAnalytics color="purple" />
                <p className="is-size-7 ml-1 para-for__deploy">
                  To use Monitoring and Visualizer with this version, you may
                  need to enable the agent after deploying.{" "}
                  <a
                    className="learn-deploy"
                    href="https://docs.mulesoft.com/monitoring/configure-monitoring-cloudhub#enable-monitoring-using-the-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn how
                  </a>
                </p>
              </span>
              <div className="check-box__Footer mt-3 ">
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" disabled />
                  <span className="checkmark"></span>
                  <footer className="checkbox--for__form deploy-checks">
                    Automaticaly restart the application when not responding
                  </footer>
                </label>
              </div>
              <div>
                <div className="check-box__Footer ">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" disabled />
                    <span className="checkmark"></span>
                    <footer className="checkbox--for__form deploy-checks">
                      Persistant queues
                    </footer>
                  </label>
                </div>
                <div className="check-box__Footer for-border ">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" disabled />
                    <span className="checkmark"></span>
                    <footer className="checkbox--for__form deploy-checks">
                      Encrypt persistant queues
                    </footer>
                  </label>
                </div>
              </div>
              <div className="check-box__Footer">
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" disabled />
                  <span className="checkmark"></span>
                  <footer className="checkbox--for__form  deploy-checks">
                    Use Object store
                  </footer>
                </label>
              </div>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="columns">
            <div className="column">
              <p>coming soon</p>
              {/* <div class="tabs is-toggle">
                <ul>
                  <li class="is-active">
                    <Link href="#">
                      <span class="icon is-small">
                        <i class="fas fa-image" aria-hidden="true"></i>
                      </span>
                      <span>Table view</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span class="icon is-small">
                        <i class="fas fa-music" aria-hidden="true"></i>
                      </span>
                      <span>Text view</span>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="columns">
            <div classname="column ">
              <div className="">
                <div class="control ">
                  <label class="radio">
                    <input type="radio" name="rsvp" className="mr-1" disabled />
                    Disabled
                  </label>
                  <p className="m-4">Do not store any metadata.</p>
                  <div>
                    <label class="radio">
                      <input
                        type="radio"
                        name="rsvp"
                        className="mr-1"
                        disabled
                      />
                      Metadata
                    </label>
                    <p className="m-4 radio-text">
                      Store message metadata of every Mule transaction.
                    </p>
                  </div>
                  <div className="">
                    <label className="radio" disabled>
                      <input
                        type="radio"
                        name="rsvp"
                        disabled
                        className="mr-1"
                      />
                      Metadata and Replay
                    </label>
                    <p className="m-4">
                      Store message metadata and additional information needed
                      to allow transaction replay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "tab4" && (
          <div>
            <p>coming soon</p>
          </div>
        )}
        {activeTab === "tab5" && (
          <div>
            <p>coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default CloudHubTab;

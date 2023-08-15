import CloudHubTab from "../CloudHubTab";
const DeployComp = () => {
  return (
    <div className="deploy-Application__content">
      <div className="columns">
        <div className="column is-6-widescreen">
          <h1 className="header-deploy">Deploy Application</h1>
          <p className="Deploy-application__name">Application name</p>
          <input
            className="input deploy-form"
            type="text"
            placeholder="Name"
          ></input>
        </div>
      </div>
      <div className="columns">
        <div className="column is-6-widescreen">
          <div className="form-deploy">
            <p className="Deploy-application__name is-capitalized ">
              Deployment target
            </p>
            <input
              className="input deploy-form"
              type="text"
              placeholder="Cloudhub"
            ></input>
          </div>
        </div>
        <div className="column is-6-widescreen">
          <p className="Deploy-application__name is-capitalized">
            Application File
          </p>
          <input
            className="input deploy-form"
            type="text"
            placeholder="Choose a file"
          ></input>
        </div>
      </div>
      <CloudHubTab />
    </div>
  );
};
export default DeployComp;

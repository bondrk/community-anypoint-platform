import RuntimeManagerNavbar from "../components/MainPage/RuntimeManager/RutimeManagerNavbar";
import RuntimeManagerMenu from "../components/MainPage/RuntimeManager/RuntimeMangerMenu";
import DeployComp from "../components/MainPage/RuntimeManager/DeployComp";
const DeployApplication = () => {
  return (
    <div>
      <div className="deploy-application">
        <RuntimeManagerNavbar />
        <div className="deploy-comp__sidecomp">
          <RuntimeManagerMenu />
          <DeployComp />
        </div>
      </div>
    </div>
  );
};
export default DeployApplication;

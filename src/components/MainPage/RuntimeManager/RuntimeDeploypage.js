import RuntimeManagerMenu from "./RuntimeMangerMenu";
import RuntimeManagerNavbar from "./RutimeManagerNavbar";
import { Link } from "react-router-dom";

const RuntimeDeployPage = () => {
  return (
    <div className="application">
      <RuntimeManagerNavbar />
      <RuntimeManagerMenu />
      <div className="Runtime-Deploy__Page is-flex is-flex-direction-column is-justify-content-center is-align-items-center container">
        <img
          src="https://raw.githubusercontent.com/Kesavarajan10/Cap/e8934ebf838cbb62bbcce90a41fc78e208c170a4/Images/muledonkey.svg"
          alt="mule"
          height={120}
          width={120}
        />
        <h2 className="deploy-heading">There are no applications to show</h2>
        <Link
          className="button mt-2 deploy-button is-primary"
          to="/runtime-manager/addapplication"
        >
          Deploy Application
        </Link>
      </div>
    </div>
  );
};
export default RuntimeDeployPage;

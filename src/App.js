import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ForgotYourCredentials from "./components/ForgotYourCredentials/ForgotYourCredentials";
import UseCustomDomain from "./components/UseCustomDomain/UseCustomDomain";
import HomePage from "./components/MainPage/HomePage";
import ComingSoonPage from "./comingsoon";
import Application from "./pages/Application";
import Alerts from "./pages/Alerts";
import Server from "./pages/Server";
import FlexGateWays from "./pages/FlexGateWays";
import Vpc from "./pages/Vpc";
import LoadBalancer from "./pages/LoadBalancer";
import PrivateSpaces from "./pages/PrivateSpaces";
import DeployApplication from "./pages/Deployapplication";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={process.env.PUBLIC_URL} element={<Login />} />
          <Route path={process.env.PUBLIC_URL + "/login"} element={<Login />} />
          <Route
            path={process.env.PUBLIC_URL + "/signup"}
            element={<SignUp />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/retrive-username"}
            element={<ForgotYourCredentials />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/use-custom-domain"}
            element={<UseCustomDomain />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/community-platform-home"}
            element={<HomePage />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/coming-soon"}
            element={<ComingSoonPage />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/runtime-manager/application"}
            element={<Application />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/runtime-manager/alerts"}
            element={<Alerts />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/runtime-manager/flexgateways"}
            element={<FlexGateWays />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/runtime-manager/servers"}
            element={<Server />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/runtime-manager/vpc"}
            element={<Vpc />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/runtime-manager/privatespaces"}
            element={<PrivateSpaces />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/runtime-manager/loadbalancers"}
            element={<LoadBalancer />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/runtime-manager/addapplication"}
            element={<DeployApplication />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

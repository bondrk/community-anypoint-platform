import RuntimeManagerMenu from "./RuntimeMangerMenu";
import RuntimeManagerNavbar from "./RutimeManagerNavbar";

const RuntimeDeployPage = () => {
  return (
    <div className="comingsoon">
      <RuntimeManagerNavbar />
      <RuntimeManagerMenu />
      <div className="temp-comingsoon is-flex is-justify-content-center is-align-items-center">
        <h3 className="coming-soon__temp">Coming Soon...</h3>
      </div>
    </div>
  );
};
export default RuntimeDeployPage;

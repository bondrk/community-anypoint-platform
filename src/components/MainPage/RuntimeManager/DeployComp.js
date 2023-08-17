import CloudHubTab from "../CloudHubTab";
import { useState, useRef } from "react";
import Select from "react-select";
import { MdOutlineCloud } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    borderTop: "none",
    borderBottom: "none",
    borderLeft: state.isFocused ? "2px solid #cacbcc" : "2px solid #cacbcc",
    borderRight: state.isFocused ? "2px solid #cacbcc" : "2px solid #cacbcc",
    boxShadow: state.isFocused ? "none" : provided.boxShadow,
    borderRadius: 0,
    background: "#f4f5f6",
    padding: "2px",
    "&:hover": {
      borderColor: "#cacbcc",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    width: "100%",
    borderTop: "none",
    backgroundColor: state.isSelected ? "#f4f5f6" : "white",
    borderLeft: "2px solid #cacbcc",
    borderRight: "2px solid #cacbcc",
    color: "#3a3b3c",
    position: "relative",
    marginTop: "0",
    "&:hover": {
      backgroundColor: state.isSelected ? "#f0f0f0" : "#f8f8f8",
      color: state.isSelected ? "#3a3b3c" : "#00a2df",
      "&::before, &::after": {
        background: state.isSelected ? "#6B6C6D" : "#00a2df",
      },
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: -2,
      bottom: 0,
      width: 2,
      background: state.isSelected ? "#6B6C6D" : "#cacbcc",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      right: -2,
      bottom: 0,
      width: 2,
      background: state.isSelected ? "#6B6C6D" : "#cacbcc",
    },
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    borderBottom: "2px solid #cacbcc",
    outline: "none",
    marginTop: "0",
    paddingTop: "0",
    paddingBottom: "0",
    borderRadius: "0",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
};
const options = [
  {
    value: "Hybrid",
    label: <span>Hybrid</span>,
  },
  {
    value: "CloudHub",
    label: (
      <span className="is-flex is-align-items-center">
        <span className="icon pr-2">
          <MdOutlineCloud size={40} />
        </span>
        CloudHub
      </span>
    ),
  },
];

const DeployComp = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedJar, setSelectedJar] = useState("");

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setSelectedJar(selectedFile.name);
    }
  };

  const handleOptionSelect = (selected) => {
    setSelectedOption(selected);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <p className="Deploy-application__name is-capitalized">
            Deployment target
          </p>
          <div className="select-comp">
            <Select
              options={options}
              value={selectedOption}
              onChange={handleOptionSelect}
              onMenuOpen={toggleMenu}
              onMenuClose={toggleMenu}
              isMenuOpen={isMenuOpen}
              closeMenuOnSelect={true} // Prevent closing on select
              styles={customStyles}
            />
          </div>
        </div>
        <div className="column is-6-widescreen">
          <p className="Deploy-application__name is-capitalized">
            Application File
          </p>
          <div className="is-flex is-align-items-center">
            <input
              type="text"
              className="input deploy-form"
              value={selectedJar}
              placeholder="No file has been loaded"
              readOnly
            />
            <button
              className="button ml-2 btn-choosefile"
              onClick={handleChooseFile}
            >
              Choose file <BiSolidDownArrow size={10} className="ml-1" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".jar"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
      <CloudHubTab />
    </div>
  );
};
export default DeployComp;

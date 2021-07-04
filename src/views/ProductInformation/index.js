import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ProductInformation.scss";
import ControlsContainer from "../../containers/ControlsContainer";
import { step1Constants } from "./textConstants";
import gears from "../../assets/img/group.svg";
import vault from "../../assets/img/group-3.svg";

const Step1 = ({ updateCurrentStep }) => {
  const [checkAccepted, setCheckAccepted] = useState(false);
  const [error, setError] = useState("");

  const validateComponentAndContinue = () => {
    if (checkAccepted) {
      updateCurrentStep();
      setError("");
    } else {
      setError(step1Constants.errorText);
    }
  };

  return (
    <div className="Step1">
      <div className="Step1-info">
        <h2>{step1Constants.title}</h2>
        <div className="Advantages-container">
          <div className="Advantage-block">
            <img src={gears} />
            <p className="Advantage-text">{step1Constants.advantage1Text}</p>
          </div>
          <div className="Advantage-block">
            <img src={vault} />
            <p className="Advantage-text">{step1Constants.advantage2Text}</p>
          </div>
        </div>

        <p className="Text-title">{step1Constants.howItWorksTitle}</p>
        <p>{step1Constants.howItWorksText}</p>

        <p className="Text-title">{step1Constants.dataSaveTitle}</p>
        <p>{step1Constants.dataSaveText}</p>

        <p>{step1Constants.checkAknowledgeText}</p>
        <div
          className="Checkbox-container"
          onClick={() => setCheckAccepted(!checkAccepted)}
        >
          <input
            className="Step1-checkbox"
            type="checkbox"
            checked={checkAccepted}
            onChange={() => setCheckAccepted(!checkAccepted)}
          />
          <label className="Step1-label">
            {step1Constants.checkLabel}
            {error && <span className="Error-text"> *</span>}
          </label>
        </div>
        {error && <p className="Error-text">{error}</p>}
      </div>
      <ControlsContainer
        validateComponentAndContinue={() => validateComponentAndContinue()}
      />
    </div>
  );
};

Step1.propTypes = {
  updateCurrentStep: PropTypes.func.isRequired,
};

export default Step1;

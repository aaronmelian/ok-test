import React, { useState } from "react";
import "./ProductInformation.scss";
import ControlsContainer from "../../containers/ControlsContainer";
import { step1Constants } from "./textConstants";

const Step1 = ({ updateCurrentStep, cancelOrder }) => {
  const [checkAccepted, setCheckAccepted] = useState(false);
  const [error, setError] = useState("");

  const validateComponentAndContinue = () => {
    if (checkAccepted) {
      updateCurrentStep(1);
      setError("");
    } else {
      setError(step1Constants.errorText);
    }
  };

  return (
    <div className="Step1">
      <div className="Step-info">
        <h2>{step1Constants.title}</h2>
        <p>{step1Constants.dataNeededText}</p>
        <p>{step1Constants.dataProtectionText}</p>
        <p>{step1Constants.checkAknowledgeText}</p>
        <div className="Checkbox-container">
          <input
            className="Step1-checkbox"
            type="checkbox"
            value={checkAccepted}
            onChange={() => setCheckAccepted(!checkAccepted)}
          />
          <label className="Step-label">
            {step1Constants.checkLabel}
            {error && <span className="Error-text"> *</span>}
          </label>
        </div>
        {error && <p className="Error-text">{error}</p>}
      </div>
      <ControlsContainer
        validateComponentAndContinue={() => validateComponentAndContinue()}
        cancelOrder={cancelOrder}
      />
    </div>
  );
};

export default Step1;

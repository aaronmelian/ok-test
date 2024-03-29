import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Form.scss";
import ControlsContainer from "../../containers/ControlsContainer";
import { step2Constants } from "./textConstants";

const Step2 = ({ updateCurrentStep, cancelOrder }) => {
  const [password1, setPassword1] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [errorPassword1, setErrorPassword1] = useState("");

  const [password2, setPassword2] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);
  const [errorPassword2, setErrorPassword2] = useState("");

  const [hint, setHint] = useState("");

  const validateComponentAndContinue = () => {
    let passwordMatch = !!(password1 && password2 && password1 === password2);
    if (!password2) {
      setErrorPassword2(step2Constants.fieldNeededError);
    } else if (!passwordMatch) {
      setErrorPassword2(step2Constants.samePassNededError);
    } else {
      setErrorPassword2("");
    }

    if (!password1) {
      setErrorPassword1(step2Constants.fieldNeededError);
    } else if (password1.length < 8 || password1.length > 24) {
      setErrorPassword1(step2Constants.passLengthError);
    } else if (!password1.match(/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]/)) {
      setErrorPassword1(step2Constants.upperAndLowerError);
    } else if (passwordMatch) {
      setErrorPassword1("");
      setErrorPassword2("");
      updateCurrentStep({ pass: password1, hint: hint });
    } else {
      setErrorPassword1("");
    }
  };

  return (
    <div className="Step2">
      <div className="Step2-info">
        <h2>{step2Constants.title}</h2>
        <p>{step2Constants.dataNeededText}</p>
        <p>{step2Constants.notRecoveryAllowed}</p>
      </div>
      <div className="Step2-form">
        <div className="Input-block">
          <label className="Input-label">{step2Constants.pass1Label}</label>
          <div>
            <input
              className="Step2-input"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder={step2Constants.pass1Placeholder}
              type={showPassword1 ? "text" : "password"}
            />
            {errorPassword1 && <span className="Error-text"> *</span>}
            {!showPassword1 ? (
              <i
                className="Eye-icon far fa-eye"
                onClick={() => setShowPassword1(true)}
              ></i>
            ) : (
              <i
                className="Eye-icon fas fa-eye-slash"
                onClick={() => setShowPassword1(false)}
              ></i>
            )}
          </div>
          {errorPassword1 && <p className="Error-text">{errorPassword1}</p>}
        </div>
        <div className="Input-block">
          <label className="Input-label">{step2Constants.pass2Label}</label>
          <div>
            <input
              className="Step2-input"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder={step2Constants.pass2Placeholder}
              type={showPassword2 ? "text" : "password"}
            />
            {errorPassword2 && <span className="Error-text"> *</span>}

            {!showPassword2 ? (
              <i
                className="Eye-icon far fa-eye"
                onClick={() => setShowPassword2(true)}
              ></i>
            ) : (
              <i
                className="Eye-icon fas fa-eye-slash"
                onClick={() => setShowPassword2(false)}
              ></i>
            )}
          </div>
          {errorPassword2 && <p className="Error-text">{errorPassword2}</p>}
        </div>
      </div>
      <div className="Hint-container">
        <label className="Input-label">{step2Constants.hintLabel}</label>
        <textarea
          maxlength="60"
          placeholder={step2Constants.hintPlaceholder}
          value={hint}
          onChange={(e) => setHint(e.target.value)}
        />
        <span className="Hint-count">{`${hint.length}/60`}</span>
      </div>
      <ControlsContainer
        validateComponentAndContinue={() => validateComponentAndContinue()}
        cancelOrder={cancelOrder}
      />
    </div>
  );
};

Step2.propTypes = {
  updateCurrentStep: PropTypes.func.isRequired,
  cancelOrder: PropTypes.func.isRequired,
};

export default Step2;

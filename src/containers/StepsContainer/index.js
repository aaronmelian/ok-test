import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./StepsContainer.scss";
import Step1 from "../../views/ProductInformation";
import Step2 from "../../views/Form";
import Step3 from "../../views/Feedback";

const StepsContainer = () => {
  let steps = [Step1, Step2, Step3];
  const [currentStep, setCurrentStep] = useState(1);
  useEffect(() => {}, []);

  const updateCurrentStep = (change) => {
    if (change > 0) {
      if (currentStep === steps.length) {
        setCurrentStep(1);
      } else {
        setCurrentStep(currentStep + change);
      }
    } else if (currentStep !== 1) {
      setCurrentStep(currentStep + change);
    }
  };

  const validateComponent = () => {
    return true;
  };
  const cancelOrder = () => {
    setCurrentStep(1);
  };
  const StepToRender = steps[currentStep - 1];

  return (
    <div className="Steps-cintainer">
      <div className="Steps-bar-container">
        <div className="Container">
          <ul className="Progress-bar">
            {steps.map((stp, i) => {
              return (
                <li
                  key={`step-${i}`}
                  className={currentStep > i ? "active" : ""}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <StepToRender
        updateCurrentStep={(value) => updateCurrentStep(value)}
        cancelOrder={() => {
          cancelOrder();
        }}
      />
    </div>
  );
};

export default StepsContainer;

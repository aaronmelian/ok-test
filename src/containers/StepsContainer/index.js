import React, { useState } from "react";
import "./StepsContainer.scss";
import Step1 from "../../views/ProductInformation";
import Step2 from "../../views/Form";
import Step3 from "../../views/Feedback";

const StepsContainer = () => {
  let steps = [Step1, Step2, Step3];
  const [passwordData, setPasswordData] = useState({ pass: "", hint: "" });
  const [currentStep, setCurrentStep] = useState(1);

  const updateCurrentStep = (passData) => {
    if (passData) {
      setPasswordData(passData);
    }
    if (currentStep === steps.length) {
      setCurrentStep(1);
    } else {
      setCurrentStep(currentStep + 1);
    }
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
        passData={passwordData}
      />
    </div>
  );
};

export default StepsContainer;

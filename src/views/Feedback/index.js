import React, { useEffect, useState } from "react";
import { submitForm } from "../../services/api";
import ControlsContainer from "../../containers/ControlsContainer";
import Icon from "../../components/Icon";
import { step3Constants } from "./textConstants";
import "./Feedback.scss";
import openbankKey from "../../assets/img/key_openbank.png";

const Step3 = ({ passData, updateCurrentStep }) => {
  const [passwordFeedbackOk, setPasswordFeedbackOk] = useState(false);
  const [loading, setLoading] = useState(true);

  const getPasswordFeedback = (pass) => {
    submitForm(pass)
      .then(() => {
        setPasswordFeedbackOk(true);
        setLoading(false);
      })
      .catch(() => {
        setPasswordFeedbackOk(false);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPasswordFeedback(passData.pass);
  }, [passData]);

  return loading ? (
    <div className="Spinning-image-container">
      <span>{step3Constants.loadingText}</span>
      <img className="Spinning-image" src={openbankKey} />
    </div>
  ) : (
    <div className="Step3">
      <div className="Step3-info">
        <Icon
          icon={passwordFeedbackOk ? "ShieldCheck" : "Warning"}
          justIcon
          secondStyle={passwordFeedbackOk ? "green" : "red"}
          size={84}
        />
        <div className="Step3-textBox">
          <h4 className="Step3-title">
            {step3Constants[passwordFeedbackOk ? "ok" : "ko"].title}
          </h4>
          <p>{step3Constants[passwordFeedbackOk ? "ok" : "ko"].text}</p>
        </div>
      </div>
      <ControlsContainer
        nextText={passwordFeedbackOk ? "Acceder" : "Volver"}
        secondStyle="red"
        validateComponentAndContinue={() => updateCurrentStep()}
      />
    </div>
  );
};

export default Step3;

import React from "react";
import PropTypes from "prop-types";
import "./ControlsContainer.scss";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

const ControlsContainer = ({
  validateComponentAndContinue,
  cancelOrder,
  nextText,
  secondStyle,
}) => {
  return (
    <div
      className="Controls-container"
      style={{ justifyContent: cancelOrder ? "space-between" : "flex-end" }}
    >
      {cancelOrder && <Button clicked={() => cancelOrder()}>Cancelar</Button>}
      <Icon
        secondStyle={secondStyle}
        icon="ChevronRight"
        text={nextText}
        clicked={() => validateComponentAndContinue()}
      />
    </div>
  );
};

ControlsContainer.propTypes = {
  validateComponentAndContinue: PropTypes.func.isRequired,
  cancelOrder: PropTypes.func,
  nextText: PropTypes.string,
  secondStyle: PropTypes.bool,
};
ControlsContainer.defaultProps = {
  nextText: "Siguiente",
  secondStyle: false,
};

export default ControlsContainer;

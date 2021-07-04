import React from "react";
import PropTypes from "prop-types";
import "./ControlsContainer.scss";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

const ControlsContainer = ({ validateComponentAndContinue, cancelOrder }) => {
  return (
    <div
      className="Controls-container"
      style={{ justifyContent: cancelOrder ? "space-between" : "flex-end" }}
    >
      {cancelOrder && <Button clicked={() => cancelOrder()}>Cancelar</Button>}
      <Icon
        icon="ChevronRight"
        text="Siguiente"
        clicked={() => validateComponentAndContinue()}
      />
    </div>
  );
};

ControlsContainer.propTypes = {
  validateComponentAndContinue: PropTypes.func.isRequired,
  cancelOrder: PropTypes.func,
};

export default ControlsContainer;

import React from "react";
import PropTypes from "prop-types";
import "./Icon.scss";

const icons = {
  ChevronRight: {
    path:
      "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z",
    viewBox: "0 0 320 512",
  },
  Warning: {
    path:
      "M270.2 160h35.5c3.4 0 6.1 2.8 6 6.2l-7.5 196c-.1 3.2-2.8 5.8-6 5.8h-20.5c-3.2 0-5.9-2.5-6-5.8l-7.5-196c-.1-3.4 2.6-6.2 6-6.2zM288 388c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm281.5 52L329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.8 0 60-40 41.5-72zM528 480H48c-12.3 0-20-13.3-13.9-24l240-416c6.1-10.6 21.6-10.7 27.7 0l240 416c6.2 10.6-1.5 24-13.8 24z",
    viewBox: "0 0 576 512",
  },
  ShieldCheck: {
    path:
      "M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM262.2 478.8c-4 1.6-8.4 1.6-12.3 0C152 440 48 304 48 128c0-6.5 3.9-12.3 9.8-14.8l192-80c3.9-1.6 8.4-1.6 12.3 0l192 80c6 2.5 9.9 8.3 9.8 14.8.1 176-103.9 312-201.7 350.8zm136.2-325c-4.7-4.7-12.3-4.7-17-.1L218 315.8l-69-69.5c-4.7-4.7-12.3-4.7-17-.1l-8.5 8.5c-4.7 4.7-4.7 12.3-.1 17l85.9 86.6c4.7 4.7 12.3 4.7 17 .1l180.5-179c4.7-4.7 4.7-12.3.1-17z",
    viewBox: "0 0 512 512",
  },
};

const Icon = ({ icon, clicked, text, size, secondStyle, justIcon }) => (
  <button
    className={`${justIcon ? "JustIcon" : "Icon-button"}${
      secondStyle ? " Second-style" : ""
    }`}
    onClick={clicked}
  >
    {text}
    <svg
      className="Icon"
      width={size}
      height={size}
      viewBox={icons[icon].viewBox}
    >
      <path
        className={`Icon-path ${secondStyle ? secondStyle : ""}`}
        d={icons[icon].path}
      />
    </svg>
  </button>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  clicked: PropTypes.func,
  secondStyle: PropTypes.bool,
  justIcon: PropTypes.bool,
};

Icon.defaultProps = {
  clicked: () => {},
  size: 12,
  secondStyle: false,
  justIcon: false,
};
export default Icon;

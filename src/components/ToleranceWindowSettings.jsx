import { useState } from "react";
import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";

const ToleranceWindow = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div class="row">
      <div class="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            checked={isChecked}
            onChange={handleToggle}
          />
          <label
            className="form-check-label skyhopText"
            htmlFor="flexSwitchCheckDefault"
          >
            Toggle
            {isChecked ? " ON" : " OFF"}
          </label>
        </div>
      </div>
      <div class="col">
        <label className="skyhopText">Select Tolerance Level</label>
      </div>
    </div>
  );
};

export default ToleranceWindow;

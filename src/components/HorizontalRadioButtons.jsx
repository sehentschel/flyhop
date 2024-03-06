import React, { useState } from "react";

const HorizontalRadioButtons = ({ items = [] }) => {
  const [selectionType, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ marginBlock: "20px" }}>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadio"
          id="radioOption1"
          value={items[0]}
          checked={selectionType === "option1"}
          onChange={handleOptionChange}
        />
        <label className="form-check-label skyhopText" htmlFor="radioOption1">
          {items[0]}
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadio"
          id="radioOption2"
          value={items[1]}
          checked={selectionType === "option2"}
          onChange={handleOptionChange}
        />
        <label className="form-check-label skyhopText" htmlFor="radioOption2">
          {items[1]}
        </label>
      </div>
    </div>
  );
};

export default HorizontalRadioButtons;

import React, { useState } from "react";

const ClientSelectionType = () => {
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
          name="single-client-radio"
          id="single-client-radio"
          value="single-client-radio"
          checked={selectionType === "single-client-radio"}
          onChange={handleOptionChange}
        />
        <label
          className="form-check-label skyhopText"
          htmlFor="single-client-radio"
        >
          Single
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="multiple-clients-radio"
          id="multiple-clients-radio"
          value="multiple-clients-radio"
          checked={selectionType === "multiple-clients-radio"}
          onChange={handleOptionChange}
        />
        <label
          className="form-check-label skyhopText"
          htmlFor="multiple-clients-radio"
        >
          Multiple
        </label>
      </div>
    </div>
  );
};

export default ClientSelectionType;

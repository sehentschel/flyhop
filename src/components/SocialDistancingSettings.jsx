import React, { useState } from "react";

const SchedulingSettings = () => {
  const [selectionType, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    //send to parent
  };

  return (
    <div style={{ marginBlock: "20px" }}>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="yes-social-distance"
          id="yes-social-distance"
          value="yes-social-distance"
          checked={selectionType === "yes-social-distance"}
          onChange={handleOptionChange}
        />
        <label
          className="form-check-label skyhopTextColor"
          htmlFor="yes-social-distance"
        >
          Yes
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="no-social-distance"
          id="no-social-distance"
          value="no-social-distance"
          checked={selectionType === "no-social-distance"}
          onChange={handleOptionChange}
        />
        <label
          className="form-check-label skyhopTextColor"
          htmlFor="no-social-distance"
        >
          No
        </label>
      </div>
    </div>
  );
};

export default SchedulingSettings;

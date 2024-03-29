import { useState } from "react";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imagePlaceholder from "../images/clockblue.jpg";

const ToleranceWindow = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Row style={{ marginLeft: "1px" }}>
      <Col xs={3} style={{ padding: 0, width: "120px" }}>
        <div className="form-check form-switch">
          <input
            className="form-check-input toggle-checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
          />
          <label className="form-check-label skyhopText">
            Toggle
            {isChecked ? " ON" : " OFF"}
          </label>
        </div>
      </Col>
      <Col xs={1} style={{ padding: 0, width: "5px" }}>
        <div
          style={{
            borderLeft: "1px solid black",
            height: "30px",
            marginTop: "2px",
          }}
        ></div>
      </Col>
      <Col xs="4">
        <img
          src={imagePlaceholder}
          alt="Drag and Drop File"
          style={{
            maxWidth: "30px",
            marginTop: "2px",
            marginRight: "4px",
            align: "center",
          }}
        />
        <label className="skyhopText">Select Tolerance Level</label>
      </Col>
    </Row>
  );
};

export default ToleranceWindow;

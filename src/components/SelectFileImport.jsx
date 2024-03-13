import React from "react";
import { Dropdown } from "react-bootstrap";

const SelectFileImport = ({ items = [] }) => {
  return (
    <div style={{ width: "100%" }}>
      <Dropdown>
        <Dropdown.Toggle
          block
          variant="secondary"
          style={{
            backgroundColor: "white",
            width: "100%",
            borderRadius: "10px",
          }}
          className="custom-dropdown-toggle"
        >
          <label className="skyhopText">Select Import Name:</label>
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ right: "auto", left: 0, textAlign: "left" }}>
          <Dropdown.Item>Example1.txt</Dropdown.Item>
          <Dropdown.Item>Example2.txt</Dropdown.Item>
          <Dropdown.Item>Example3.txt</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SelectFileImport;

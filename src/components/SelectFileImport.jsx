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
          className="custom-dropdown-toggle skyhopTextBold"
        >
          Select Import Name:
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ right: "auto", left: 0, textAlign: "left" }}>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SelectFileImport;

import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownSelector = ({ items = [] }) => {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Select Client"
      style={{ marginBottom: "10px" }}
    >
      {items?.map((item, index) => (
        <Dropdown.Item key={index}>{item}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropdownSelector;

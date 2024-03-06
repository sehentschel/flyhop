import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const SelectFileImport = ({ items = [] }) => {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      class="bg-white"
      className={"d-grid"}
      title="Select Import Name:"
      style={{
        borderRadius: "20px",
      }}
    >
      {items?.map((item, index) => (
        <Dropdown.Item key={index}>{item}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default SelectFileImport;

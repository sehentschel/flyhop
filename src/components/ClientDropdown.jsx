import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
const DropdownSelector = ({ items = [] }) => {
  const [buttonText, setButtonText] = useState("Select Client");

  const handleItemClick = (item) => {
    setButtonText(item);
  };

  return (
    // <DropdownButton
    //   id="dropdown-basic-button"
    //   title="Select Client"
    //   style={{ marginBottom: "5px", backgroundColor: "white" }}
    // >
    //   {items?.map((item, index) => (
    //     <Dropdown.Item key={index}>{item}</Dropdown.Item>
    //   ))}
    // </DropdownButton>
    <Dropdown>
      <Dropdown.Toggle
        block
        variant="secondary"
        id="dropdown-basic"
        style={{
          backgroundColor: "white",
          width: "120px",
          borderRadius: "10px",
          marginTop: "5px",
        }}
        className="custom-dropdown-toggle"
      >
        {buttonText}
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ right: "auto", left: 0, textAlign: "left" }}>
        {items?.map((item, index) => (
          <Dropdown.Item key={index} onClick={() => handleItemClick(item)}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownSelector;

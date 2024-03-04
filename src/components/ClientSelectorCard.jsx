import React from "react";
import DropdownSelector from "./ClientDropdown";
import HorizontalRadioButtons from "./HorizontalRadioButtons";

const ClientSelectorCard = () => {
  const dropdownData = [
    { testingCenter: 1, label: "Testing Center 1" },
    { testingCenter: 2, label: "Testing Center 2" },
    { testingCenter: 3, label: "Testing Center 3" },
    { testingCenter: 4, label: "Testing Center 4" },
  ];

  const clientSchedulingOptions = ["Yes", "No"];
  const clientSelectionOptions = ["Single", "Multiple"];
  const clients = ["client1", "client2", "client3", "client4"];

  return (
    <div>
      <div className="skyhopText" style={{ marginBottom: "15px" }}>
        Split schedule using social distancing?
      </div>
      <HorizontalRadioButtons items={clientSchedulingOptions} />
      <hr className="hrSection"></hr>

      <div className="skyhopText" style={{ marginBottom: "15px" }}>
        Location Checking:
      </div>

      <hr className="hrSection"></hr>
      <div className="skyhopText" style={{ marginBottom: "15px" }}>
        Client:
      </div>
      <div>
        <HorizontalRadioButtons items={clientSelectionOptions} />
      </div>
      {dropdownData.map((data) => (
        <div
          key={data.testingCenter}
          className="d-flex align-items-center mb-3"
        >
          <p style={{ marginRight: "30px" }}>{data.label}</p>
          <DropdownSelector items={clients} />
        </div>
      ))}
    </div>
  );
};

export default ClientSelectorCard;

import React from "react";
import DropdownSelector from "./ClientDropdown";
import ClientSelectionType from "./ClientSelectionType";
import SchedulingSettings from "./SocialDistancingSettings";
import imagePlaceholder from "../images/clockblue.jpg";

const SchedulingSettingsCard = () => {
  const dropdownData = [
    { testingCenter: 1, label: "Testing Center 1" },
    { testingCenter: 2, label: "Testing Center 2" },
    { testingCenter: 3, label: "Testing Center 3" },
    { testingCenter: 4, label: "Testing Center 4" },
  ];

  const clients = ["client1", "client2", "client3", "client4"];

  return (
    <div>
      <div className="skyhopLabel" style={{ marginBottom: "15px" }}>
        <b>Split schedule using social distancing?</b>
      </div>
      <SchedulingSettings></SchedulingSettings>
      <hr style={{ width: "90%" }} className="hrSection"></hr>

      <div className="skyhopLabel" style={{ marginBottom: "15px" }}>
        <b>Location Checking:</b>
      </div>
      <div
        class="text-success"
        style={{ marginBottom: "15px", fontSize: "smaller", fontWeight: "700" }}
      >
        All Available!
      </div>

      <hr style={{ width: "90%" }} className="hrSection"></hr>
      <div className="skyhopLabel" style={{ marginBottom: "15px" }}>
        <b>Client:</b>
      </div>
      <div>
        <ClientSelectionType />
      </div>
      <div style={{ width: "70w" }}>
        {dropdownData.map((data) => (
          <div
            key={data.testingCenter}
            className="d-flex align-items-center mb-8]"
            style={{ marginTop: "10px", marginBottom: "20px" }}
          >
            <p
              className="skyhopText"
              style={{ marginRight: "30px", fontSize: "11px" }}
            >
              {data.label}
            </p>
            <DropdownSelector items={clients} />
            <div style={{ width: "10%" }}>
              <img
                src={imagePlaceholder}
                alt="Drag and Drop File"
                style={{
                  maxWidth: "100%",
                  marginLeft: "4px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulingSettingsCard;

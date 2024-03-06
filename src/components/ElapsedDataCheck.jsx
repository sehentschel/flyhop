import React, { useState } from "react";

const ElapsedDataCheck = (files) => {
  const hasFiles = useState(files ? true : false);
  return hasFiles === null ? (
    <div>
      <label
        class="text-success"
        style={{ fontWeight: "700", fontSize: "smaller" }}
      >
        No elapsed Dates!
      </label>
    </div>
  ) : (
    <div>
      <label
        class="text-error"
        style={{ fontWeight: "700", fontSize: "smaller" }}
      >
        No File Uploaded!
      </label>
    </div>
  );
};

export default ElapsedDataCheck;

import React, { useState } from "react";

const ElapsedDataCheck = ({ checkFile }) => {
  console.log(checkFile);

  const ElapsedDates = (files) => {
    return false;
  };
  return checkFile !== null ? (
    //Add check for ElapsedDates when function is thought out
    // { ElapsedDates(files) ?
    //   (
    //     <div>
    //       <label
    //         class="text-success"
    //         style={{ fontWeight: "700", fontSize: "smaller" }}
    //       >
    //         No elapsed Dates!
    //       </label>
    //     </div>
    //   ) :
    //   (
    //     <div>
    //       <label
    //         class="text-error"
    //         style={{ fontWeight: "700", fontSize: "smaller" }}
    //       >
    //         Elapsed Dates Detected!
    //       </label>
    //     </div>
    //   )
    // }
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

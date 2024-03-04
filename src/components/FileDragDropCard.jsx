import "../index.css";
import "../App.css";
import React, { useState } from "react";
import FileDropZone from "./FileDropZone";
import Button from "react-bootstrap/Button";

const FileDragDropCard = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);
  const [text, setText] = useState([]);

  const handleFilesDrop = (files) => {
    setDroppedFiles(files);
    setText(files.name);
    // Do whatever you need to do with the files in your higher-level component
    console.log("Dropped files:", files);
  };

  return (
    <div
      stlye={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "20px",
        display: "flex",
      }}
    >
      {/*TODO //add drop down of file names?? */}

      <div>
        <label className="skyhopText">
          Select a manifest you'd like to import
        </label>
      </div>
      <div
        style={{
          borderRadius: "15px",
          border: "0.5px solid black",
          padding: "20px",
        }}
      >
        <FileDropZone onFilesDrop={handleFilesDrop} />
        <Button
          variant="primary"
          size="lg"
          onClick={() => {}}
          className="buttonModal"
          style={{ width: "50%" }}
        >
          Upload Manifest
        </Button>
      </div>
    </div>
  );
};

export default FileDragDropCard;
import "../index.css";
import "../App.css";
import React, { useState } from "react";
import FileDropZone from "./FileDropZone";
import Button from "react-bootstrap/Button";

const FileDragDropCard = ({ setFiles }) => {
  const handleFilesDrop = (files) => {
    console.log(files);
    setFiles(files);
  };

  return (
    <div class="container" stlye={{ innerHeight: "30%" }}>
      <div
        style={{
          borderRadius: "15px",
          border: "0.5px solid black",
          padding: "20px",
        }}
      >
        <FileDropZone onFilesDrop={handleFilesDrop} />
        <div style={{ textAlign: "center" }}>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {}}
            className="buttonModal"
            style={{ width: "50%", position: "center" }}
          >
            Upload Manifest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FileDragDropCard;

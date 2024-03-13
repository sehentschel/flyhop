import "../index.css";
import "../App.css";
import React, { useState } from "react";
import FileDropZone from "./FileDropZone";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

let interval = undefined;

const FileDragDropCard = ({ setFiles }) => {
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    handleReset();
  }, [uploadedFiles]);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const nextProgress = prev + 1;
          if (nextProgress >= 100) {
            clearInterval(interval);
            setRunning(false);
            return 100;
          }
          return nextProgress;
        });
      }, 100);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  const handleReset = () => {
    setProgress(0);
    setRunning(false);
  };

  const handleFilesDrop = (files) => {
    if (files !== null) {
      setFiles(files);
      setRunning(true);
    }
    console.log(`prog ${progress}`);
  };

  return (
    <div
      style={{
        borderRadius: "15px",
        border: "0.5px solid black",
        padding: "20px",
      }}
    >
      <FileDropZone onFilesDrop={setUploadedFiles} />
      <div style={{ textAlign: "center" }}>
        <div>
          {uploadedFiles !== null ? (
            <label className="skyhopLabel">
              <b>Uploaded File: {uploadedFiles[0]?.name}</b>
            </label>
          ) : (
            <div></div>
          )}
        </div>
        <Button
          variant="primary"
          onClick={() => {
            handleFilesDrop(uploadedFiles);
          }}
          className="buttonModal"
          style={{
            width: "50%",
            position: "center",
            fontSize: "12px",
            padding: "10px",
          }}
        >
          Upload Manifest
        </Button>
        <ProgressBar
          variant="info"
          now={progress}
          style={{ marginTop: "8px" }}
        ></ProgressBar>
      </div>
    </div>
  );
};

export default FileDragDropCard;

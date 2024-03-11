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
  let interval;

  useEffect(() => {
    handleReset();
  }, [uploadedFiles]);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        // Increment progress by a fixed amount in each interval
        setProgress((prev) => {
          const nextProgress = prev + 1;
          if (nextProgress >= 100) {
            // If progress reaches 100%, stop the animation
            clearInterval(interval);
            setRunning(false);
            return 100;
          }
          return nextProgress;
        });
      }, 100); // Adjust interval timing as needed
    } else {
      clearInterval(interval);
    }
  }, [running]);

  const handleReset = () => {
    setProgress(0); // Reset progress to 0 when the button is clicked
    setRunning(false); // Start progress bar animation
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
            <label className="skyhopText skyhopLabel">
              Uploaded File: {uploadedFiles[0]?.name}
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
          style={{ width: "50%", position: "center" }}
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

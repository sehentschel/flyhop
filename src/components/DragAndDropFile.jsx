import React, { useState, useRef } from "react";
import imagePlaceholder from "../images/file_icon.png"; // Import your specific image

const FileDropZone = ({ onFilesDrop }) => {
  const [dragging, setDragging] = useState(false);
  const droppedFiles = useState([]);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    onFilesDrop(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    onFilesDrop(files);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current.click()}
      style={{
        border: "2px dashed #000",
        padding: "30px",
        borderRadius: "15px",
        textAlign: "center",
        cursor: "pointer",
        marginBottom: "10px",
      }}
    >
      <div style={{ padding: "8px" }}>
        <img
          src={imagePlaceholder}
          alt="Drag and Drop File"
          style={{ maxWidth: "8%", marginBottom: "10px" }}
        />
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileSelect}
        />
        <p>Drag &amp; Drop files here or click to Browse</p>
        {droppedFiles.length > 0 && (
          <div>
            <h2>Dropped Files:</h2>
            <ul>
              {droppedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileDropZone;

import React, { useState, useRef } from "react";
import imagePlaceholder from "../images/file_icon.png"; // Import your specific image

const FileDropZone = ({ onFilesDrop }) => {
  const [dragging, setDragging] = useState(false);
  const [droppedFiles, setDroppedFiles] = useState([]);
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
    console.log(files);

    onFilesDrop(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    onFilesDrop(files);
    console.log(files);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current.click()}
      className="fileDropZone"
      style={{
        padding: "10px",
        borderRadius: "15px",
        marginBottom: "10px",
        cursor: "pointer",
      }}
    >
      <div style={{ padding: "8px", textAlign: "center" }}>
        <img
          src={imagePlaceholder}
          alt="Drag and Drop File"
          style={{
            maxWidth: "8%",
            marginBottom: "10px",
            align: "center",
          }}
        />
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileSelect}
        />
        <p className="skyhopText">
          Drag &amp; Drop Here Or <b>Browse</b>
        </p>
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

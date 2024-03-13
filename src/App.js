import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FileDragDropCard from "./components/FileDragDropCard";
import ToleranceWindow from "./components/ToleranceWindowSettings";
import ElapsedDataCheck from "./components/ElapsedDataCheck";
import "./css/modal.css";
import SchedulingSettingsCard from "./components/SchedulingSettingsCard";
import SelectFileImport from "./components/SelectFileImport";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {
  const [show, setShow] = useState(false);
  const [files, setFiles] = useState(null);

  console.log(files);

  const handleClose = () => {
    setFiles({});
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    if (files !== null) {
      alert(`Uploaded ${files[0]?.name}`);
    } else {
      alert("No file uploaded!");
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Upload Documents
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="xl"
        style={{ padding: "20px" }}
      >
        <Button
          onClick={handleClose}
          style={{ width: "50px", marginTop: "20px", marginLeft: "20px" }}
          className="buttonModal"
        >
          X
        </Button>
        <Row>
          <Col></Col>
          <Col>
            <div
              style={{
                width: "200w",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Modal.Title>
                <div>
                  <label
                    className="skyhopTextColor"
                    style={{ fontSize: "2.5rem", fontFamily: "Helvetica" }}
                  >
                    <b>Document Upload</b>
                  </label>
                  <hr
                    style={{ width: "100%", justifySelf: "centered" }}
                    className="hrSection"
                  ></hr>
                </div>
              </Modal.Title>
            </div>
          </Col>
          <Col></Col>
        </Row>

        <Modal.Body style={{ marginLeft: "50px", marginRight: "50px" }}>
          <Container style={{ width: "90w" }}>
            <Row>
              <Col xs={7}>
                <SelectFileImport />
                <hr className="hrSection"></hr>
                <div>
                  <label className="skyhopLabel">
                    <b>Select a manifest you'd like to import</b>
                  </label>
                </div>
                <FileDragDropCard setFiles={setFiles}></FileDragDropCard>
                <hr className="hrSection"></hr>
                <div>
                  <label className="skyhopLabel">
                    <b>Elapse Data Checking</b>
                  </label>
                  <ElapsedDataCheck checkFile={files} />
                  <hr className="hrSection"></hr>
                  <label className="skyhopLabel">
                    <b>Tolerance Window:</b>
                  </label>
                  <ToleranceWindow />
                </div>
              </Col>
              <Col xs={4} style={{ marginLeft: "4%" }}>
                <SchedulingSettingsCard />
              </Col>
            </Row>
          </Container>
          <div style={{ textAlign: "center" }}>
            {files !== null ? (
              <label style={{ fontSize: "14px" }} className="skyhopLabel">
                <b>
                  Data in the import file is correct. Please press Continue to
                  import.
                </b>
              </label>
            ) : (
              <></>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer
          className="border-0"
          style={{ justifyContent: "center", paddingTop: "1px" }}
        >
          <Button
            variant="primary"
            style={{ width: "20%", fontSize: "12px", padding: "10px" }}
            className="buttonModal"
            onClick={handleSubmit}
          >
            Continue Import
          </Button>
          <Button
            class="btn btn-secondary btn-outline-warning"
            style={{
              borderRadius: "12px",
              width: "15%",
              backgroundColor: "white",
              color: "orange",
              border: "2px solid orange",
              fontSize: "12px",
              padding: "10px",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;

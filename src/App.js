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
    console.log(files);
    alert(files[0]?.name);
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
        >
          X
        </Button>
        <Row>
          <Col></Col>
          <Col>
            <div style={{ width: "100w", textAlign: "center" }}>
              <Modal.Title>Document Upload</Modal.Title>
              <hr className="hrHeader"></hr>
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
                  <label className="skyhopText skyhopLabel">
                    Select a manifest you'd like to import
                  </label>
                </div>
                <FileDragDropCard setFiles={setFiles}></FileDragDropCard>
                <hr className="hrSection"></hr>
                <div>
                  <label className="skyhopText skyhopLabel">
                    Elapse Data Checking
                  </label>
                  <ElapsedDataCheck checkFile={files} />
                  <hr className="hrSection"></hr>
                  <label className="skyhopLabel skyhopText">
                    Tolerance Window:
                  </label>
                  <ToleranceWindow />
                </div>
              </Col>
              <Col xs={4} style={{ marginLeft: "4%" }}>
                <SchedulingSettingsCard />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="border-0" style={{ justifyContent: "center" }}>
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            Submit Upload
          </Button>
          <Button
            size="lg"
            class="btn btn-outline-warning"
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

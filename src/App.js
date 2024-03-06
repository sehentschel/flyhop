import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FileDragDropCard from "./components/FileDragDropCard";
import ClinicDropdown from "./components/ClientDropdown";
import "./css/modal.css";
import SchedulingSettingsCard from "./components/SchedulingSettingsCard";

const App = () => {
  const [show, setShow] = useState(false);
  const [files, setFiles] = useState();

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
    <div class="container" style={{ display: "flex", alignContent: "center" }}>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="xl"
      >
        <Button
          onClick={handleClose}
          style={{ width: "50px", marginTop: "20px", marginLeft: "20px" }}
        >
          X
        </Button>
        <Modal.Header className="border-0">
          <Modal.Title>Document Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="row">
            <div class="col">
              <hr className="hrSection"></hr>
              <FileDragDropCard setFiles={setFiles}></FileDragDropCard>
              <hr className="hrSection"></hr>
            </div>

            <div class="col">
              <SchedulingSettingsCard />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0" style={{ justifyContent: "center" }}>
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            Submit Upload
          </Button>
          <Button
            size="lg"
            class=" btn btn-outline-warning"
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

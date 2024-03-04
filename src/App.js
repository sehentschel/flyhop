import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FileDragDropCard from "./components/FileDragDropCard";
import ClinicDropdown from "./components/ClientDropdown";
import "./css/modal.css";
import ClientSelectorCard from "./components/ClientSelectorCard";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal"
        size="xl"
      >
        <Modal.Header className="border-0" closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="left-component">
            <hr className="hrSection"></hr>
            <FileDragDropCard></FileDragDropCard>
            <hr className="hrSection"></hr>
          </div>

          <div className="right-component">
            <ClientSelectorCard />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" size="lg">
            Submit Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default App;

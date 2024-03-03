import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FileDragDropCard from "./components/FileDragDropCard";
import "./css/modal.css";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const exampleText = "ex\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

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
          <p>{exampleText}</p>
          <div className="left-component">
            <FileDragDropCard></FileDragDropCard>
          </div>
          <div>
            <p>right content</p>
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

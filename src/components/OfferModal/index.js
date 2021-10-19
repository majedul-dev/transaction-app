import React from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../Input";
// import Button from "../Button";

const OfferModal = ({ show, handleClose }) => {
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create an offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="">Name</label>
            <Input type="text" placeholder="Name" width="100%" />
            <label htmlFor="">Phone</label>
            <Input type="text" placeholder="Mobile Number" width="100%" />
            <label htmlFor="">Description</label>
            <textarea placeholder="Description" style={{ width: "100%" }} />
            <small>Upload picture of product</small>
            <Input type="file" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button" onClick={handleClose}>
            Close
          </Button>
          <Button className="button" onClick={handleClose}>
            Send Offer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OfferModal;

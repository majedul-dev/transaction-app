import React from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../Input";
// import Button from "../Button";

const TrackOrderModal = ({ show, handleClose }) => {
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Tracking Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="">Tracking ID</label>
              <input
                type="text"
                placeholder="Tracking ID"
                className="form-control"
              />
            </div>
            <div className="mt-4">
              <h4>Shipment status</h4>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Shipped
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Pending
                </label>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button" onClick={handleClose}>
            Close
          </Button>
          <Button className="button" onClick={handleClose}>
            Track
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TrackOrderModal;

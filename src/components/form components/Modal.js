import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyCustomModal(props) {
    return (
        <Modal
            show={props.show}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Cropped Image
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: 'block', margin: 'auto'}}>
               <img src={props.src} style={{border: 'solid', borderWidth:'2px'}}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}> OK </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyCustomModal;
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddBookForm from './AddBookForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddBookModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Book
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddBookForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddBookModal;
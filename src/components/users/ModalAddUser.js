import { Modal, Button } from 'react-bootstrap'
import UserForm from './UserForm'

export default function ModalAddUser({ show, handleClose, handleShow }) {
    return (
        <>
            <h5 class="card-title m-b-0">User list</h5>
            <button className="btn btn-primary" onClick={handleShow}>Add user</button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add user form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
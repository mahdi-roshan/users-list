import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import UserForm from './UserForm'

export default function ModalAddUser({ setUsers }) {
    const [modalUser, setModalUser] = useState({});
    // show and disable modal 
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setUsers(prevState => {
            return [
                ...prevState,
                modalUser
            ]
        })
    }
    const handleShow = () => setShow(true);

    return (
        <>
            <h5 className="card-title m-b-0">User list</h5>
            <button className="btn btn-primary" onClick={handleShow}>Add user</button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add user form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserForm setModalUser={setModalUser} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    )
}
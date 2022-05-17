import { useState } from 'react';
import { Modal } from 'react-bootstrap'
import UserForm from './UserForm'
import ToastNotif from '../ToastNotif'

export default function ModalAddUser({ setUsers }) {

    // user state for add user
    const [user, setUser] = useState({
        id: null,
        name: '',
        family: '',
        userName: '',
        email: '',
        birthday: '',
        gender: '',
        role: ''
    });

    // show and disable modal 
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
        if (user.name !== ''
            && user.family !== ''
            && user.userName !== ''
            && user.email !== ''
            && user.birthday !== ''
            && user.gender !== ''
            && user.role !== ''
        ) {
            // send users list to parent component for show
            setUsers(prevState => {
                return [
                    ...prevState,
                    user
                ]
            })
            setShowToast(true);
            setUser({
                id: null,
                name: '',
                family: '',
                userName: '',
                email: '',
                birthday: '',
                gender: '',
                role: ''
            })
        }


        setTimeout(() => {
            setShowToast(false);
        }, 2000);

    }
    const handleShowModal = () => setShowModal(true);

    const [showToast, setShowToast] = useState(false)

    return (
        <>
            <h3 className="card-title m-b-0">User list</h3>
            <button className="btn btn-primary" onClick={handleShowModal}>Add user</button>
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add user form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserForm user={user} setUser={setUser} handleClose={handleCloseModal} />
                </Modal.Body>
            </Modal>
            <ToastNotif show={showToast} message="User successfuly added" className="mb-5" />
        </>
    )
}
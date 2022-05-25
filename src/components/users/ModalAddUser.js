import { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap'
import UserForm from './UserForm'
import ToastNotif from '../ToastNotif'
import UsersContext from './../../Contexts/Users'
import axios from 'axios'

export default function ModalAddUser({ setUsers }) {

    const usersContext = useContext(UsersContext)

    const [user, setUser] = useState({
        name: '',
        password: '',
        family: '',
        userName: '',
        email: '',
        gender: '',
        role: ''
    });
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
        if (user.name !== ''
            && user.password !== ''
            && user.family !== ''
            && user.username !== ''
            && user.email !== ''
            && user.gender !== ''
            && user.role !== ''
        ) {
            axios.post('https://6287d6e560c111c3ead01f77.endapi.io/users', {
                email: user.email,
                name: user.name,
                family: user.family,
                password: user.password,
                username: user.username,
                gender: user.gender,
                role: user.role,
            }).then(response => {
                usersContext.dispatch({
                    type: 'add_user', payload: {
                        user
                    }
                })
            }).catch(err => {
                console.log(err);
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
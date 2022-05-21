import { useState , useContext } from 'react';
import { Modal } from 'react-bootstrap'
import UserForm from './UserForm'
import ToastNotif from '../ToastNotif'
import UsersContext from './../../Contexts/users'
import axios from 'axios'

export default function ModalAddUser({ setUsers }) {

    const usersContext = useContext(UsersContext)

    // user state for add user
    const [user, setUser] = useState({
        id: null,
        name: '',
        family: '',
        userName: '',
        email: '',
        number: '',
        gender: '',
        role: ''
    });

    console.log(usersContext.users)

    // show and disable modal 
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
        if (user.name !== ''
            && user.family !== ''
            && user.userName !== ''
            && user.email !== ''
            && user.number !== ''
            && user.gender !== ''
            && user.role !== ''
        ) {
            axios.post('https://6287d6e560c111c3ead01f77.endapi.io/users' , {
                email : user.email , 
            })
            // send users list to parent component for show
            usersContext.dispatch({type:'add_user' , payload :{
                user
            }})

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
            {/* <ToastNotif show={showToast} message="User successfuly added" className="mb-5" /> */}
        </>
    )
}
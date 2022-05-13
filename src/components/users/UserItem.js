import { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { Modal } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai';
import UserFormEdit from './UserFormEdit'

export default function UserItem({ person, deleteUser }) {
    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    return (
        <tr>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.family}</td>
            <td>{person.userName}</td>
            <td>{person.email}</td>
            <td>{person.birthday}</td>
            <td>{person.gender}</td>
            <td>{person.role}</td>
            <td >
                <BiEditAlt className="user-edit-icon" onClick={handleShow} />
                <AiOutlineDelete className="user-delete-icon" onClick={() => deleteUser(person.id)} />
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add user form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <UserFormEdit list={person}/>
                    </Modal.Body>
                </Modal>
            </td>
        </tr>
    )
}
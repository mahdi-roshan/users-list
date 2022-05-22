import { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import UserFormEdit from './UserFormEdit'

export default function UserItem({ person, deleteUser, editUser }) {

    const [edit, setEdit] = useState(false)
    const editHandler = (key, data) => {
        editUser(key, data)
        setEdit(false)
    }

    return (
        <>
            {!edit ? (
                <tr>
                    <td>{person.name}</td>
                    <td>{person.family}</td>
                    <td>{person.username}</td>
                    <td>{person.email}</td>
                    <td>{person.gender}</td>
                    <td>{person.role}</td>
                    <td >
                        <BiEditAlt className="user-edit-icon" onClick={() => setEdit(true)} />
                        <AiOutlineDelete className="user-delete-icon" onClick={() => deleteUser(person.id)} />
                    </td>
                </tr>
            )
                : <UserFormEdit person={person} edit={editHandler} />
            }
        </>

    )
}
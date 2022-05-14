import { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import UserFormEdit from './UserFormEdit'

export default function UserItem({ person, deleteUser, setUsers, editUser }) {

    const [edit, setEdit] = useState(false)

    const editHandler = (key , data) =>{
        console.log(key, data)
        editUser(key , data)
    }

    return (
        <>
            {!edit ? (
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
                            <BiEditAlt className="user-edit-icon" onClick={() => setEdit(true)}/>
                            <AiOutlineDelete className="user-delete-icon" onClick={() => deleteUser(person.id)} />
                        </td>
                    </tr>
            )
            : <UserFormEdit person={person} edit={editHandler}/>
        }
        </>

    )
}
import { useState, useContext } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import UserFormEdit from './UserFormEdit'
import UsersContext from '../../Contexts/Users'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function UserItem({ person, deleteUser }) {

    const usersContext = useContext(UsersContext);

    const [edit, setEdit] = useState(false)
    const editUser = (key, data) => {
        setEdit(false)
        let updateData = {
            id: data.id,
            email: data.email,
            name: data.name,
            password: Math.floor(Math.random() * 100000).toString(),
            family: data.family,
            username: data.username,
            gender: data.gender,
            role: data.role,
        }
        axios
            .put(`https://6287d6e560c111c3ead01f77.endapi.io/users/${key}`, updateData)
            .then(response => {
                usersContext.dispatch({
                    type: 'edit_user', payload: {
                        updateData
                    }
                })
                Swal.fire(
                    'Edited!',
                    'The successfuly edited',
                    'success'
                )
            }).catch(err => {
                console.log(err)
            })
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
                : <UserFormEdit person={person} edit={editUser} />
            }
        </>

    )
}
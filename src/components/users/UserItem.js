import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

export default function UserItem({ person }) {
    return (
        <tr>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.family}</td>
            <td>{person.username}</td>
            <td>{person.email}</td>
            <td>{person.birthday}</td>
            <td>{person.gender}</td>
            <td>{person.role}</td>
            <td >
                <BiEditAlt className="user-edit-icon" />
                <AiOutlineDelete className="user-delete-icon" />
            </td>
        </tr>
    )
}
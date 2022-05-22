import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export default function UserFormEdit({ person , edit }) {

    const [info, setInfo] = useState(person)

    const handleInput = e => {
        let name = e.target.name;
        let value = e.target.value;

        setInfo(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <tr>
            <td>
                <Form.Control value={info.name} name="name" type="text" onChange={handleInput} required /></td>
            <td>
                <Form.Control value={info.family} name="family" type="text" onChange={handleInput} required /></td>
            <td>
                <Form.Control value={info.userName} name="userName" type="text" onChange={handleInput} required /></td>
            <td>
                <Form.Control value={info.email} name="email" type="text" onChange={handleInput} required /></td>
            <td>
                <Form.Select value={info.gender} name="gender" aria-label="Default select example" onChange={handleInput} required>
                    <option value="">Please select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Form.Select></td>
            <td>
                <Form.Select value={info.role} name="role" aria-label="Default select example" onChange={handleInput} required>
                    <option value="">Please select role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </Form.Select></td>
            <td >
                <Button className="btn btn-info" onClick={() => edit(info.id , info)}>Edit</Button>
            </td>
        </tr>
    )
}
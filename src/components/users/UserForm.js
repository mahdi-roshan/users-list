import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
export default function UserForm({ setModalUser, handleClose }) {
    const [user, setUser] = useState({
        name: '',
        family: '',
        userName: '',
        email: '',
        birthday: '',
        gender: '',
        role: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        setModalUser(user)
    }

    const handleInput = e => {
        let name = e.target.name;
        let value = e.target.value;
        
        setUser(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" onChange={handleInput} />
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Family</Form.Label>
                        <Form.Control name="family" type="text" onChange={handleInput} />
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="userName" type="text" onChange={handleInput} />
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="text" onChange={handleInput} />
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control name="birthday" type="text" onChange={handleInput} />
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control name="gender" type="text" onChange={handleInput} />
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Role</Form.Label>
                        <Form.Control name="role" type="text" onChange={handleInput} />
                    </Form.Group>
                </div>
            </div>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
                Add
            </Button>
        </form>
    )
}
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
export default function UserForm({ modalUser, setModalUser, handleClose }) {

    const handleSubmit = e => {
        e.preventDefault()
        handleClose()
    }

    const handleInput = e => {
        let name = e.target.name;
        let value = e.target.value;
        setModalUser(prevState => {
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
                        <Form.Control name="name" type="text" onChange={handleInput} required/>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Family</Form.Label>
                        <Form.Control name="family" type="text" onChange={handleInput} required/>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="userName" type="text" onChange={handleInput} required/>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="text" onChange={handleInput} required/>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group controlId="dob">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type="date" name="birthday" placeholder="Date of Birth" onChange={handleInput} required/>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select name="gender" aria-label="Default select example" onChange={handleInput} required>
                        <option value="" disable>Please select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                </div>
                <div className="col-md-6 mt-1">
                    <Form.Label>Role</Form.Label>
                    <Form.Select name="role" aria-label="Default select example" onChange={handleInput} required>
                        <option value="" disable>Please select role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </Form.Select>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end mt-2">
                <Button className="me-3" variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button type="submit" variant="primary">
                    Add
                </Button>
            </div>
        </form>
    )
}
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Validator from 'Validator'

const rules = {
    name: 'required',
    family: 'required',
    password : 'required|min:8',
    username: 'required|min:5',
    gender: 'required',
    role: 'required',
    email: 'required|email',
}

export default function UserForm({ user, setUser, handleClose }) {

    const [errors, setErrors] = useState({})

    const validation = () => {
        return new Promise((resolve, reject) => {
            const v = Validator.make(user, rules)
            if (v.fails()) {
                const errs = v.getErrors();
                Object.entries(errs).forEach(([key, value]) => errs[key] = value[0])
                return reject(errs)
            }
            return resolve(true)
        })
    }

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            await validation()
            handleClose()
        } catch (errors) {
            setErrors(errors)
        }
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
                        <small className="text-danger">{errors.name}</small>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Family</Form.Label>
                        <Form.Control name="family" type="text" onChange={handleInput} />
                        <small className="text-danger">{errors.family}</small>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" onChange={handleInput} />
                        <small className="text-danger">{errors.password}</small>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>username</Form.Label>
                        <Form.Control name="username" type="text" onChange={handleInput} />
                        <small className="text-danger">{errors.username}</small>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="text" onChange={handleInput} />
                        <small className="text-danger">{errors.email}</small>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select name="gender" aria-label="Default select example" onChange={handleInput}>
                        <option value="">Please select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                    <small className="text-danger">{errors.gender}</small>
                </div>
                <div className="col-md-6 mt-1">
                    <Form.Label>Role</Form.Label>
                    <Form.Select name="role" aria-label="Default select example" onChange={handleInput}>
                        <option value="">Please select role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </Form.Select>
                    <small className="text-danger">{errors.role}</small>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end mt-2">
                <Button className="me-3" variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button onClick={handleSubmit} type="submit" variant="primary">
                    Add
                </Button>
            </div>
        </form>
    )
}
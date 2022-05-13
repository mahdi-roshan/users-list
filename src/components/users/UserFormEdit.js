import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export default function UserFormEdit({list}) {
    
    return (
        <form>
            <div className="row">
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={list.name} name="name" type="text" required />
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Family</Form.Label>
                        <Form.Control value={list.family} name="family" type="text" required />
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={list.userName} name="userName" type="text" required />
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={list.email} name="email" type="text" required />
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group controlId="dob">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control value={list.birthday} type="date" name="birthday" placeholder="Date of Birth" required />
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select value={list.gender} name="gender" aria-label="Default select example" required>
                        <option value="">Please select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                </div>
                <div className="col-md-6 mt-1">
                    <Form.Label>Role</Form.Label>
                    <Form.Select value={list.role} name="role" aria-label="Default select example" required>
                        <option value="">Please select role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </Form.Select>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end mt-2">
                <Button className="me-3" variant="secondary">
                    Close
                </Button>
                <Button type="submit" variant="primary">
                    Add
                </Button>
            </div>
        </form>
    )
}
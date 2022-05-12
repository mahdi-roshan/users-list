import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import UsersList from './components/users/UsersList';

import './App.css'

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <h5 class="card-title m-b-0">User list</h5>
            <button className="btn btn-primary" onClick={handleShow}>Add user</button>
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Add user form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Family</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Birthday</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Role</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="col-12 mt-3">
            <div class="card">
              <UsersList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

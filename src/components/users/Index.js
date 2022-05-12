import { useState } from 'react';
import UsersList from './UsersList';
import UserListHead from './UserListHead';



export default function UsersPage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-between">
                    <UserListHead show={show} handleClose={handleClose} handleShow={handleShow} />
                </div>
                <div className="col-12 mt-3">
                    <div class="card">
                        <UsersList />
                    </div>
                </div>
            </div>
        </div>
    )
}
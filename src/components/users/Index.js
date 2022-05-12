import { useState } from 'react';
import UsersList from './UsersList';
import ModalAddUser from './ModalAddUser';



export default function UsersPage() {

    // show and disable modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [users , setusers] = useState([]);


    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-between">
                    <ModalAddUser  show={show} handleClose={handleClose} handleShow={handleShow} />
                </div>
                <div className="col-12 mt-3">
                    <div class="card">
                        <UsersList list={users}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
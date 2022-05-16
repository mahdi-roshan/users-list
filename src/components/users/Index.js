import { useState } from 'react';
import UsersList from './UsersList';
import ModalAddUser from './ModalAddUser';


export default function UsersPage() {

    // users state for show edit or delete records 
    const [users , setUsers] = useState([]);

    return (
        <div className="container py-5 mt-5">
            <div className="row align-items-center">
                <div className="col-12 d-flex justify-content-between">
                    <ModalAddUser setUsers={setUsers}/>
                </div>
                <div className="col-12 mt-3">
                    <div className="card">
                        <UsersList list={users} setUsers={setUsers}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
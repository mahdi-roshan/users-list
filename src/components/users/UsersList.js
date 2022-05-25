import { useContext } from 'react'
import UserItem from './UserItem'
import Swal from 'sweetalert2'
import axios from 'axios'
import UsersContext from '../../Contexts/Users'

export default function UsersList({ list, setUsers }) {

    const usersContext = useContext(UsersContext);
    const { users } = usersContext;

    function deleteUser(key) {
        Swal.fire({
            title: 'Are you sure?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                .delete(`https://6287d6e560c111c3ead01f77.endapi.io/users/${key}`)
                .then(response => {
                    usersContext.dispatch({
                        type: 'edit_user', payload: {
                            key
                        }
                    })
                    Swal.fire(
                        'Deleted!',
                        'The record has been deleted',
                        'success'
                    )
                }).catch(err => {
                    console.log(err)
                })
            }
        })
    }

    return (
        <>
            {users.length
                ? <div className="table-responsive">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Family</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Role</th>
                                <th scope="col" >Action</th>
                            </tr>
                        </thead>
                        <tbody className="customtable">
                            {users.map((user, index) => <UserItem key={index} person={user} deleteUser={deleteUser} />)}
                        </tbody>
                    </table>
                </div>
                : <div className="text-center"><h4 >There is no record to show</h4> </div>
            }

        </>
    )
}
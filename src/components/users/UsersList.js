import { useContext } from 'react'
import UserItem from './UserItem'
// import Swal from 'sweetalert2'
import UsersContext from './../../Contexts/users'

export default function UsersList({ list, setUsers }) {

    const usersContext = useContext(UsersContext);
    const { users } = usersContext;

    // function deleteUser(key) {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             setUsers(prevState => {
    //                 return [
    //                     ...prevState.filter(item => item.id !== key)
    //                 ]
    //             })
    //             Swal.fire(
    //                 'Deleted!',
    //                 'The record has been deleted',
    //                 'success'
    //             )
    //         }
    //     })

    // }

    // function editUser(key, data) {
    //     let item = list.find(user => user.id === key)
    //     item = data;
    //     let newUsers = list.filter(user => user.id !== key)
    //     setUsers([...newUsers, item])
    //     Swal.fire(
    //         '',
    //         'The record has been edited',
    //         'success'
    //     )
    // }

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
                            {users.map((user , index) => <UserItem key={index} person={user} />)}
                        </tbody>
                    </table>
                </div>
                : <div className="text-center"><h4 >There is no record to show</h4> </div>
            }

        </>
    )
}
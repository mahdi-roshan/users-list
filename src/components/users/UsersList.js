import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

export default function UsersList() {
    return (
        <>
            <div class="table-responsive">
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Family</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Birthday</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Role</th>
                            <th scope="col" >Action</th>
                        </tr>
                    </thead>
                    <tbody class="customtable">
                        <tr>
                            <td>mahdi</td>
                            <td>Roshanzamir</td>
                            <td>mahdi-roshan</td>
                            <td>mahdi@gmail.com</td>
                            <td>21/8/1997</td>
                            <td>male</td>
                            <td>Admin</td>
                            <td >
                                <BiEditAlt className="user-edit-icon" />
                                <AiOutlineDelete className="user-delete-icon" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
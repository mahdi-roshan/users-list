import React from 'react';
import UserItem from './UserItem'


export default function UsersList() {

    const people = [
        { name: 'mahdi', family: 'Roshanzamir', username: 'mahdi-roshan', email: 'mahdi@gmail.com', birthday: '21/8/1997', gender: 'male', role: 'Admin' }
    ];

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
                        {people.map((person) => <UserItem person={person} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}
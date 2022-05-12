import UserItem from './UserItem'


export default function UsersList({ list }) {

    return (
        <>
            {list.length
                ? <div class="table-responsive">
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Id</th>
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
                            {list.map((user) => <UserItem person={user} />)}
                        </tbody>
                    </table>
                </div>
                : <div className="text-center"><h4 >There is no record to show</h4> </div>
            }

        </>
    )
}
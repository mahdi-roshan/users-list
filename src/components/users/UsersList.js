import UserItem from './UserItem'


export default function UsersList({ list , setUsers}) {

    function deleteUser(key){
        setUsers(prevState => {
            return [
                ...prevState.filter(item => item.id !== key)
            ]
        })
    }
    
    return (
        <>
            {list.length
                ? <div className="table-responsive">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Id</th>
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
                        <tbody className="customtable">
                            {list.map((user) => <UserItem key={user.id} person={user} deleteUser={deleteUser} />)}
                        </tbody>
                    </table>
                </div>
                : <div className="text-center"><h4 >There is no record to show</h4> </div>
            }

        </>
    )
}
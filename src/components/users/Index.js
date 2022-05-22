import { useReducer, useEffect } from 'react';
import UsersList from './UsersList';
import ModalAddUser from './ModalAddUser';
import axios from 'axios'
// import contexts
import UsersContext from './../../Contexts/users'

// import reducers
import UserReducer from './../../Reducers/userReducer'

export default function UsersPage() {

    const [state, dispatch] = useReducer(UserReducer, {
        users: []
    })

    useEffect(() => {
        axios
            .get('https://6287d6e560c111c3ead01f77.endapi.io/users')
            .then(response => {
                dispatch({type: 'init_users' , payload :{
                    userList : response.data.data
                }})

                // console.log(state.users)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <UsersContext.Provider value={{
            users: state.users,
            dispatch
        }}>
            <div className="container py-5 mt-5">
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-between">
                        <ModalAddUser />
                    </div>
                    <div className="col-12 mt-3">
                        <div className="card">
                            <UsersList />
                        </div>
                    </div>
                </div>
            </div>
        </UsersContext.Provider>
    )
}
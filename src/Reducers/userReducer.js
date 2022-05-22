export default function UserReducer(state, action) {
    switch (action.type) {
        case 'init_users':
            return initUsers(state, action)
        case 'add_user':
            return add_user(state, action)
        default:
            return state
    }
}


let initUsers = (state, action) => {
    let { userList } = action.payload
    console.log(state.users)
    console.log(userList)
    return {
        users: [
            ...state.users,
            ...userList
        ]
    }
}


let add_user = (state, action) => {
    let { user } = action.payload;
    return {
        ...state,
        users: [
            ...state.users,
            user
        ]
    }
}


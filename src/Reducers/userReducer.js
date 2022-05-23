export default function UserReducer(state, action) {
    switch (action.type) {
        case 'init_users':
            return initUsers(state, action)
        case 'add_user':
            return add_user(state, action)
        case 'edit_user':
            return edit_user(state, action)
        default:
            return state
    }
}


const initUsers = (state, action) => {
    let { userList } = action.payload
    return {
        users: [
            ...state.users,
            ...userList
        ]
    }
}


const add_user = (state, action) => {
    let { user } = action.payload;
    return {
        ...state,
        users: [
            ...state.users,
            user
        ]
    }
}


const edit_user = (state, action) => {
    let key = action.payload.updateData.id;
    let item = state.users.find(user => user.id === key)
    item = action.payload.updateData;
    let newUsers = state.users.filter(user => user.id !== key)
    return {
        users: [...newUsers, item]
    }
}

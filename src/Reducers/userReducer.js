export default function UserReducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case 'add_user':
            return add_user(state, action)
        default:
            return state
    }
}


let add_user = (state, action) => {
    let { user } = action.payload;
    return {
        ...state,
        users : [
            ...state.users,
            user
        ]
    }
}


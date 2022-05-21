export default function UserReducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case 'add_user':
            let { user } = action.payload;
            return {
                ...state,
                users: [
                    ...state.users,
                    user
                ]
            }
            break;
        case 'edit_user':
            return {
                
            }
        default:
            return state
    }
    // return{};
}


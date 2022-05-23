import react from 'react';


const usersContext = react.createContext({
    users: [],
    add: () => { },
    editUser: () => { },
    deleteUser: () => { },
    initUsers: () => { }
});


export default usersContext;
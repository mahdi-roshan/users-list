import react from 'react';


const usersContext = react.createContext({
    users: [],
    add: () => { },
    editUser: () => { },
    deleteUser: () => { }
});


export default usersContext;
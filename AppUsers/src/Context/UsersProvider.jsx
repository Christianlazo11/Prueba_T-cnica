import { createContext, useState } from "react";

const UserContext = createContext({});

export const UsersProvider = ({ children }) => {

    const [users, setUsers] = useState({});
    const [viewModal, setViewModal] = useState(false);
    const [userModal, setUserModal] = useState({});

    return (<UserContext.Provider
        value={{ users, setUsers ,viewModal, setViewModal, userModal, setUserModal }}
    >
        {children}
    </UserContext.Provider>)
}

export default UserContext;
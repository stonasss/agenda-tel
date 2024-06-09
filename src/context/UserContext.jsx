import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();
export default UserContext;

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useLocalStorage('userData', {});
    const [userContacts, setUserContacts] = useState([])

    return (
        <UserContext.Provider value={{ userData, setUserData, userContacts, setUserContacts }}>
            {children}
        </UserContext.Provider>
    );
};
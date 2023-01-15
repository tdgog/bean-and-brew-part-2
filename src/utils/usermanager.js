import React, {useState} from "react";

export const UserContext = React.createContext([null, () => {}]);

export default function UserManager({children}) {
    const [user, setUser] = useState(null);

    function updateUser(value) {
        // Validation

        setUser(value);
    }

    return <UserContext.Provider value={[user, updateUser]}>
        {children}
    </UserContext.Provider>
}

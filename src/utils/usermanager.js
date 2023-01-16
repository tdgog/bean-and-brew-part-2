import React, {useState} from "react";
import bcrypt from 'bcryptjs';

export const UserContext = React.createContext([null, () => {}]);

export default function UserManager({children}) {
    const [user, setUser] = useState(null);

    function createUser(email, password) {
        fetch(`http://localhost:8000/isUnique`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
            .then(response => response.json())
            .then(data => {
                if(!data.unique) return;

                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function (err, hash) {
                        // Send email, hash, and salt to database
                        const requestOptions = {
                            method: 'POST',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ email: email, hash: hash })
                        };
                        fetch(`http://localhost:8000/addUser`, requestOptions)
                            .then(response => response.json())
                            .then(data => {
                                console.log(data);
                            })
                    })
                })
            })
    }

    return <UserContext.Provider value={[user, createUser]}>
        {children}
    </UserContext.Provider>
}

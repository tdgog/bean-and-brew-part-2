import React, {useState} from "react";
import bcrypt from 'bcryptjs';
import Cookies from 'universal-cookie';

export const UserContext = React.createContext([null, () => {}, () => {}]);

// admin@admin.admin
// adminpassword

export default function UserManager({children}) {
    const [user, setUser] = useState(null);
    const cookie = new Cookies();

    function generateHash(password) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    resolve(hash);
                })
            })
        })
    }

    function logIn(email, password) {
        console.log(email, password)
        fetch(`http://localhost:8000/isUnique`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
            .then(response => response.json())
            .then(async data => {
                if (data.unique) return;
                const hash = await generateHash(password);
                console.log(email, hash)

                fetch('http://localhost:8000/login', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email, hash: hash })
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        cookie.set('login-token', data.token, { expires: new Date(data.expiry) })
                    })
            })

    }

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
            .then(async data => {
                if (!data.unique) return;

                const hash = await generateHash(password);
                // Send email, hash, and salt to database
                const requestOptions = {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email: email, hash: hash})
                };
                fetch(`http://localhost:8000/addUser`, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        // Save to cookies
                        cookie.set('login-token', data.token, {expires: new Date(data.expiry)})
                    })
            })
    }

    return <UserContext.Provider value={[user, createUser, logIn]}>
        {children}
    </UserContext.Provider>
}

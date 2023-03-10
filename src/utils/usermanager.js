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
                    resolve([hash, salt]);
                })
            })
        })
    }

    function sendAPIRequest(route, body) {
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:8000/${route}`, {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }

    async function logIn(email, password) {
        const isUnique = (await sendAPIRequest('isUnique', { email: email })).unique;
        if(isUnique) return;

        const salt = (await sendAPIRequest('getSalt', { email: email })).salt;
        bcrypt.hash(password, salt, async function (err, hash) {
            const loginInformation = await sendAPIRequest('login', { email: email, hash: hash });
            cookie.set('login-token', loginInformation.token, { expires: new Date(loginInformation.expiry) })
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

                const [hash, salt] = await generateHash(password);
                // Send email, hash, and salt to database
                const requestOptions = {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email: email, hash: hash, salt: salt})
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

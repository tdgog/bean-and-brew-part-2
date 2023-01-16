import {TextField} from "@mui/material";
import {useState, useContext} from "react";
import {UserContext} from "../utils/usermanager";

function HalfScreen({ children, className }) {
    return <div className={`${className} h-full w-1/2`} children={children} />
}

function TextDivider({children}) {
    function HalfDivider() {
        return <div className={'h-[2px] w-64 bg-black'} />
    }

    return <div className={'my-5 flex items-center justify-center space-x-3'}>
        <HalfDivider />
        <p>{children}</p>
        <HalfDivider />
    </div>
}

export default function CreateAccount() {
    const userContext = useContext(UserContext);

    const [email, setEmail] = useState(null);
    const [emailError, setEmailError] = useState(null);
    function handleEmailUpdate(e) {
        setEmail(e.target.value);

        if(!email.includes('@') || !email.includes('.')) {
            setEmailError('Invalid email');
        } else {
            setEmailError(null);
        }
    }

    const [password, setPassword] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    function handlePasswordUpdate(e) {
        setPassword(e.target.value);

        if(password.length < 8) {
            setPasswordError('Password must be longer than 8 characters');
        } else {
            setPasswordError(null)
        }
    }

    return <div className={'h-screen w-screen flex justify-center items-center'}>
        <HalfScreen className={'bg-blue-500'}>

        </HalfScreen>
        <HalfScreen className={'p-5 py-36 flex items-center flex-col'}>
            <h1 className={'text-4xl font-title font-bold'}>Create your Account</h1>
            <h2 className={'text-xl font-subtitle text-neutral-600'}>Enter the fields below to get started</h2>
            <TextDivider>OR</TextDivider>
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={handleEmailUpdate}
                error={emailError !== null}
                helperText={`${emailError || ''}`}
                sx={{ width: '70%', marginBottom: '10px' }}
                required
            />
            <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={handlePasswordUpdate}
                error={passwordError !== null}
                helperText={`${passwordError || ''}`}
                sx={{ width: '70%' }}
                required
            />
            <div
                className={'form-input-button'}
                onClick={() => {
                    userContext[1](email, password);
                }
            }>
                Create account
            </div>
        </HalfScreen>
    </div>
}

import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../utils/usermanager";

function Bar({ children, homepage }) {
    if(homepage)
        return <div className={'w-screen h-20 bg-opacity-60 backdrop-filter backdrop-blur-xl'}>
            {children}
        </div>

    return <div className={'w-screen h-20 px-5 flex items-center justify-between'}>
        {children}
    </div>
}

function Navbutton({ children, to }) {
    const navigate = useNavigate();
    return <div
        className={'py-5 px-3 flex items-center select-none cursor-pointer'}
        onClick={() => navigate('/' + to)}
    >
        <p className={'hover:text-gray-400 transition-all'}>{children}</p>
    </div>
}

function UserIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
}

export default function Navbar({ homepage = false }) {
    const [user] = useContext(UserContext);
    console.log(user);

    return <Bar>
        <img className={'h-12 w-12'}  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png'} alt={'logo lol'}/>
        <div className={'text-white text-xl h-full flex'}>
            <Navbutton to=''>Home</Navbutton>
            <Navbutton to='menu'>Menu</Navbutton>
            <Navbutton to='order'>Order online</Navbutton>
            <Navbutton to=''>Lessons</Navbutton>
            <Navbutton to=''>Baked goods hampers</Navbutton>
            <Navbutton to={user === null ? 'create' : 'account'}><UserIcon /></Navbutton>
        </div>
    </Bar>
}

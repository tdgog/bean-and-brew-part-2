function Bar({ children, homepage }) {
    if(homepage)
        return <div className={'w-screen h-20 bg-opacity-60 backdrop-filter backdrop-blur-xl'}>
            {children}
        </div>

    return <div className={'w-screen h-20 px-5 flex items-center justify-between'}>
        {children}
    </div>
}

function Navbutton({ children }) {
    return <div className={'py-5 px-2 flex items-center select-none cursor-pointer'}>
        <p className={'hover:text-gray-400 transition-all'}>{children}</p>
    </div>
}

export default function Navbar({ homepage = false }) {
    return <Bar>
        <img className={'h-12 w-12'}  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png'} alt={'logo lol'}/>
        <div className={'text-white text-xl h-full flex'}>
            <Navbutton>Home</Navbutton>
            <Navbutton>Menu</Navbutton>
            <Navbutton>Order online</Navbutton>
            <Navbutton>Lessons</Navbutton>
            <Navbutton>Baked goods hampers</Navbutton>
        </div>
    </Bar>
}

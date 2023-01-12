function Header({ title, description }) {
    return <div className={'bg-gradient-to-b from-red-900 to-red-800 h-72 w-full flex flex-col justify-center p-10'}>
        <p className={'text-7xl mb-5 text-white'}>{title}</p>
        <p className={'text-2xl text-white'}>{description}</p>
    </div>
}

export default function Menu() {
    return <div>
        <Header title={'Menu'} description={'Our menu'} />
    </div>
}

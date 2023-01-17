import Navbar from "./navbar";

function Header({ title, description }) {
    return <>
        <div className={'bg-gradient-to-b from-red-900 to-red-800 w-full'}>
            <Navbar />
            <div className={'h-56 p-10 flex flex-col justify-center'}>
                <p className={'text-7xl mb-4 text-white font-title'}>{title}</p>
                <p className={'text-2xl text-white font-subtitle'}>{description}</p>
            </div>
        </div>
    </>
}

export default function Page({ children, title, description, className }) {
    return <div className={'page-background'}>
        <div className={'h-screen w-screen'}>
            <Header title={title} description={description} />
            {children}
        </div>
    </div>
}

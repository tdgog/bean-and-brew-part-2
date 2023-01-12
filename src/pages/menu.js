import Navbar from "../components/navbar";

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

function Page({ children, title, description, className }) {
    return <div className={'h-screen page-background'}>
        <Header title={title} description={description} />
        <div className={className}>
            {children}
        </div>
    </div>
}

export default function Menu() {
    return <Page title={'Menu'} description={'Whatever your diet or preferences, there’s enough choice for everyone.'}
        className={'p-5'}
    >
        abc
    </Page>
}

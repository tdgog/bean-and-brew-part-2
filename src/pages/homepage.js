import Navbar from "../components/navbar";

export default function Homepage() {
    return <div className={'h-screen w-screen bg-homepage bg-cover bg-fixed'}>
        <Navbar />
        <div className={'flex justify-center items-center h-full w-screen fixed'}>
            <p className={'text-7xl'}>Bean & Brew</p>
        </div>
    </div>
}

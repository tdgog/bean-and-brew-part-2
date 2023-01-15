import Page from "../components/page";
import hotChocolate from "../assets/images/products/hot-chocolate.png";

function MenuItem() {
    return <div className={'rounded-full h-32 w-32 bg-red-700 flex flex-col items-center mx-2 mb-16 select-none cursor-pointer transition-all duration-1000 hover:bg-gradient-radial from-red-700 to-red-800 group'}>
        <img src={hotChocolate} alt={'hot chocolate'} className={'transition-all group-hover:scale-125'} />
        <p className={'pt-2'}>Hot Chocolate</p>
    </div>
}

export default function Menu() {
    return <Page
        title={'Menu'}
        description={'Whatever your diet or preferences, there’s enough choice for everyone.'}
        className={'p-5'}
    >
        <div className={'bg-white mx-52 p-5 flex flex-wrap justify-center'}>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </Page>
}

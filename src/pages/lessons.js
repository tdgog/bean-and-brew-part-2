import Page from "../components/page";

function Card({ image, name, description }) {
    return <div className={'w-96 bg-white'}>
        <div className={'h-56 w-full overflow-hidden'} >
            <img src={image} alt={name} />
        </div>
        <p>{name}</p>
        <p>{description}</p>
    </div>
}

export default function Lessons() {
    return <Page
        title={'Baking Lessons'}
        description={'Whatever your diet or preferences, there’s enough choice for everyone.'}
        className={'p-5'}
    >
        <div className={'flex flex-col items-center'}>
            <div>
                <Card name={'baking i guess'} description={'This baking lesson is an interactive and hands-on experience that will teach you the basics of baking and pastry arts. You will learn how to make a variety of sweet and savory baked goods, including cakes, cookies, breads, and pies.'} image={'https://www.littlelondonmagazine.co.uk/wp-content/uploads/kids-baking.jpg'} />
            </div>
        </div>
    </Page>
}
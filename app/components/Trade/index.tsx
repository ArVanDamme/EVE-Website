import Image from "next/image";

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Clear',
        subheading: 'Suppression de message (Modération)',
    },
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Fusee',
        subheading: 'Mise en sourdine d\'un utilisateur pour 2min par défaut',
    },
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Sanction',
        subheading: 'Sanction d\'un utiliasteur via un menu (Modération)',
    },
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'ServerInfo',
        subheading: 'Information du serveur (Modération)',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'En cours....',
        subheading: 'Ca arrive pas eu le temps de faire les 430 commandes',
    }
]

const Trade = () => {
    return (
        <div className="m-auto max-w-7xl mt-20 mb-5 align-top relative">
            <div className="radial-bgone hidden lg:block"></div>

            <div className="grid gap-x-5">
            <div>
                    <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-4">
                        {featuresdata.map((items, i) => (
                            <div className="bg-blue py-10 pr-12 pl-6 rounded-lg" key={i}>
                                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                                </div>
                                <h5 className="text-offwhite text-lg font-medium mb-4">{items.heading}</h5>
                                <p className="text-lightblue text-sm font-normal">{items.subheading}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade;

import Image from "next/image";

const featuresData = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'ServerInfo',
        subheading: 'Affiche des informations sur le serveur, utile pour la modération.',
    },
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Tutorat',
        subheading: 'Fournit des informations utiles pour aider les utilisateurs.',
    },
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Embed',
        subheading: 'Permet de créer des messages intégrés pour une présentation visuelle.',
    },
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Global',
        subheading: 'Applique une action au niveau du serveur dans son ensemble.',
    },
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Kick',
        subheading: 'Éjecte un utilisateur du serveur en cas de besoin de modération.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Mention',
        subheading: 'Mentionne un utilisateur spécifique dans le message.',
    },
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Permissions',
        subheading: 'Affiche les autorisations d\'un utilisateur sur le serveur.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Cards',
        subheading: 'Affiche des cartes pour le système de leveling.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Classement',
        subheading: 'Affiche le classement des utilisateurs basé sur le niveau.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Level',
        subheading: 'Affiche le niveau actuel d\'un utilisateur.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Lootbox',
        subheading: 'Fournit des récompenses aléatoires pour les utilisateurs.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'SetCard',
        subheading: 'Permet aux utilisateurs de personnaliser leur carte de profil.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Compte',
        subheading: 'Affiche des informations sur le compte de l\'utilisateur.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Help',
        subheading: 'Affiche les commandes disponibles et leurs descriptions.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Liens',
        subheading: 'Fournit des liens utiles pour la communauté.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Menu',
        subheading: 'Affiche un menu interactif pour faciliter la navigation.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Pile',
        subheading: 'Simule le fonctionnement d\'une pile (commande amusante).',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Ping',
        subheading: 'Vérifie la latence du bot sur le serveur.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Présentation',
        subheading: 'Affiche une présentation personnalisée de l\'utilisateur.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Remind',
        subheading: 'Permet de définir des rappels pour les utilisateurs.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'User',
        subheading: 'Affiche des informations sur un utilisateur spécifique.',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'OpenTicket',
        subheading: 'Ouvre un ticket pour demander de l\'aide ou signaler un problème.',
    },
];


const Trade = () => {
    return (
        <div className="m-auto max-w-7xl mt-20 mb-5 align-top relative">
            <div className="radial-bgone hidden lg:block"></div>

            <div className="grid gap-x-5">
            <div>
                    <div className="grid md:grid-cols-5 lg:grid-cols-5 gap-x-4 gap-y-4">
                        {featuresData.map((items, i) => (
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

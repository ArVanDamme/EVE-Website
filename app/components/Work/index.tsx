"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Moderation',
        subheading: 'Eve permet de gérer la partie modération du discord IUT Informatique, grâce à de nombreuses commandes tel',
        hiddenpara: 'que : ban (banissement), kick (expulsion), warn (avertissement), moon (sourdine) et bien d\'autres !',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Système de rôles',
        subheading: 'Eve gère également tous les rôles des utilisateurs. Cela permet aux arrivant de choisir leur rôles (étudiant  ou non).',
        hiddenpara: 'Des rôles scolaire sont ainsi disponibles pour leur année et leur groupe, mais aussi des rôles de jeu.',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Système de level',
        subheading: 'Dans le but de récompenser les membres les plus actifs une partie gain d\'xp lors de l\'envoie d\'un message est également disponible.',
        hiddenpara: 'Grâce à cet xp, les utilisateurs peuvent ensuite convertir cela en cosmétiques pour personaliser leur profil BOT !',
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Comment ca marche ?</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Eve a été concu pour pouvoir répondre aux demandes des utilisateurs en matières d'aide scolaire, un système de gestions des rôles de groupes et d'années est présent ainsi qu'un module de modération. En plus de cela Eve comporte une multitude de commandes utiles pour les élèves notament avec les liens utiles et autres.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;

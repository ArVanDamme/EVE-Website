
"use client"
const Simple = () => {
    return (
        <div className="simple-bg relative">
            <div className="simpleone"></div>
            <div className="simpletwo"></div>
            <div className="simplethree"></div>
            <div className="simplefour"></div>
            <div className="simplefive"></div>
            <div className="mx-auto max-w-5xl py-24 px-6">
                <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">Une manière simple de rejoindre une communauté d'élèves</h3>
                <div className="flex justify-center ">
                <button className='hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-12 navbutton text-white' onClick={() => window.open('https://discord.com/invite/4YJEDRtgXg', '_blank')}>Join Discord server</button>
                </div>
            </div>
            <div className="simplesix"></div>
            <div className="simpleseven"></div>
            <div className="simpleeight"></div>
            <div className="simplenine"></div>
            <div className="simpleten"></div>
        </div>
    )
}

export default Simple;

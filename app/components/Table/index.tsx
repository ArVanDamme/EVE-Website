import Image from "next/image";

interface table {
    index: number;
    name: string;
    level: number;
    xp: number;
    action: string;
    imgSrc: string;
}

const tableData: table[] = [
    {
        index: 1,
        name: "Zartax (Arthur)",
        imgSrc: '/images/Table/cryptoone.svg',
        level: 15,
        xp: 1200,
        action: "Admin",
    },
    {
        index: 2,
        name: "Kysouije",
        imgSrc: '/images/Table/cryptoone.svg',
        level: 12,
        xp: 12885,
        action: "User",
    },
    {
        index: 3,
        name: ".sha.sha.",
        imgSrc: '/images/Table/cryptoone.svg',
        level: 11,
        xp: 9146,
        action: "User",
    },
    {
        index: 4,
        name: "Phignis",
        imgSrc: '/images/Table/cryptoone.svg',
        level: 11,
        xp: 2390,
        action: "User",
    },
]

const Table = () => {
    return (
        <>
            <div className='mx-auto max-w-7xl pt-40 px-6' id="exchange-section">
                <div className="table-b bg-navyblue p-8 overflow-x-auto">
                    <h3 className="text-offwhite text-2xl">Classement Level (Update every 30d)</h3>
                    <table className="table-auto w-full mt-10">
                        <thead>
                            <tr className="text-white bg-darkblue rounded-lg">
                                <th className="px-4 py-4 font-normal">#</th>
                                <th className="px-4 py-4 text-start font-normal">Discord ID</th>
                                <th className="px-4 py-4 font-normal">Level</th>
                                <th className="px-4 py-4 font-normal">Xp</th>
                                <th className="px-4 py-4 font-normal">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((items, i) => (
                                <tr key={i} className="border-b border-b-darkblue">
                                    <td className="px-4 py-6 text-center text-white">{items.index}</td>
                                    <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5 "><Image src={items.imgSrc} alt={items.imgSrc} height={50} width={50} />{items.name}</td>
                                    <td className={`px-4 py-6 text-center ${items.level > 0 ? 'text-red' : 'text-green'} `}>{items.level}</td>
                                    <td className="px-4 py-6 text-center text-white">{items.xp.toLocaleString()}</td>
                                    <td className={`px-4 py-6 text-center ${items.action === 'Buy' ? 'text-green' : 'text-red'}`}>
                                        {items.action}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
        </>
    )
}

export default Table;

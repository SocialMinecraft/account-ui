import {Fragment} from "react";


export default async function MinecraftAccounts({token}: { token: string }) {
    const minecraftAccountRes = await fetch('https://account.somc.club/api/' + token + '/minecraft_accounts');
    if (minecraftAccountRes.status !== 200) {
        return (
            <div className="overflow-hidden bg-white shadow sm:rounded-lg p-10 mt-3">
                <div className="border-b border-gray-200 pb-5">
                    <h3 className="text-base font-semibold text-gray-900">Minecraft Accounts</h3>
                </div>
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    </div>
                    Error loading accounts
                </div>
            </div>
        );
    }
    const minecraftAccounts = await minecraftAccountRes.json();
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg p-10 mt-3">
            <div className="border-b border-gray-200 pb-5">
                <h3 className="text-base font-semibold text-gray-900">Minecraft Accounts</h3>
            </div>
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full">
                        <thead className="bg-white">
                        <tr>
                            <th scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                Name
                            </th>
                            <th scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Playtime
                            </th>
                            <th scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Deaths
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {minecraftAccounts.accounts.sort((a: { playtime_sec: number }, b: {
                            playtime_sec: number
                        }) => {
                            const aa = a.playtime_sec == undefined ? 0 : a.playtime_sec;
                            const bb = b.playtime_sec == undefined ? 0 : b.playtime_sec;
                            return bb - aa;
                        }).map((account: {
                            name: string;
                            username: string;
                            uuid: string;
                            playtime_sec: number;
                            deaths: number;
                            servers: {
                                name: string;
                                playtime_sec: number;
                                deaths: number;
                            }[];
                        }) => (
                            <Fragment key={account.uuid + "1"}>
                                <tr className="border-t border-gray-200">
                                    <th
                                        /*scope="colgroup"
                                        colSpan={4}*/
                                        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                                    >
                                        {account.username}
                                    </th>
                                    <th className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                        {secondsToFriendlyTime(account.playtime_sec)}
                                    </th>
                                    <th className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                        {account.deaths}
                                    </th>
                                    <th className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Remove
                                        </a>
                                    </th>
                                </tr>
                                {account.servers.map((server) => (
                                    <tr
                                        key={server.name + account.uuid + "2"}
                                        className={'border-t'}
                                    >
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                            {server.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {secondsToFriendlyTime(server.playtime_sec)}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {server.deaths}
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">

                                        </td>
                                    </tr>
                                ))}
                            </Fragment>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function secondsToFriendlyTime(seconds: number) {
    /*if (seconds < 60) return `${seconds} second${seconds !== 1 ? 's' : ''}`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''}`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''}`;

    const days = Math.floor(hours / 24);
    return `${days} day${days !== 1 ? 's' : ''}`;*/

    const days = Math.floor(seconds / 60 / 60 / 24);
    seconds -= days * 24 * 60 * 60;
    const hours = Math.floor(seconds / 60 / 60);

    let re = "";
    if (days > 0) {
        re += `${days} day${days !== 1 ? 's' : ''}`;
    }
    if (hours > 0) {
        if (re.length > 1) re += " ";
        re += `${hours} hour${hours !== 1 ? 's' : ''}`;
    }

    return re;
}
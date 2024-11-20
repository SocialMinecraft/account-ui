import {Fragment} from "react";
import {redirect} from "next/navigation";
import AccountOverview from "@/app/[token]/account-overview";
import VipOverview from "@/app/[token]/vip";
import MinecraftAccounts from "@/app/[token]/minecraft-accounts";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ token: string }>
}) {
    const token = (await params).token;
    const accountRes = await fetch('https://account.somc.club/api/' + token + '/account');
    if (accountRes.status !== 200) {
        redirect(`/`);
        return <div className="text-black">Error</div>
    }
    const account = await accountRes.json();
    return (
        <>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg p-10">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="min-w-0 flex-1">
                        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            Your Social Minecraft Account
                        </h2>
                    </div>
                </div>

                <p>Access Token: <em>{token}</em></p>
            </div>
            
            <AccountOverview account={account} />

            <VipOverview />

            <MinecraftAccounts token={token} />


        </>
    );
}
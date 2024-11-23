'use client'

import Link from "next/link";
import {useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {XCircleIcon} from "@heroicons/react/20/solid";

export default function AddMinecraftAccount() {
    const [processing, setProcessing] = useState(false)
    const [alert, setAlert] = useState("")
    const router = useRouter()

    const params = useParams<{ token: string }>()
    const token = params.token

    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg p-10 mt-3">
            <div className="sm:flex sm:items-center sm:justify-between border-b border-gray-200 pb-5">
                <h3 className="text-base font-semibold text-gray-900">Add Minecraft Account</h3>
                {/*<div className="mt-3 flex sm:ml-4 sm:mt-0">
                    <Link
                        href={`/${token}`}
                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-50"
                    >
                        Cancel
                    </Link>
                </div>*/}
            </div>
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">

                    <form onSubmit={async (e) => {
                        e.preventDefault();

                        // Get form values
                        const formData = new FormData(e.currentTarget);
                        const username = formData.get('username');

                        setProcessing(true)
                        setAlert(await add_account(token, username?.toString() || ""));
                        if (alert.length === 0) {
                            router.push(`/${token}`);
                        }
                        setProcessing(false);
                    }}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                {alert.length > 0 && <div className="rounded-md bg-red-50 p-4">
                                    <div className="flex">
                                        <div className="shrink-0">
                                            <XCircleIcon aria-hidden="true" className="size-5 text-red-400"/>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-red-800">
                                                Error
                                            </h3>
                                            <div className="mt-2 text-sm text-red-700">
                                                {alert}
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                            Minecraft Username
                                        </label>
                                        <div className="mt-2">
                                            <div
                                                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    autoComplete="username"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <Link
                                href={`/${token}`}
                                className="text-sm/6 font-semibold text-gray-900">
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className={`
                                rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold 
                                text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
                                focus-visible:outline-2 focus-visible:outline-offset-2 
                                focus-visible:outline-indigo-600
                                ${processing ? "cursor-not-allowed" : ""}
                                `}
                            >
                                Add
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

async function add_account (token: string, username: string) : Promise<string> {
    try {
        const resp = await fetch(`https://account.somc.club/api/${token}/minecraft_accounts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                minecraft_name: username
            })
        });

        return (await resp.json()).error

    } catch (error) {
        console.log(error);
        return "Unknown Error while adding your minecraft account.";
    }
}
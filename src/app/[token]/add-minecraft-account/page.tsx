import Link from "next/link";
import {Fragment} from "react";
import RemoveMinecraftAccountDialog from "@/app/[token]/remove-minecraft-account-dialog";

export default async function AddMinecraftAccount({params}: { params: Promise<{ token: string }>}) {
    const token = (await params).token;
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg p-10 mt-3">
            <div className="sm:flex sm:items-center sm:justify-between border-b border-gray-200 pb-5">
                <h3 className="text-base font-semibold text-gray-900">Add Minecraft Account</h3>
                <div className="mt-3 flex sm:ml-4 sm:mt-0">
                    <Link
                        href={`/${token}`}
                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-50"
                    >
                        Cancel
                    </Link>
                </div>
            </div>
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    Hi
                </div>
            </div>
        </div>
    )
}
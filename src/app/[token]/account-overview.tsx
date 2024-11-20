
type Account = {
    id: string;
    discord_id: string;
    birthday: number;
    first_name: string;
}

export default function AccountOverview({ account } : { account: Account }) {
    return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg p-10 mt-6">
        <div className="sm:flex sm:items-center sm:justify-between">
            <h3 className="text-base font-semibold text-gray-900">Account Overview</h3>
            <div className="mt-3 flex sm:ml-4 sm:mt-0">
                <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    Edit
                </button>
            </div>
        </div>
        <div className="mb-8 text-gray-900">
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Account ID</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{account.id}</dd>
                    </div>
                </dl>
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Discord ID</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{account.discord_id}</dd>
                    </div>
                </dl>
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">First Name</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{account.first_name}</dd>
                    </div>
                </dl>
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Birthday</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{account.birthday}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
)
}
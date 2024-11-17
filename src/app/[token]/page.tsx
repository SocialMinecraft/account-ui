export default async function Page({
                                 params,
                             }: {
    params: Promise<{ token: string }>
}) {
    return(
        <>
            <h1>Coming Soon</h1>
            <p>Your access code is <em>{(await params).token}</em></p>
        </>
    );
}
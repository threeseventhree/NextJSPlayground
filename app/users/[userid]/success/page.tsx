export default async function UserSuccessPage({params} : {params: Promise<{ userid: string }>}) {
    const {userid} = await params
    return (
        <main>
            <h1>Connected!</h1>
            <p>User {userid} is now connected.</p>
        </main>
    )
}
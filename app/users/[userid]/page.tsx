import { redirect } from "next/navigation"

export default async function UserPage({params} : {params: Promise<{ userid: string }>}) {
    const {userid} = await params
    redirect(`/api/fake-auth?userid=${userid}`)
}
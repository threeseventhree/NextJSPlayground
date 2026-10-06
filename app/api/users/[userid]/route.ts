import { sessions } from "@/app/lib/sessions";

export async function GET({params} : {params: Promise<{ userid: string }>}) {
    const {userid} = await params
    const session = sessions[userid];
    return Response.json(
        {
            connected: session?.connected ?? false
        }
    )
}
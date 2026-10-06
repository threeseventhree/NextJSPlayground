import { sessions } from "@/app/lib/sessions";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
    const userid = await request.nextUrl.searchParams.get("userid")
    const state = await request.nextUrl.searchParams.get("state")
    if (!userid || !state) {return new Response("Missing parameters", {status: 400})}

    const session = sessions[userid]
    if (!session) {return new Response("Session not found", {status: 404})}
    if (session.state !== state) {return new Response("Invalid state", {status: 400})}

    session.connected = true
    redirect(`/users/${userid}/success`)
}
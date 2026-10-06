import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { sessions } from "@/app/lib/sessions";
import crypto from "crypto"
export async function GET(request: NextRequest) {
    const userid = request.nextUrl.searchParams.get("userid")
    if (!userid) { return new Response("Missing userid", {status: 400}) }
    const state = crypto.randomBytes(16).toString("hex")
    sessions[userid] = {state, connected: false}
    redirect(`/api/users/callback?userid=${userid}&state=${state}`)
}
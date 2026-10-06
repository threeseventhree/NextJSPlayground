import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { sessions } from "@/app/lib/sessions";
export async function GET(request: NextRequest) {
    const userid = request.nextUrl.searchParams.get("userid")
    if (!userid) { return new Response("Missing userid", {status: 400}) }

    sessions[userid] = true
    redirect(`/users/${userid}/success`)
}
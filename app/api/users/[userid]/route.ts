import { sessions } from "@/app/lib/sessions";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest, { params }: { params: Promise<{ userid: string }>}) {
    const {userid} = await params
    return Response.json({
        connected: sessions[userid] ?? false
    })
}
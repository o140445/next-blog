import { NextResponse } from "next/server";

export const GET = (req: Request) => {
    return NextResponse.json({
        status: 0,
        msg: "ok",
        data:[]    
    });
}
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

const JWT_SECRET_KEY = process.env.JWT_SECRET


export function GetUserFromToken(req:Request){
    const token = req.headers.get("authorization")

    if(!token){
        return NextResponse.json(
            {
                message : "token doesn't exist",
                success : false
            },
            {
                status : 400
            }
        )
    }
    
    try {
        const decoded = jwt.verify(token,JWT_SECRET_KEY as string) as {
            userid : string,
            role : string
        }

        return decoded

    } catch (error) {
        return null
    }
}
import { GetUserFromToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const user = GetUserFromToken(req)

    if(!user){
        return NextResponse.json(
            {
                message : "User doesn't exist ! ",
                success : false
            },
            {
                status : 400
            }
        )
    }

    const { name } = await req.json

    const addWorkspace = await prisma.workspace.create({
        data : {
            name,
            ownerId : user.userid as string
        }
    })

    return NextResponse.json(
        {
            success: true,
            message: "Workspace created",
            data: addWorkspace,
        },
        { status: 201 }
    )

}  


export async function GET(req : Request){
    const user = GetUserFromToken(req)

    if(!user){
            return NextResponse.json(
            {
                success: false,
                message: "User doesn't exists",
            },
            { status: 400 }
        )
    }

    try {       
        const GetWorkspace = prisma.workspace.findMany({
            where : {
                ownerId : user.userid
            },
            orderBy : {
                createdAt : "desc"
            }
        })


        return NextResponse.json(
            {
                success : true,
                message : "Workspace provided",
                data : GetWorkspace
            },
            {
            status: 400  
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                success : false,
                message : error,
            },
            {
                status:400
            }
        )
    }

}
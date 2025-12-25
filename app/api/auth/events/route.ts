import { GetUserFromToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { URL } from "url";

export async function POST(req : Request){
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


    const {eventName  , value , workspaceId , metadata } = await req.json()

    const workspaceExist = await prisma.workspace.findFirst({
        where:{
            id : workspaceId,
            ownerId : user.userid
        }
    })

    if(!workspaceExist){
        return NextResponse.json(
            {
                success : false ,
                message : "Workspace not found ! "
            },
            {
                status : 400
            }
        )
    }

    try {       
        const event = await prisma.analyticsEvent.create({
            data : {
                eventName,
                value,
                workspaceId,
                metadata
            }
        })

        return NextResponse.json(
            {
                success : true ,
                message : "event listed! "
            },
            {
                status : 200
            }
        )        
    } catch (error) {
        return NextResponse.json(
            {
                success : false ,
                message : "Unauthorized ! "
            },
            {
                status : 404
            }
        )
    }
}

export async function GET(req:Request) {
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

    const { searchParams } = new URL(req.url)

    const workspaceId = searchParams.get("workspaceId")
    const eventName = searchParams.get("eventName")
    const from = searchParams.get("from")
    const to = searchParams.get("to")

    if(!workspaceId){
        return NextResponse.json(
            {
                success : false ,
                message : "Workspace not found ! "
            },
            {
                status : 400
            }
        )
    }

    const workspace = await prisma.workspace.findFirst({
        where : {
            id : workspaceId,
            ownerId : user.userid
        }
    }) 

    if(!workspace){
        return NextResponse.json(
            {
                success : false ,
                message : "UnAuthorized! "
            },
            {
                status : 400
            }
        )
    }

    try {
        const where : any = {
            workspaceId 
        }

        if(eventName){
            where.eventName = eventName
        }

        if(from || to ){
            where.createdAt = {}

            if(from) where.createdAt.gte = new Date(from)
            if(to) where.createdAt.lte = new Date(to)
        }


        const event = await prisma.analyticsEvent.findMany({
            where,
            orderBy : {
                createdAt : "desc"
            },
            take:100
        })

        return NextResponse.json(
                {
                    success : true ,
                    message : "event send ! ",
                    data : event
                },
                {
                    status : 200
                }
        )
    } catch (error) {
        return NextResponse.json(
            {
                success : false ,
                message : error
            },
            {
                status : 400
            }
        )
    }
}
import { GetUserFromToken } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req : Request) {
    
    const user = GetUserFromToken(req)

    if(!user){
        return NextResponse.json(
            {
                success : false ,
                message : "Unauthorisez , no such user ! "
            },
            {
                status : 400
            }
        )
    }
    
    
    const {searchParams} = new URL(req.url)

    const workspaceid = searchParams.get("workspaceid")
    const eventName = searchParams.get("eventName")
    const from = searchParams.get("from")
    const to = searchParams.get("to")

    if(!workspaceid){
        return NextResponse.json(
            {
                success : false ,
                message : "Unauthorized! "
            },
            {
                status : 400
            }
        )
    }

    const workspaceCheck = await prisma.workspace.findFirst({
        where:{
            id : workspaceid,
            //@ts-ignore
            ownerId : user.userid
        }
    })


    if(!workspaceCheck){
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
            
        const datefilter : any = {}

        if(from) datefilter.gte = new Date(from)
        if(to) datefilter.lte = new Date(to)

        const baseWhere : any = {
            workspaceid
        }

        if(from || to ){
            baseWhere.createdAt = datefilter
        }
        
        const [totalEvent , signupClicks , Pageview , revenue ] = await Promise.all([

            prisma.analyticsEvent.count({
                where: baseWhere
            }),

            prisma.analyticsEvent.count({
                where : {
                    ...baseWhere,
                    eventName:"user_signup"
                }       
            }),

            prisma.analyticsEvent.count({
                where:{
                    ...baseWhere,
                    eventName:"page_view"
                }
            }),
            prisma.analyticsEvent.aggregate({
                where:{
                    ...baseWhere,
                    eventName:"revenue"
                },
                _sum:{
                    value : true
                }
            })
        ])

        return NextResponse.json(
                {
                    success : true ,
                    message : "Analytics provided ! ",
                    data : {
                        totalEvent , 
                        signupClicks , 
                        Pageview , 
                        revenue
                    }
                },
                {
                    status : 200
                }
        )
    } catch (error) {
        return NextResponse.json(
            {
                success : false ,
                message : "UnAuthorized ! "
            },
            {
                status : 400
            }
        )
    }


}
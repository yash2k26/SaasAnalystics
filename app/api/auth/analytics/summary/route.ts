import { GetUserFromToken } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {

    const user = { userId: "dev-user" }
    console.log("u entered here")
    if (!user) {
        return NextResponse.json(
            {
                success: false,
                message: "Unauthorisez , no such user ! "
            },
            {
                status: 400
            }
        )
    }


    const { searchParams } = new URL(req.url)

    console.log("u entered here 1 ")
    const workspaceId = searchParams.get("workspaceId")
    const eventName = searchParams.get("eventName")
    const from = searchParams.get("from")
    const to = searchParams.get("to")
    console.log("u entered here 2 ")
    if (!workspaceId) {
        return NextResponse.json(
            {
                success: false,
                message: "Unauthorized! "
            },
            {
                status: 400
            }
        )
    }

    console.log('entered 3')

    const workspaceCheck = await prisma.workspace.findFirst({
        where: {
            id: workspaceId,
            //@ts-ignore
            ownerId: user.userid
        }
    })


    if (!workspaceCheck) {
        return NextResponse.json(
            {
                success: false,
                message: "Workspace not found ! "
            },
            {
                status: 400
            }
        )
    }
    console.log("yaha nhi aaai")
    try {

        const datefilter: any = {}

        if (from) datefilter.gte = new Date(from)
        if (to) datefilter.lte = new Date(to)

        const baseWhere: any = {
            workspaceId
        }

        if (from || to) {
            baseWhere.createdAt = datefilter
        }
        console.log("no promise")
        const [totalEvent, signupClicks, Pageview, revenue] = await Promise.all([

            prisma.analyticsEvent.count({
                where: baseWhere
            }),

            prisma.analyticsEvent.count({
                where: {
                    ...baseWhere,
                    eventName: "user_signup"
                }
            }),

            prisma.analyticsEvent.count({
                where: {
                    ...baseWhere,
                    eventName: "page_view"
                }
            }),
            prisma.analyticsEvent.aggregate({
                where: {
                    ...baseWhere,
                    eventName: "revenue"
                },
                _sum: {
                    value: true
                }
            })
        ])
        console.log("signup", signupClicks)
        console.log("pagevisit", Pageview)
        console.log("totalevent : ", totalEvent)
        console.log("revenue : ", revenue)
        return NextResponse.json(
            {
                success: true,
                message: "Analytics provided ! ",
                data: {
                    totalEvent,
                    signupClicks,
                    Pageview,
                    revenue: revenue._sum.value
                }
            },
            {
                status: 200
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "UnAuthorized ! "
            },
            {
                status: 400
            }
        )
    }


}
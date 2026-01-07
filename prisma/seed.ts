import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";



async function main(){
    const user = await prisma.user.create({
        data:{
            id: randomUUID(),
            name : "yash",
            email : "yash@gmail.com",
            password:"yashuu123",
        }

    })



    const workspace = await prisma.workspace.create({
        data:{
            id : randomUUID(),
            name : "Achme .Inc",
            ownerId: user.id,
        }
    })

    const events:any[] = []

    const now = new Date()

    

    for(let day = 1 ; day <= 365 ;day++ ){

        const dailyCount = Math.floor(Math.random() * 200) + 50

        const date = new Date(now)
        date.setDate(date.getDate()-day)

        for(let i=0 ; i<dailyCount ; i++){
            events.push({
                eventName : ["page_view", "user_signup","button_click","revenue"][Math.floor(Math.random()*4)],
                value : Math.floor(Math.random()*500),
                workspaceId : workspace.id, 
                createdAt : date,
                metadata: {
                            browser: ["chrome", "firefox", "safari"][Math.floor(Math.random() * 3)],
                            device: ["mobile", "desktop"][Math.floor(Math.random() * 2)],
                            page: ["/", "/pricing", "/dashboard"][Math.floor(Math.random() * 3)]
                        }
            })

        }
    }

    await prisma.analyticsEvent.createMany({
        data : events
    })

    console.log("Seed completed");

}


main()
    .catch((e)=>console.log(e))
    .finally(async () => await prisma.$disconnect())



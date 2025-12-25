import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const JWT_SECRET_KEY = process.env.JWT_SECRET

export async function POST(req:Request) {
    try {
        const {name , email , password,role } = await req.json()

        if (!name || !email || !password) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        const UserExist = await prisma.user.findFirst({
            where: {
                email:email
            }
        })

        if(UserExist){
            return NextResponse.json(
                {
                    message : "User already exists !",
                    succcess : false,
                },
                {status : 400}
            )        
        }

        const HashedPassowrd = await bcrypt.hash(password,10)


        const NewUser = await prisma.user.create({
            data : {
                name ,
                email,
                password : HashedPassowrd,
                role
            }
        })

        const token = jwt.sign({userid : NewUser.id , role : NewUser.role},JWT_SECRET_KEY as string,{
            expiresIn: "7d"
        })

        return NextResponse.json(
            {
                message : "User created succesfully ! ",
                success : true,
                token : token
            },
            {status : 200 }
        )
    } catch (error) {
        return NextResponse.json(
            {
                message : error,
                succcess : false,
            },
            {status : 500}
        )
    }
}
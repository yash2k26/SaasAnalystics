import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const JWT_SECRET_KEY = process.env.JWT_SECRET

export async function POST(req:Request) {
    try {
        const {email , password } = await req.json()

        if (!email || !password) {
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

        if(!UserExist){
            return NextResponse.json(
                {
                    message : "User doesn't exists !",
                    succcess : false,
                },
                {status : 400}
            )        
        }

        const checkPassword = await bcrypt.compare(password , UserExist.password)

        if(!checkPassword){
            return NextResponse.json(
                {
                    message : "Incorrect Password",
                    succcess : false,
                },
                {status : 400}
            )
        }

        const token = jwt.sign({userid : UserExist.id , role : UserExist.role},JWT_SECRET_KEY as string,{
            expiresIn: "7d"
        })

        return NextResponse.json(
            {
                message : "User Signed Up succesfully! ",
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
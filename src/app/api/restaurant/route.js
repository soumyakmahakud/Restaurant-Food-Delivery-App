
import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {
    await mongoose.connect(connectionStr, {useNewUrlParser:true})
    const data = await restaurantSchema.find()
    console.log(data);

    return NextResponse.json({result:data})
}

export async function POST(request) {
    let palyload = await request.json();
    console.log(palyload)
    let result;
    let success=false
    await mongoose.connect(connectionStr,{useNewUrlParser:true})

    if (palyload.login) {
        result = await restaurantSchema.findOne({email:palyload.email, password:palyload.password})
        if (result) {
            success=true
        }
    } else {
        const restaurant = new restaurantSchema(palyload)
        result = await restaurant.save();
        if (result) {
            success=true
        }
    }
    return NextResponse.json({result, success})
}
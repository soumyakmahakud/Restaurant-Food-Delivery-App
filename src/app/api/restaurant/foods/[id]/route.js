import { connectionStr } from "@/app/lib/db";
import { foodSchma } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
    const id = content.params.id
    let success = false;
    await mongoose.connect(connectionStr, {useNewUrlParser:true})
    const result =await foodSchma.find({resto_id:id});
    if (result) {
        success=true
    }
    return NextResponse.json({result, success})
}

require('dotenv').config();

import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb"
import Contact from "@/app/models/Contact";
import mongoose from "mongoose";

export async function POST(req){
    console.log(process.env.MONGODB_URI);

    console.log('Route handler called');
    const{formData} = await req.json();
    console.log('form submitted' , formData);
    try{
        await connectDB();
        await Contact.create(formData)
        return NextResponse.json({
            msg: ["Message sent successfully"],sucess:true
        })
    }
    catch(error){
        if(error instanceof mongoose.Error.ValidationError){
            let errorlist = [];
            for(let e in error.erros){
                errorlist.push(e.message)
            }
            return NextResponse.json({msg:errorlist})
        }
        else{
            NextResponse.json(error);
        }
    }

    return NextResponse.json({msg: ["hi from contact route."]});
}
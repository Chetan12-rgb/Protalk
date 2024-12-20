
// import { error } from "console";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// import { Configuration, OpenAIApi } from "openai";
import Replicate from "replicate";

const replicate = new Replicate({
   auth: process.env.REPLICATE_API_TOKEN!
});

// const openai = new OpenAIApi(configuration)

export async function POST(
   req: Request
   ) {
  try{
     const { userId }= auth();
     const body = await req.json();
     const  { prompt } = body;

     if(!userId){
        return new NextResponse("Unauthorized",{ status:401 });
     }

   //   if(!configuration.apiKey){
   //      return new NextResponse("OpenAI API key not configured", { status:500 });

   //   }
 
     if(!prompt){
        return new NextResponse("promp is Required", {status:400});
     }

     const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt
        }
      }
    );

     return NextResponse.json(response);


  } catch(error){
    console.log("[MUSIC_ERROR]", error);
    return new NextResponse("Internal Error", {status:500});
  } 
} 
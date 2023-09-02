import { NextResponse, NextRequest } from "next/server";
import { EmailTemplate } from '@/template/EmailTemplate';
import { Resend } from 'resend';
import { FormData } from "@/model/FormData";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request:NextRequest){
    const objectToPrint : FormData = await request.json();
    console.log(objectToPrint)

    
    try {
      const data = await resend.emails.send({
        from: 'Linea Esperanza <onboarding@resend.dev>',
        to: [process.env.MAIL_TO_1!],
        subject: `${objectToPrint.name} envió el Formulario de Linea Esperanza`,
        react: EmailTemplate(objectToPrint),
        text:''
      });
      if(data.id == null) throw new Error('does not sent email')
      console.log(data)
      return NextResponse.json({status:"OK", emailId:data.id});
    } catch (error:any) {
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
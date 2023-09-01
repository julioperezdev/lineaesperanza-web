import { NextResponse } from "next/server";
import { EmailTemplate } from '@/template/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(){
    //const data = request.json();
    //return NextResponse.json({message:"EMAIL ENVIADO"});
    try {
      const data = await resend.emails.send({
        from: 'Linea Esperanza <formulario@lineaesperanza.com>',
        to: ['perezjulioernesto@gmail.com'],
        subject: 'Formulario de Pepe',
        react: EmailTemplate({ firstName: 'John' }),
        text:'test test 123 '
      });
  
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error });
    }
}
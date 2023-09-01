import { NextResponse } from "next/server";
import { EmailTemplate } from '@/template/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(){
    //const data = request.json();
    //return NextResponse.json({message:"EMAIL ENVIADO"});
    try {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Hello world',
        react: EmailTemplate({ firstName: 'John' }),
        text:'test test'
      });
  
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error });
    }
}


export const sendFormByEmail = async(request: Request, response: Response):Promise<Response> =>{

    try{
    const {
      nombre,
      apellido,
      sexo,
      edad,
      email,
      codigoCelular,
      telefonoCelular,
      codigoFijo,
      telefonoFijo,
      pais,
      ciudad,
      formaContacto,
      motivoConsulta,
      descripcionEmocional,
      habitosPersonales,
      comentarioAdicional,
    }:any = request.body;
  
   
    const contentHTML: string = `
      <div style="font-family: 'Lato', sans-serif;">
      <h1>Solicitud de atención desde ${pais}</h1>
      <h2>Datos personales</h2>
      <table border="1">
          <thead>
              <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Sexo</th>
                  <th>Edad</th>
                  <th>Email</th>
                  <th>Teléfono Celular</th>
                  <th>Teléfono Fijo</th>
                  <th>País</th>
                  <th>Ciudad</th>
                  <th>Forma de contacto</th>
                  <th>¿Cual es el motivo de la consulta?</th>
                  <th>¿Describe cómo te siente emocionalmente en este momento?</th>
                  <th>Mencione los campos importantes en los hábitos personales que has notado recientemente</th>
                  <th>¿Quiere agregar algún comentario adicional?</th>
              </tr>
          </thead>
          <tr>
              <td>${nombre}</td>
              <td>${apellido}</td>
              <td>${sexo}</td>
              <td>${edad}</td>
              <td>${email}</td>
              <td>${codigoCelular}-${telefonoCelular}</td>
              <td>${codigoFijo}-${telefonoFijo}</td>
              <td>${pais}</td>
              <td>${ciudad}</td>
              <td>${formaContacto}</td>
              <td>${motivoConsulta}</td>
              <td>${descripcionEmocional}</td>
              <td>${habitosPersonales}</td>
              <td>${comentarioAdicional}</td>
          </tr>
      </table>
      </div>
      `;
  
    //await sendEmail(contentHTML);
    return NextResponse.json({
      "status": 200,
      "message": "the email was sended"
    })
    }catch(error){
      console.log(error)
      return NextResponse.json({
        "status":500,
        "message":"error to send email"})
      }
  }
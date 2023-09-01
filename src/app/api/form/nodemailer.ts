//import nodemailer from "nodemailer"
export const sendEmail = async(contentHTML: string ) =>{
    try{
    
    //const transporter = nodemailer.createTransport({
    const transporter = {
      host: process.env.SERVER_SMTP,
      port:  465,
      auth: {
        user:  process.env.USER_EMAIL, // generated ethereal user
        pass: process.env.PASSWORD_EMAIL, // generated ethereal password
      }
    };
  
    let mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "Formulario de paciente - Linea de la Esperanza",
      html: contentHTML,
    };
  
    //await transporter.sendMail(mailOptions);
    }catch(error){
      console.log(error);
    }
  }
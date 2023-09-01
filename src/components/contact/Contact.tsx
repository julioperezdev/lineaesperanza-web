import Image from 'next/image'
import styles from './Contact.module.css'
export default function Contact() {
    return (
        <div className={styles.contactBase}>
            <div>
                <Image src="/whatsappLogo.png" alt={'Logo de Linea Esperanza'} width={100} height={100} />
                <div>
                    <a href="https://wa.me/584123545565?text=Vengo%20de%20parte%20de%20la%20Linea%20Esperanza%20!"> <Image src="/send-ws.png" alt={'Logo de envio de whatsapp en Linea Esperanza'} width={20} height={20} /> +58 412-3545565</a>
                    <a href="https://wa.me/584148911483?text=Vengo%20de%20parte%20de%20la%20Linea%20Esperanza%20!"><Image src="/send-ws.png" alt={'Logo de envio de whatsapp en Linea Esperanza'} width={20} height={20} /> +58 414-8911483</a>
                </div>
            </div>
            <div>
                <Image src="/gmailLogo.png" alt={'Logo de Gmail'} width={100} height={100} />
                <div>
                    <a href="mailto:oxigenovenezuela@gmail.com">oxigenovenezuela@gmail.com</a>
                    <a href="mailto:maria.alejandra.perez.viloria@gmail.com">maria.alejandra.perez.viloria@gmail.com</a>
                </div>
            </div>
        </div>
    )
}
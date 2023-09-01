import Link from 'next/link'
import Image from 'next/image'

import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbarBase}>
            <Image src="/lineaesperanza-logo.png" alt={'Logo de Linea Esperanza'} width={125} height={125} />
            <div></div>
            <div>
                <Link href="https://www.paypal.me/NorbeyRodriguez" target="_blank" rel="noopener noreferrer">Donaciones</Link>
                <Link href="http://www.lineaesperanza.wordpress.com/" target="_blank" rel="noopener noreferrer">Blog</Link>
                <Link href="https://www.instagram.com/lineadelaesperanza/?hl=es-la" target="_blank" rel="noopener noreferrer">
                    <Image src="/instagram.png" alt={'Logo de instagram de Linea Esperanza'} width={25} height={25} />
                </Link>
            </div>

        </nav>
    )
}
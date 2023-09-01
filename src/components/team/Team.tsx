import Image from 'next/image'
import styles from './Team.module.css'
export default function Team() {
    return (
        <div className={styles.teamBase}>
            <h2>Equipo</h2>
            <div>
                <div>
                    <Image src="/coordiner.jpeg" alt={'Director y Fundador de Linea Esperanza'} width={200} height={200} />
                    <p>Norbey Rodriguez</p>
                    <p>Fundador | Directo de Linea Esperanza</p>
                </div>
                <div>
                    <Image src="/coordiner.jpeg" alt={'Psicologa y Coordinadora de Linea Esperanza'} width={200} height={200} />
                    <p>Maria Alejandra Pérez</p>
                    <p>Fundadora | Coordinadora | Psicologa de Linea Esperanza</p>
                </div>
            </div>
        </div>
    )
}
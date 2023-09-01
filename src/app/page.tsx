import Form from '@/components/form/Form';
import Contact from '@/components/contact/Contact';
import AboutUs from '@/components/aboutUs/AboutUs';

import styles from './page.module.css'

export default function Home() {

  

  return (
    <main className={styles.main}>
      <Form/>
      <Contact/>
      <AboutUs/>
    </main>
  )
}

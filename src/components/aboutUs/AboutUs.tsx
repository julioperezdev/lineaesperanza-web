'use client'
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import styles from './AboutUs.module.css'

export default function AboutUs() {

  useEffect(() =>{
    AOS.init({
      duration:2000,
      offset:0,
      once:false
    });
  },[])

  return (
    <div className={styles.aboutUsBase}>
      <div data-aos="fade-left">
        <p>VISIÓN</p>
        <div>
          <p>Ofrecer soporte y acompañamiento emocional a aquellas personas que necesitan apoyo en el cuidado de su salud mental.</p>
        </div>
      </div>
      <div data-aos="fade-right">
        <p>MISIÓN</p>
        <div>
          <p>Ser el programa de referencia de la Iglesia Cristiana en Iberoamérica que brinda atención y acompañamiento emocional a aquellas personas que lo soliciten.</p>
        </div>
      </div>
      <div data-aos="fade-left" className={styles.objects}>
        <p>OBJETIVO</p>
        <div>
          <p>- Brindar apoyo y acompañamiento emocional en el cuidado de la salud mental. </p>
          <p>- Organizar a profesionales de la salud mental en Iberoamérica para la atención psicológica de manera voluntaria y gratuita a aquellas personas que lo necesiten.</p>
          <p>- Capacitar a la iglesia cristiana en Iberoamérica en temas del cuidado de la salud mental.</p>
          <p>- Sensibilizar a la iglesia cristiana en Iberoamérica sobre la importancia del cuidado de la salud mental.</p>
        </div>
      </div>
      <div data-aos="fade-right">
        <p>ALCANCE</p>
        <div>
          <p>Todos aquellos que necesiten orientación y apoyo emocional por parte de los profesionales de la Salud Mental de la Iglesia Cristiana en Iberoamérica, podrán accesar a la Línea Esperanza.</p>
        </div>
      </div>
    </div>
  )
}
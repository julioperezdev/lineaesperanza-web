import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/navbar/Navbar'
import { Montserrat } from 'next/font/google'
import { lineaEsperanzaBase64 } from '../model/Constant'

const montserrat = Montserrat({
  weight: ["300", "400", "600", "700"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Linea Esperanza',
  description: 'Al servicio de la salud mental',
  keywords: "asistencia, psicologica, online, gratis, consultas", 
  openGraph: {
    title: 'Atención gratuita en Linea Esperanza',
    description: 'Queremos escucharte y ayudarte, hablando tu mismo lenguaje de manera online con servicio terapéutico de calidad',
    url: 'https://lineaesperanza.com',
    siteName: 'Linea Esperanza',
    images: [
      {
        url: lineaEsperanzaBase64,
        width: 800,
        height: 600,
        alt: 'Logo Linea Esperanza',
      },
    ],
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

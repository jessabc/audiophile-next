import './globals.css'
import { Manrope } from 'next/font/google'
import Header from './_components/shared/Header'
import Footer from './_components/shared/Footer'
import { ReduxProvider } from './_redux/provider'
import About from './_components/shared/About'


export const metadata = {
  title: 'Audiophile'
}

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" className={`${manrope.variable} `}>
      <body >
        <ReduxProvider>
          <Header />
          {children}
          <About/>
          <Footer/> 
        </ReduxProvider>
      </body>
    </html>
   
  )
}

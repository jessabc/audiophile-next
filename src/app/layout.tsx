"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './sharedComponents/Header'
import Footer  from './sharedComponents/Footer'
import { store } from './redux/store'
import { ReduxProvider } from './redux/provider'
import About from './sharedComponents/About'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    
    <html lang="en">
      <body className="font-display">
     
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

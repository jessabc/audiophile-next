import './globals.css'
import Header from './_components/shared/Header'
import Footer from './_components/shared/Footer'
import { ReduxProvider } from './_redux/provider'
import About from './_components/shared/About'


export const metadata = {
  title: 'Audiophile'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html>
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

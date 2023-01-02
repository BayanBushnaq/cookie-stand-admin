import './globals.css'
import Footer from './component/Footer'
import Header from './component/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-emerald-100'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-emerald-100'>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
          
        </body>
    </html>
  )
}

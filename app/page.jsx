"use client"
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Form from './component/Form'
export default function Home() {
  return (
    <>
     <Form/>
    </>
  )
}
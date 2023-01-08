"use client"
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Form from './component/Form'
import LoginForm from './component/LoginForm'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'





export default function Home() {

  const {tokens} = useContext(AuthContext)
  return (
    
     (tokens ? <Form/> : <LoginForm/>)
    
  )
}

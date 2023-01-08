"use client";
import "./globals.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Themewrapper from "../contexts/theme";
import { AuthWrapper } from "../contexts/auth";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-emerald-100  dark:bg-black" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <AuthWrapper>
      <Themewrapper>
        <body className="bg-emerald-100  dark:bg-black">
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </Themewrapper>
      </AuthWrapper>
    </html>
  );
}

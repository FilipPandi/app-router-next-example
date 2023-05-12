import './globals.css'
import {Inter} from 'next/font/google'
import React from "react";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import PageNav from "@/app/navigation/pageNav";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'New App Router'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className} style={{margin: "70px"}}>
        <PageNav></PageNav>
        {children}
        </body>
        </html>
    )
}

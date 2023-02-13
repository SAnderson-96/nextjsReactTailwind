import React from 'react';
import './globals.css';
import Navbar from '../src/components/navbar';

export default function RootLayout({children}) {
    return (
        <html>
        <head/>
        <body>
        <Navbar/>
        {children}
        </body>
        </html>
    )
}
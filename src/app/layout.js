'use client';
import './globals.css'
import React from 'react';
// import ReactDOM from 'react-dom';


import { Inter } from 'next/font/google'
import { Providers } from './redux/providers'
// import { metadata } from './RootLayout';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Next App',
  description: 'next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
          <Providers>{children}</Providers>
    
        </body>
    </html>
  )
}

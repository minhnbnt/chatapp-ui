import type { Metadata } from 'next';
import type React from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Chatting app',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  const className = twMerge(
    geistSans.className,
    geistMono.className,
    'antialiased',
  );

  return (
    <html lang="en">
      <body className={className}>{children}</body>
    </html>
  );
}

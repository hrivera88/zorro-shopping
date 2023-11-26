import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ weight: ['200', '300', '400'], subsets: ["latin"] });
const playfairDisplay = Playfair_Display({weight: '400', subsets: ["latin"]});

export const metadata: Metadata = {
  title: 'Zorro Online Store',
  description: 'Buy from us at Zorro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-zorro-bg-grey-1`}>{children}</body>
    </html>
  );
}

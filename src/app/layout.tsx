import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Riyasudeen Farook | IT Operations Manager'

const description =
  'IT Operations Manager based in Riyadh, Saudi Arabia, specializing in Infrastructure Management, Cloud Operations, and Enterprise Security. Expertise in Nutanix, Microsoft 365, CrowdStrike, Palo Alto, and automation with Docker and n8n.'

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  keywords: [
    'IT Operations Manager',
    'Infrastructure Architect',
    'Nutanix',
    'Microsoft 365',
    'Intune MDM',
    'CrowdStrike',
    'Palo Alto Firewall',
    'Enterprise Security',
    'Cloud Operations',
    'Riyadh Saudi Arabia',
    'IT Infrastructure',
    'Docker',
    'n8n Automation',
    'Zabbix',
    'OpenSearch',
    'Proofpoint'
  ],
  authors: [{ name: 'Riyasudeen Farook' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Riyasudeen Farook Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@riyasudeenpm', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  )
}

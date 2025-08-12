import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Hashly",
  description: "Jeu de gestion de minage de crypto",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <header className="flex items-center justify-between px-6 py-4 border-b bg-background/80 backdrop-blur">
            <Link href="/" className="text-2xl font-bold">
              Hashly
            </Link>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}

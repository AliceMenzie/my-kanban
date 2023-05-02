import Navbar from "./(components)/navbar/Navbar"
import "./(styles)/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "My-kanban",
  description: "kanban board",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-[100%] w-[100%] m-0 p-0">
      <body
        className={`${inter.className} flex h-[100%] w-[100%] m-0 p-0 overflow-y-hidden`}
      >
        <Navbar />
        <main className="h-[100%] w-[100%] ">{children}</main>
      </body>
    </html>
  )
}

import { Inter } from "next/font/google"
import { BoardContainer } from "./(components)/board/BoardContainer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2>This is Home</h2>
      {/* @ts-expect-error Async Server Component */}
      <BoardContainer />
    </main>
  )
}

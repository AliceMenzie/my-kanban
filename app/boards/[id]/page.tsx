import Link from "next/link"
import { Board } from "../../(components)/board/Board"
import supabase from "@/app/(utils)/supabaseClient"

const getData = async () => {
  const { data, error } = await supabase
    .from("boards")
    // TODO find out why .select("*") doesn't work
    .select("created_at, board_name, team_id, id, created_by")
  return { data, error }
}

const BoardDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  const { data, error } = await getData()
  if (error) {
    ;<div> there was an error </div>
  }
  return (
    <div>
      <p>page Board Page</p>
      {/* @ts-expect-error Async Server Component */}
      <Board id={id} />
      <Link href="/dashboard"> Go Home </Link>
    </div>
  )
}
export default BoardDetails

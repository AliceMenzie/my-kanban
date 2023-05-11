import supabase from "@/app/(utils)/supabaseClient"

import Board from "./Board"
import { transformData } from "@/app/(utils)/utils"

const getTasks = async (id: number) => {
  const { data, error } = await supabase
    .from("tasks")
    .select()
    .in("board_id", [id])

  return { data, error }
}

export const BoardContainer = async ({
  id = 1, // TODO replace default once implemented CRUD
}: any) => {
  const { data, error } = await getTasks(id)

  return (
    <div className="border-2  w-96 h-96 md:w-[50rem] md:h-[50rem] flex ">
      {!data && <div>Loading...</div>}
      {data && <Board tasks={transformData(data)} />}
    </div>
  )
}

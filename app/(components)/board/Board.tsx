import supabase from "@/app/(utils)/supabaseClient"
import BoardColumn from "../boardColumn/BoardColumn"
import Task from "../task/Task"


const getTasks = async (id: number) => {
  const { data, error } = await supabase
    .from("tasks")
    .select()
    .in("board_id", [id])

  return { data, error }
}

export const Board = async ({ id }: any) => {
  const { data, error } = await getTasks(id)

  return (
    <div className="border-2  w-96 h-96 md:w-[50rem] md:h-[50rem] flex ">
      <BoardColumn>
        <p className="font-bold">todo</p>
        {data?.map((task) => (
          <div key={task.id}>{task.board_id}</div>
        ))}
        <Task />
      </BoardColumn>
      <BoardColumn>
        <p className="font-bold">in progress</p>
      </BoardColumn>
      <BoardColumn>
        <p className="font-bold">done</p>
      </BoardColumn>
    </div>
  )
}

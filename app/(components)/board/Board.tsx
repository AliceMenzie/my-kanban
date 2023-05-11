"use client"
import { useState } from "react"
import BoardColumn from "../boardColumn/BoardColumn"

const Board = (props: any) => {
  const { tasks } = props
  const [columns, setColumns] = useState(tasks)

  return (
    <>
      {columns?.map((column: any) => (
        <BoardColumn
          key={column.id}
          column={column}
          columns={columns}
          setColumns={setColumns}
        />
      ))}
    </>
  )
}
export default Board

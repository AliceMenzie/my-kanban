"use client"
import { handleDragOver, handleDrop } from "@/app/(utils)/utils"
import Task from "../task/Task"

const BoardColumn = ({ column, columns, setColumns }: any) => {
  return (
    <section
      className="border border-red-300 flex-grow"
      onDragOver={handleDragOver}
      onDrop={(e) => {
        const result = handleDrop(e, column, columns)
        setColumns(result)
      }}
    >
      <h2>{column.name}</h2>
      <div className="card-list">
        {column.tasks.map((task: any) => (
          <Task
            key={task.id}
            task={task}
            column={column}
            columns={columns}
            setColumns={setColumns}
          />
        ))}
      </div>
    </section>
  )
}
export default BoardColumn

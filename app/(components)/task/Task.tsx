"use client"

import {
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDragStart,
  handleDrop,
} from "@/app/(utils)/utils"

const Task = ({ task, column, columns, setColumns }: any) => {
  return (
    <div
      className="border border-emerald-400"
      draggable
      onDragStart={(e) => handleDragStart(e, task)}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      {task.content}
    </div>
  )
}
export default Task

export const handleDragStart = (e: any, task: any) => {
  e.dataTransfer.setData("taskId", task.id)
}

export const handleDragOver = (e: any) => {
  e.preventDefault()
}

export const handleDragEnter = (e: any) => {
  e.preventDefault()
  // e.target.classList.add("drag-over")
}

export const handleDragLeave = (e: any) => {
  e.preventDefault()
  // e.target.classList.remove("drag-over")
}

export const handleDrop = (e: any, column: any, columns: any) => {
  e.preventDefault()
  const selectedTaskId = Number(e.dataTransfer.getData("taskId"))

  const fromColumnId = columns?.find((column: any) =>
    column?.tasks?.find((task: any) => task.id === selectedTaskId)
  ).id

  const taskContent = columns
    .flatMap((status: any) => status.tasks)
    .find((task: any) => task.id === selectedTaskId)?.content

  const toColumnId = column.id

  if (fromColumnId !== toColumnId) {
    const updatedColumns = columns.map((column: any) => {
      if (column.id === fromColumnId) {
        return {
          ...column,
          tasks: column.tasks.filter((task: any) => task.id !== selectedTaskId),
        }
      } else if (column.id === toColumnId) {
        return {
          ...column,
          tasks: [
            ...column.tasks,
            { id: selectedTaskId, content: taskContent },
          ],
        }
      } else {
        return column
      }
    })

    return updatedColumns
  }
  return columns
}

export const transformData = (tasks: any) => {
  const transformedTasks = tasks.reduce((result: any, task: any) => {
    const status = task.status
    const existingStatus = result.find((s) => s.name === status)

    if (existingStatus) {
      existingStatus.tasks.push({
        id: task.id,
        content: task.name,
      })
    } else {
      result.push({
        id: result.length + 1,
        name: status,
        tasks: [
          {
            id: task.id,
            content: task.name,
          },
        ],
      })
    }

    return result
  }, [])

  // Add "todo", "in progress", and "completed" sections with empty task arrays if they don't exist
  const todo = transformedTasks.find((s) => s.name === "todo")
  if (!todo) {
    transformedTasks.push({
      id: transformedTasks.length + 1,
      name: "todo",
      tasks: [],
    })
  }

  const inProgress = transformedTasks.find((s) => s.name === "in progress")
  if (!inProgress) {
    transformedTasks.push({
      id: transformedTasks.length + 1,
      name: "in progress",
      tasks: [],
    })
  }

  const completed = transformedTasks.find((s) => s.name === "completed")
  if (!completed) {
    transformedTasks.push({
      id: transformedTasks.length + 1,
      name: "completed",
      tasks: [],
    })
  }

  return transformedTasks
}

import { client } from "../../prisma/client";

interface UpdateTaskRequest {
  id: string
  updateFields: {
    name?: string
    complete?: boolean
  }
}

class UpdateTaskUseCase {
  async execute({id, updateFields}: UpdateTaskRequest) {
    Object.keys(updateFields)
    .forEach(key => updateFields[key] === undefined && delete updateFields[key])
    const task = await client.task.update({
      where: {
        id: id
      },
      data: {
        ...updateFields
      }
    })
    return task
  }
}

export { UpdateTaskUseCase }
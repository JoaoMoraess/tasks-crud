import { client } from "../../prisma/client"

interface AddUserRequest {
  name: string
}

class AddTaskUseCase {

  async execute({ name }: AddUserRequest) {
    const task = await client.task.create({data: {
      name
    }})
    return task
  }
}

export { AddTaskUseCase }
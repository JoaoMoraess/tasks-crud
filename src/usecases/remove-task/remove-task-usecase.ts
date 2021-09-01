import { client } from "../../prisma/client";

interface RemoveTaskRequest {
  id: string
}

class RemoveTaskUseCase {
  async execute({id}: RemoveTaskRequest) {
   
    const task = await client.task.delete({
      where: {
        id: id
      }
    })
    return task
  }
}

export { RemoveTaskUseCase }
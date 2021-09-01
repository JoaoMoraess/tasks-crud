import { client } from "../../prisma/client";

class LoadTasksUseCase {
  async execute() {
    const tasks = await client.task.findMany()
    return tasks
  }
}
export { LoadTasksUseCase }
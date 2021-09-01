import { Request, Response } from "express";
import { LoadTasksUseCase } from "./load-tasks-usecase";

class LoadTasksController {
  async handle (request: Request, response: Response) {
    const loadTasksUseCase = new LoadTasksUseCase()

    const tasks = await loadTasksUseCase.execute()
    return response.json(tasks)

  }
}
export { LoadTasksController }
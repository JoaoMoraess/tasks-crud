import { Request, Response } from "express";
import { RemoveTaskUseCase } from "./remove-task-usecase";

class RemoveTaskController {
  async handle (request: Request, response: Response) {
    const { id } = request.params

    if(!id) {
      throw new Error("Missing param: id")
    }
    const removeTaskUseCase = new RemoveTaskUseCase()

    const task = await removeTaskUseCase.execute({ id })
    return response.json(task)

  }
}
export { RemoveTaskController }
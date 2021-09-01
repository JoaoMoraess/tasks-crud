import { Request, Response } from "express";
import { UpdateTaskUseCase } from "./update-task-usecase";

class UpdateTaskController {
  async handle (request: Request, response: Response) {
    const { id } = request.params
    const { name, complete } = request.body

    if(!id) {
      throw new Error("Missing param: id")
    }
    const updateTaskUseCase = new UpdateTaskUseCase()

    const task = await updateTaskUseCase.execute({ id, updateFields: { name, complete } })
    return response.json(task)

  }
}
export { UpdateTaskController }
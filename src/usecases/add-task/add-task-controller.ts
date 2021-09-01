import { Request, Response } from "express";
import { AddTaskUseCase } from "./add-task-usecase";

class AddTaskController {
  async handle(request: Request, response: Response) {
    const { name } = request.body
    if(!name) {
      throw new Error("Missing param: name")
    }
    const addTaskUseCase = new AddTaskUseCase()

    const task = await addTaskUseCase.execute({
      name
    })
    return response.json(task)
  }
}

export { AddTaskController }
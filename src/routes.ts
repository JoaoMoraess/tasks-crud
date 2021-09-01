import { Router } from "express";
import { AddTaskController } from "./usecases/add-user/add-task-controller";

const router = Router()

const addTaskController = new AddTaskController()

router.post('/task', addTaskController.handle)

export { router }
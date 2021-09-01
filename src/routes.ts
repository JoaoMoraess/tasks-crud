import { Router } from "express";
import { AddTaskController, LoadTasksController, UpdateTaskController, RemoveTaskController } from "./usecases/controllers";

const router = Router()

const addTaskController = new AddTaskController()
const loadTasksController = new LoadTasksController()
const updateTaskController = new UpdateTaskController()
const removeTaskController = new RemoveTaskController()

router.post('/task', addTaskController.handle)
router.get('/task', loadTasksController.handle)
router.put('/task/:id', updateTaskController.handle)
router.delete('/task/:id', removeTaskController.handle)

export { router }
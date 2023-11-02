import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { Task } from 'src/core/entities';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/updateTask.dto';

@Controller('task')
export class TaskController {
    private task: Task[] = []
    constructor(private readonly taskService: TaskService) { }

    @Get()
    findAllTask() {
        return this.taskService.findAll().then(() => {
            return this.task
        })
    }

    @Get("/:id")
    findOneTask(@Param("id") id: number) {
        return this.taskService.findOne(id).then(() => {
            return this.task.find((task) => task.id === +id);
        })
    }

    @Post("create_task")
    createTask(@Body() data: CreateTaskDto) {
        return this.taskService.createTask().then(() => {
            const id = this.task.length + 1
            const newTask = { ...data, id }
            this.task.push(newTask)
            return newTask
        })
    }


    @Patch("check_task/:id")
    reverseCheckTask(@Param("id") id: number) {
        const currentTask = this.task[id]
        return this.taskService.checkTask(id).then(() => {
            this.task[id] = { ...currentTask, isChecked: !currentTask.isChecked }

            return this.task[id]
        })
    }

    @Put("update_task/:id")
    updateTask(@Param("id") id: number, @Body() data: UpdateTaskDto) {
        const currentTask = this.task[id]
        return this.taskService.updateTask(id).then(() => {

            this.task[id] = { ...currentTask, ...data }

            return this.task[id]
        })
    }

    @Delete("remove_task/:id")
    deleteTask(@Param("id") id: number) {
        return this.taskService.deleteTask(id).then(() => {
            const taskRemoved = this.task.splice(id, 1)
            return taskRemoved
        })
    }
}

import { CreateTaskDto } from './dto/createTask.dto';
import { Task } from 'src/core/entities';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/updateTask.dto';
export declare class TaskController {
    private readonly taskService;
    private task;
    constructor(taskService: TaskService);
    findAllTask(): Promise<Task[]>;
    findOneTask(id: number): Promise<Task>;
    createTask(data: CreateTaskDto): Promise<{
        id: number;
        title: string;
        description: string;
    }>;
    reverseCheckTask(id: number): Promise<Task>;
    updateTask(id: number, data: UpdateTaskDto): Promise<Task>;
    deleteTask(id: number): Promise<Task[]>;
}

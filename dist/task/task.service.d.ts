export declare class TaskService {
    createTask(): Promise<void>;
    findAll(): Promise<void>;
    findOne(id: number): Promise<void>;
    checkTask(id: number): Promise<void>;
    updateTask(id: number): Promise<void>;
    deleteTask(id: number): Promise<void>;
}

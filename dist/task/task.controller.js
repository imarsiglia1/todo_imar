"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const createTask_dto_1 = require("./dto/createTask.dto");
const task_service_1 = require("./task.service");
const updateTask_dto_1 = require("./dto/updateTask.dto");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
        this.task = [];
    }
    findAllTask() {
        return this.taskService.findAll().then(() => {
            return this.task;
        });
    }
    findOneTask(id) {
        return this.taskService.findOne(id).then(() => {
            return this.task.find((task) => task.id === +id);
        });
    }
    createTask(data) {
        return this.taskService.createTask().then(() => {
            const id = this.task.length + 1;
            const newTask = { ...data, id };
            this.task.push(newTask);
            return newTask;
        });
    }
    reverseCheckTask(id) {
        const currentTask = this.task[id];
        return this.taskService.checkTask(id).then(() => {
            this.task[id] = { ...currentTask, isChecked: !currentTask.isChecked };
            return this.task[id];
        });
    }
    updateTask(id, data) {
        const currentTask = this.task[id];
        return this.taskService.updateTask(id).then(() => {
            this.task[id] = { ...currentTask, ...data };
            return this.task[id];
        });
    }
    deleteTask(id) {
        return this.taskService.deleteTask(id).then(() => {
            const taskRemoved = this.task.splice(id, 1);
            return taskRemoved;
        });
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "findAllTask", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "findOneTask", null);
__decorate([
    (0, common_1.Post)("create_task"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTask_dto_1.CreateTaskDto]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, common_1.Patch)("check_task/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "reverseCheckTask", null);
__decorate([
    (0, common_1.Put)("update_task/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateTask_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)("remove_task/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "deleteTask", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map
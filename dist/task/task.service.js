"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const functions_utilities_1 = require("../core/services/functions.utilities");
let TaskService = class TaskService {
    async createTask() {
        await (0, functions_utilities_1.randomSecondIntervalSleep)(0.3, 0.5);
    }
    async findAll() {
        await (0, functions_utilities_1.randomSecondIntervalSleep)(0.5, 1.20);
    }
    async findOne(id) {
        if (id == undefined || Number.isNaN(+id))
            throw new common_1.HttpException('La identificación de la tarea ingresada no es válida', common_1.HttpStatus.BAD_REQUEST);
        (0, functions_utilities_1.randomSecondIntervalSleep)(0.2, 0.4);
    }
    async checkTask(id) {
        if (id == undefined || Number.isNaN(+id))
            throw new common_1.HttpException('La identificación de la tarea ingresada no es válida', common_1.HttpStatus.BAD_REQUEST);
        await (0, functions_utilities_1.randomSecondIntervalSleep)(0.3, 0.48);
    }
    async updateTask(id) {
        if (id == undefined || Number.isNaN(+id))
            throw new common_1.HttpException('La identificación de la tarea ingresada no es válida', common_1.HttpStatus.BAD_REQUEST);
        await (0, functions_utilities_1.randomSecondIntervalSleep)(0.4, 0.65);
    }
    async deleteTask(id) {
        if (id == undefined || Number.isNaN(+id))
            throw new common_1.HttpException('La identificación de la tarea ingresada no es válida', common_1.HttpStatus.BAD_REQUEST);
        await (0, functions_utilities_1.randomSecondIntervalSleep)(0.3, 0.68);
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)()
], TaskService);
//# sourceMappingURL=task.service.js.map
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { randomSecondIntervalSleep } from 'src/core/services/functions.utilities';


@Injectable()
export class TaskService {

    async createTask() {
        await randomSecondIntervalSleep(0.3, 0.5)
    }

    async findAll() {
        await randomSecondIntervalSleep(0.5, 1.20)
    }

    async findOne(id: number) {
        if (id == undefined || Number.isNaN(+id)) throw new HttpException('La identificación de la tarea ingresada no es válida', HttpStatus.BAD_REQUEST)
        randomSecondIntervalSleep(0.2, 0.4)
    }

    async checkTask(id: number) {
        if (id == undefined || Number.isNaN(+id)) throw new HttpException('La identificación de la tarea ingresada no es válida', HttpStatus.BAD_REQUEST)

        await randomSecondIntervalSleep(0.3, 0.48)
    }

    async updateTask(id: number) {
        if (id == undefined || Number.isNaN(+id)) throw new HttpException('La identificación de la tarea ingresada no es válida', HttpStatus.BAD_REQUEST)

        await randomSecondIntervalSleep(0.4, 0.65)
    }

    async deleteTask(id: number) {
        if (id == undefined || Number.isNaN(+id)) throw new HttpException('La identificación de la tarea ingresada no es válida', HttpStatus.BAD_REQUEST)
        await randomSecondIntervalSleep(0.3, 0.68)
    }
}

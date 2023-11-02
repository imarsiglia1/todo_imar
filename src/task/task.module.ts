import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { Task } from 'src/core/entities';

@Module({
  imports: [Task],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule { }

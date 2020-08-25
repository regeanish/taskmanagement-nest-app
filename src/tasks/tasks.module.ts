import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([TaskRepository]),
  ],
  controllers: [TasksController],
  providers: [TasksService, CreateTaskDto, GetTasksFilterDto],

})
export class TasksModule {}

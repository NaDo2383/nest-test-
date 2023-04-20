import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async create(todo: Todo) {
    if (todo.taskName === '') {
      throw new BadRequestException('taskname required');
    }

    const newTodo = new this.todoModel(todo);
    const result = await newTodo.save();
    return result;
  }

  async findAll() {
    const result = await this.todoModel.find({});
    return result;
  }

  async findOne(_id: string) {
    const result = await this.todoModel.findById({ _id });
    return result;
  }

  async remove(_id: string) {
    const result = await this.todoModel.findByIdAndDelete({ _id });
    return result;
  }
}

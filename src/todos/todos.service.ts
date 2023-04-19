import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoDocument } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel('Todo') private readonly todoListModel: Model<TodoDocument>,
  ) {}

  create() {
    return `This action create todos`;
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }
}

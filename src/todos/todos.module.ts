import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { todoListSchema } from './todo.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Todo',
        schema: todoListSchema,
      },
    ]),
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}

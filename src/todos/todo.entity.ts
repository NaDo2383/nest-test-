import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date } from 'mongoose';

@Schema({ timestamps: true })
export class Todo {
  @Prop()
  taskName: string;

  @Prop({ type: Date })
  createDate: Date;

  @Prop()
  isDone: boolean;
}

// export type TodoDocument = Todo & Document;

export const todoListSchema = SchemaFactory.createForClass(Todo);

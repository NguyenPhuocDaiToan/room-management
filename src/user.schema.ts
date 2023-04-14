import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ type: String, default: '' })
  readonly fullname: string;

  @Prop({ type: String, default: '', unique: true, required: true })
  readonly email: string;

  @Prop({ type: String, default: '', required: true })
  readonly password: string;
}

// creates a Mongoose schema based on a class definition
export const UserSchema = SchemaFactory.createForClass(User);

// a Mongoose model type
export type UserDocument = User & Document;

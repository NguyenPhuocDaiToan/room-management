import * as mongoosePaginate from 'mongoose-paginate-v2';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { User, UserSchema } from './user.schema';

mongoosePaginate.paginate.options = {
  lean: true,
  limit: 20,
  page: 1,
};

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://daitoan2000:e3dE0y7hOyJNIvrt@daitoan.uamxmsp.mongodb.net/room-management?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectionFactory: (connection) => {
          connection.plugin(mongoosePaginate);
          return connection;
        },
      },
    ),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}

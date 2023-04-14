import * as mongoosePaginate from 'mongoose-paginate-v2';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

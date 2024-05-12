import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://yourMongoDBURL'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

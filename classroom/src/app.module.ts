import { Module } from '@nestjs/common';
import { MessagingModule } from 'messaging/messaging.module';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [DatabaseModule, HttpModule, MessagingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

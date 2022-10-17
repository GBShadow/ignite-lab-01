import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoursesService } from 'services/courses.service';
import { EnrollmentsService } from 'services/enrollments.service';
import { StudentsService } from 'services/students.service';
import { PurchasesController } from './controllers/purchases.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [StudentsService, CoursesService, EnrollmentsService],
  controllers: [PurchasesController],
})
export class MessagingModule {}

import { UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'http/auth/authorization.guard';
import { AuthUser, CurrentUser } from 'http/auth/current-user';
import { EnrollmentsService } from 'services/enrollments.service';
import { StudentsService } from 'services/students.service';
import { Enrollment } from '../models/enrollment';
import { Student } from '../models/student';

@Resolver(() => Student)
export class StudentsResolver {
  constructor(
    private studentsService: StudentsService,
    private enrollmentsService: EnrollmentsService,
  ) {}

  @Query(() => Student)
  @UseGuards(AuthorizationGuard)
  me(@CurrentUser() user: AuthUser) {
    return this.studentsService.getStudentByAuthUserId(user.sub);
  }

  @Query(() => [Student])
  @UseGuards(AuthorizationGuard)
  students() {
    return this.studentsService.listAllStudents();
  }

  @ResolveField(() => [Enrollment])
  enrollments(@Parent() student: Student) {
    return this.enrollmentsService.listAllEnrollmentsByStudent(student.id);
  }
}

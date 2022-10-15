import { UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'http/auth/authorization.guard';
import { CoursesService } from 'services/courses.service';
import { EnrollmentsService } from 'services/enrollments.service';
import { StudentsService } from 'services/students.service';
import { Enrollment } from '../models/enrollment';
import { Student } from '../models/student';

@Resolver(() => Enrollment)
export class EnrollmentsResolver {
  constructor(
    private enrollmentsService: EnrollmentsService,
    private studentsService: StudentsService,
    private coursesService: CoursesService,
  ) {}

  @Query(() => [Enrollment])
  @UseGuards(AuthorizationGuard)
  enrollments() {
    return this.enrollmentsService.listAllEnrollments();
  }

  @ResolveField(() => Student)
  student(@Parent() enrollment: Enrollment) {
    return this.studentsService.getStudentById(enrollment.studentId);
  }

  @ResolveField(() => Student)
  course(@Parent() enrollment: Enrollment) {
    return this.coursesService.getCourseById(enrollment.courseId);
  }
}

import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Student } from "./student.entity";
import { CreateLessonInput } from "./student.input";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";

@Resolver(of => StudentType)
export class StudentResolver {

    constructor(
        private studentService: StudentService
    ) { }

    @Query(returns => [StudentType])
    lessons() {
        return this.studentService.getAllLesson();
    }

    @Query(returns => StudentType)
    lesson(@Args("id") id: string) {
        return this.studentService.getLesson(id);
    }

    @Mutation(returns => StudentType)
    createLesson(
        @Args("createLessonInput") createLessonInput: CreateLessonInput,
    ): Promise<Student> {
        return this.studentService.createLesson(createLessonInput);
    }
}
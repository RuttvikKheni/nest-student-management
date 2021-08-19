import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Lesson } from "./student.entity";
import { CreateLessonInput } from "./student.input";
import { LessonService } from "./student.service";
import { LessonType } from "./student.type";

@Resolver(of => LessonType)
export class LessonResolver {

    constructor(
        private lessonService: LessonService
    ) { }

    @Query(returns => [LessonType])
    lessons() {
        return this.lessonService.getAllLesson();
    }

    @Query(returns => LessonType)
    lesson(@Args("id") id: string) {
        return this.lessonService.getLesson(id);
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args("createLessonInput") createLessonInput: CreateLessonInput,
    ): Promise<Lesson> {
        return this.lessonService.createLesson(createLessonInput);
    }
}
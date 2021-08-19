import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './student.entity';
import { v4 } from 'uuid';
import { CreateLessonInput } from './student.input';

@Injectable()
export class LessonService {
    constructor(@InjectRepository(Lesson) private lessonRepository: Repository<Lesson>) { }

    async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
        const { name, startDate, endDate } = createLessonInput;
        const lesson = this.lessonRepository.create({ id: v4(), name, startDate, endDate });
        return this.lessonRepository.save(lesson);
    }

    getAllLesson() {
        return this.lessonRepository.find({});
    }

    getLesson(id: string) {
        return this.lessonRepository.findOne({ id });
    }
}

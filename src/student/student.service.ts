import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { v4 } from 'uuid';
import { CreateLessonInput } from './student.input';

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private lessonRepository: Repository<Student>) { }

    async createLesson(createLessonInput: CreateLessonInput): Promise<Student> {
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

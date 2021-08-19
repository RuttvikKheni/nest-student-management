import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType("Student")
export class StudentType {
    @Field(type => ID)
    studentID: string;

    @Field()
    name: string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;
}
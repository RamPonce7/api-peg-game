import { IsInt, IsString } from "class-validator";

export class CreateScoreDto {

    @IsString()
    username: string;

    @IsInt()
    score: number;
}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Score extends Document {

    @Prop({
        required: true,
        index: true,
    })
    username: string;

    @Prop({
        required: true,
        index: true,
    })
    score: number;

    @Prop({
        default: Date.now,
        index: true,
    })
    createdAt: Date;


}

export const ScoreSchema = SchemaFactory.createForClass(Score);
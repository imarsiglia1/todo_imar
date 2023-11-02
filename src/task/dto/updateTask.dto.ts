import { IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { CreateTaskDto } from "./createTask.dto";

export class UpdateTaskDto extends CreateTaskDto {
    @ApiProperty({ nullable: true, default: false })
    @IsBoolean()
    isChecked?: boolean
}

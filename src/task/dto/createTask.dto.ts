import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateTaskDto {
    @ApiProperty({ default: "Prueba 1" })
    @IsString({ message: "titulo debe ser string" })
    @MinLength(5, {
        message: 'titulo muy corto',
    })
    @MaxLength(250, {
        message: 'titulo muy largo',
    })
    title: string;

    @ApiProperty({ default: "Descripción 1" })
    @IsString({ message: "description debe ser string" })
    @MaxLength(500, {
        message: 'description muy largo',
    })
    description: string;
}

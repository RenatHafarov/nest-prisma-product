import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    products :string;
   
}


export class UpdateCategoryDto {
    @IsNotEmpty()
    @IsNumber()
    id:number;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    products :string;
}


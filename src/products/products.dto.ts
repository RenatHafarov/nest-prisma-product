import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: Number;

    @IsNotEmpty()
    @IsNumber()
    categoryId: number;



}


export class UpdateProductDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;


    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsNumber()
    price: Number;

    @IsOptional()
    @IsNumber()
    categoryId: number;

}


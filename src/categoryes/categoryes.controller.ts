import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryesService } from './categoryes.service';
import { CreateCategoryDto, UpdateCategoryDto } from './categoryes.dto';
@Controller('categoryes')
export class CategoryesController {
    constructor(private cateservice: CategoryesService) { }
    @Post('category')
    create(@Body() body: CreateCategoryDto) {
        return this.cateservice.createNewCategory(body)
    }

    @Get('/category')
    async findAll() {
        return this.cateservice.findAll()
    }

    @Get('/category/:id')
    async findOne(@Param('id') id: number) {
        return this.cateservice.findOne(id);
    }


    @Put('category/:id')
    update(@Param('id') id: number, @Body() body: UpdateCategoryDto) {
        return this.cateservice.updateCategory(id, body);
    }
    

    @Delete('category/:id')
    deletebook(@Param('id') id: number) {
        return this.cateservice.deleteOne(id);
    }





}

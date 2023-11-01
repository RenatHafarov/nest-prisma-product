import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './products.dto';
@Controller('products')
export class ProductsController {
    constructor(private productservice: ProductsService) { }
    
    @Post('product')
    create(@Body() body: CreateProductDto) {
        return this.productservice.createNewProduct(body)
    }

    @Get('/product')
    async findAll() {
        return this.productservice.findAll()
    }

    @Get('/product/:id')
    async findOne(@Param('id') id: number) {
        return this.productservice.findOne(id);
    }


    @Put('product/:id')
    update(@Param('id') id: number, @Body() body: UpdateProductDto) {
        return this.productservice.updateProduct(id, body);
    }

    @Delete('product/:id')
    deletebook(@Param('id') id: number) {
        return this.productservice.deleteOne(id);
    }





}

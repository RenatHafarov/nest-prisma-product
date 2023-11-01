import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient, Product } from '@prisma/client';
import { CreateProductDto, UpdateProductDto } from './products.dto';
import { PrismaService } from 'prisma/prisma.service';
import { CategoryesService } from 'src/categoryes/categoryes.service';

@Injectable()
export class ProductsService {
    constructor(private client: PrismaService) { }

    async createNewProduct(body: CreateProductDto) {
        const product = await this.client.product.create({
            data: {
                name: body.name,
                description: body.description,
                price: Number(body.price),
                categoryId: body.categoryId
            }
        })
        
        return product;
      
    }




    async updateProduct(id: number, body: UpdateProductDto) {

        id = Number(id)
        const finded = await this.client.product.findUnique({ where: { id: id } })
        if (!finded) throw new BadRequestException('Product not found')

        const updatecate = await this.client.product.update({
            where: {
                id: id,
            },
            data: {
                name: body.name ? body.name : finded.name,
                price: Number(body.price) ? Number(body.price) : finded.price,
                categoryId: body.categoryId ? body.categoryId : finded.categoryId
            },
        })

        return updatecate;

    }
    async findOne(id: number) {

        id = Number(id)
        const findedone = [];
        const finded = await this.client.product.findUnique({ where: { id: id } })

        if (!finded) throw new BadRequestException('Product not found')

        const category = await CategoryesService.arguments.findOne(finded.categoryId)

        findedone.push({
            ...finded,
            categoryInfo: category
        })
        return findedone


    }
    async findAll() {

        const count = await this.client.product.count()
        return count;
    }

    async deleteOne(id: number) {

        id = Number(id)
        const finded = await this.client.product.findUnique({ where: { id: id } })
        if (!finded) throw new BadRequestException('Product not found')
        id = Number(id)
        const del = await this.client.product.delete({
            where: {
                id: id,
            },
        })
        return del;

    }


}

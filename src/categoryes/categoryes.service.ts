import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCategoryDto, UpdateCategoryDto } from './categoryes.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoryesService {
    constructor(private client: PrismaService) {}
    async createNewCategory(body: CreateCategoryDto) {
       
        const category = await this.client.category.create({
            data: body
        })
        return category;

    }

    async updateCategory(id: number, body: UpdateCategoryDto) {
        
        id = Number(id)
        const finded = await this.client.category.findUnique({ where: { id: id } })
        if (!finded) throw new BadRequestException('category not found')

        const updatecate = await this.client.category.update({
            where: {
                id: id,
            },
            data: {
                id: body.id ? body.id : finded.id,
                name: body.name ? body.name : finded.name,
                products: body.products ? body.products : finded.products
            },
        })

        return updatecate;


    }
    async findOne(id: number) {
      
        id = Number(id)
        const finded = await this.client.category.findUnique({ where: { id: id } })
        return finded ? finded : "not found"
    }
    async findAll() {
      
        const count = await this.client.category.count()
        return count;
    }

    async deleteOne(id: number) {

        id = Number(id)
        const finded = await this.client.category.findUnique({ where: { id: id } })
        if (!finded) throw new BadRequestException('category not found')
        id = Number(id)
        const del = await this.client.category.delete({
            where: {
                id: id,
            },
        })
        return del;

    }


}

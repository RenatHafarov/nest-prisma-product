import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';
import { CategoryesService } from './categoryes/categoryes.service';
import { ProductsController } from './products/products.controller';
import { CategoryesController } from './categoryes/categoryes.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoryesController],
  providers: [AppService, ProductsService, CategoryesService, PrismaService],
})
export class AppModule {}

import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ProductService } from '../../services/product/product.service';
import { FirebaseGuard } from '../../../../shared/authentication/guards/firebase.guard';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {
  }

  @UseGuards(FirebaseGuard)
  @Get('')
  async getProducts() {
    return await this.productService.getProducts();
  }

  @UseGuards(FirebaseGuard)
  @Post('')
  async addProduct(@Body() product: any) {
    return await this.productService.addProduct(product);
  }

  @UseGuards(FirebaseGuard)
  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() product: any) {
    return this.productService.updateProduct(id, product);
  }

  @UseGuards(FirebaseGuard)
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.deleteProduct(id);
  }
}

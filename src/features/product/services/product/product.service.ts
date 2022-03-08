import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../../schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
  }

  async addProduct(product) {
    const createProduct = new this.productModel(product);
    await createProduct.save();
  }

  async updateProduct(id: string, product) {
    await this.productModel.findByIdAndUpdate(id, product);
  }

  async deleteProduct(id) {
    await this.productModel.findByIdAndDelete(id);
  }

  async getProducts() {
    return this.productModel.find();
  }

}

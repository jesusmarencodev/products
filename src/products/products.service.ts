import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as UuidV4 } from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    const { name, description, price } = createProductDto;
    const newProduct = new Product(UuidV4(), name, price, description);
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: String) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    //conn esto eliminamos el id de las properties y en values guardamos todas las properties
    const { id:_, ...values } = updateProductDto;
    //const { id:_, name, description, price } = updateProductDto;

    let product = this.findOne(id);

    product.updateWith({...values})

    return ''; //this.products.update(p => p.id === id;
  }

  remove(id: string) {
    const product = this.findOne(id);

    this.products = this.products.filter((p) => p.id !== id);

    return product;
  }
}

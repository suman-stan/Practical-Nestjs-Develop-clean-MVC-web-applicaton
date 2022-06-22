import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm"
import { throws } from "assert";

@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository <Product>,
    ){}

    findAll(): Promise<Product[]>{
        return this.productRepository.find();
    }

    findOne(id: number): Promise<Product> {
        // return this.productRepository.findOne(id);
        return this.productRepository.findOne({where: {id}})
    }
}
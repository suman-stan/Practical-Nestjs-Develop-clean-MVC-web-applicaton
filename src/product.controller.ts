import { Controller, Get, Param, Render, Res } from "@nestjs/common";
import { throws } from "assert";
import { response } from "express";
import { ProductService } from "./models/products.service";

@Controller('/products')
export class ProductsController{

    constructor(private readonly productsService: ProductService){}

    // static products = [
    //     {
    //         id: '1',
    //         name: 'TV',
    //         description: 'Best TV',
    //         image: 'game.png',
    //         price: '1000',
    //     },

    //     {
    //         id: '2',
    //         name: 'iphone',
    //         description: 'Best iphone',
    //         image: 'safe.png',
    //         price: '999',
    //     },

    //     {
    //         id: '3',
    //         name: 'Chromecast',
    //         description: 'Best Chromecast',
    //         image: 'submarine.png',
    //         price: '30',
    //     },

    //     {
    //         id: '4',
    //         name: 'Glasses',
    //         description: 'Best Best',
    //         image: 'game.png',
    //         price: '100',
    //     },
    // ];

    @Get('/')
    @Render('products/index')
    async index(){
        const viewData = [];
        viewData['title'] = 'Products - Online Store';
        viewData['subtitle'] = 'List of products';
        // viewData['products'] = ProductsController.products;
        viewData['products'] = await this.productsService.findAll();
        return {
            viewData:viewData,
        };
    }

    @Get('/:id')
    // @Render('products/show')
    async show(@Param() params, @Res() response) {
        // const product = ProductsController.products[params.id - 1];
        const product = await this.productsService.findOne(params.id);
        if(!product){
            return response.redirect('/products')
        }
        const viewData = [];
        viewData['title'] = product.name + ' - Online Store';
        viewData['subtitle'] = product.name + ' - Product Information';
        viewData['product'] = product;
        // return {
        // viewData: viewData,
        // };
        return response.render('products/show', {viewData: viewData});
  }

}
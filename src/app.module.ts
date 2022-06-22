import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './product.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
})
export class AppModule {}

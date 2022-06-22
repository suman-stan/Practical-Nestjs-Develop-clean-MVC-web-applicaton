import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Product } from './models/product.entity';
import { ProductsController } from './product.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "online_store",
      entities: [Product],
      synchronize: true
    }),
  ],
  controllers: [AppController, ProductsController],
})
export class AppModule {}

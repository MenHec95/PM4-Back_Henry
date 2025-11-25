import { Module } from '@nestjs/common';
import { UserModule } from './Users/users.module';
import { ProductsModule } from './Products/products.module';

import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrdersModule } from './orders/orders.module';

import { CategoriesModule } from './categories/categories.module';
import { FilesModule } from './files/files.module';
import typeOrmConfig from './config/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm')!,
    }),
    UserModule,
    ProductsModule,
    AuthModule,
    OrdersModule,
    CategoriesModule,
    FilesModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1h' },
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

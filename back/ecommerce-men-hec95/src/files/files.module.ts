import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { CloudinaryConfig } from 'src/config/cloudinary';
import { ProductsEntity } from 'src/Products/products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesRepository } from './files.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  controllers: [FilesController],
  providers: [FilesService, CloudinaryConfig, FilesRepository],
})
export class FilesModule {}

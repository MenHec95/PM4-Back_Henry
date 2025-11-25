import {
  Controller,
  Param,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  UseGuards,
  Post,
} from '@nestjs/common';
import { FilesService } from './files.service';

import { FileInterceptor } from '@nestjs/platform-express';
import { idDto } from 'src/utils/DTOs/id.dto';
import { MiGuarda } from 'src/guards/guard';
import { ApiBearerAuth, ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @ApiBearerAuth()
  @Post('uploadImage/:id')
  @UseGuards(MiGuarda)
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 200000,
            message: 'El archivo debe ser menor a 200Kb',
          }),
          new FileTypeValidator({
            fileType: /^image\/(jpeg|png|jpg)$/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Param() Params: idDto,
  ): Promise<string> {
    return this.filesService.create(file, Params);
  }
}

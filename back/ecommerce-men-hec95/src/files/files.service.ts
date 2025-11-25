import { Injectable } from '@nestjs/common';
import { UploadApiResponse, v2 } from 'cloudinary';
import * as streamifier from 'streamifier';
import { idDto } from 'src/utils/DTOs/id.dto';
import { FilesRepository } from './files.repository';

@Injectable()
export class FilesService {
  constructor(private readonly fileRepository: FilesRepository) {}

  async create(image: Express.Multer.File, idProduct: idDto): Promise<string> {
    const imageUpload: UploadApiResponse = await new Promise(
      (resolve, reject) => {
        const upload = v2.uploader.upload_stream(
          {
            resource_type: 'image',
          },
          (error, result) => {
            if (error || !result) {
              // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
              return reject(error);
            } else {
              resolve(result);
            }
          },
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        streamifier.createReadStream(image.buffer).pipe(upload);
      },
    );

    const imageUrl = imageUpload.secure_url;
    return this.fileRepository.uploadImage(idProduct, imageUrl);
  }
}

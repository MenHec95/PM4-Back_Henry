import { idDto } from 'src/utils/DTOs/id.dto';
import { FilesRepository } from './files.repository';
export declare class FilesService {
    private fileRepository;
    constructor(fileRepository: FilesRepository);
    create(image: Express.Multer.File, idProduct: idDto): Promise<string>;
}

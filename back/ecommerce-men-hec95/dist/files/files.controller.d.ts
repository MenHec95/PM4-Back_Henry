import { FilesService } from './files.service';
import { idDto } from 'src/utils/DTOs/id.dto';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    create(file: Express.Multer.File, Params: idDto): Promise<string>;
}

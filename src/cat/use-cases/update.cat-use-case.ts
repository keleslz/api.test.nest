import { Injectable } from '@nestjs/common';
import { UpdateCatDto } from '../dto/update-cat.dto';

@Injectable()
export class UpdateCatUseCase {
  execute(id: string, updateCatDto: UpdateCatDto): string {
    return `This action updates a #${'id'} cat`;
  }
}

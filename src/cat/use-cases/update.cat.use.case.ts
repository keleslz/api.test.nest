import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateCatUseCase {
  execute(/* id: number, updateCatDto: UpdateCatDto */): string {
    return `This action updates a #${'id'} cat`;
  }
}

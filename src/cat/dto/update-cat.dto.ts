import { PartialType } from '@nestjs/mapped-types';
import { IUpdateDto } from 'src/core/domain/dto/i-update-dto';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto
  extends PartialType(CreateCatDto)
  implements IUpdateDto {}

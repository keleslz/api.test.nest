import { ICreateDto } from 'src/domain/dto/i-create-dto';

export class CreateCatDto implements ICreateDto {
  public name: string;
  public type: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  cover?: string;

  @ApiProperty()
  author: string;

  @ApiProperty({ required: false, default: false })
  inStock?: boolean = false;
}

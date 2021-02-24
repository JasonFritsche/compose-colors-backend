import { IsNotEmpty } from 'class-validator';

export class CreateColorPaletteDTO {
  @IsNotEmpty()
  paletteName: string;

  colors: Array<any>;

  @IsNotEmpty()
  description: string;
}

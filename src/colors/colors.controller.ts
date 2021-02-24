import { Get } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { ColorPaletteEntity } from './colors.entity';
import { ColorsService } from './colors.service';
import { CreateColorPaletteDTO } from './dto/create-color-palette.dto';

@Controller('colors')
export class ColorsController {
  constructor(private _colorsService: ColorsService) {}

  @Get()
  public getColorPalettes(): Promise<ColorPaletteEntity[]> {
    return this._colorsService.getColorPalettes();
  }

  @Post()
  public createColorPalette(
    @Body() createColorPaletteDTO: CreateColorPaletteDTO,
  ): Promise<ColorPaletteEntity> {
    return this._colorsService.createColorPalette(createColorPaletteDTO);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ColorsRepository } from './colors.repository';
import { CreateColorPaletteDTO } from './dto/create-color-palette.dto';
import { ColorPaletteEntity } from './colors.entity';
import { json } from 'express';

@Injectable()
export class ColorsService {
  constructor(
    @InjectRepository(ColorsRepository)
    private _colorsRepository: ColorsRepository,
  ) {}

  async createColorPalette(
    createColorPaletteDTO: CreateColorPaletteDTO,
  ): Promise<ColorPaletteEntity> {
    return this._colorsRepository.createColorPalette(createColorPaletteDTO);
  }

  async getColorPalettes(): Promise<ColorPaletteEntity[]> {
    this._colorsRepository.find({}).then((palettes) => {
      console.log(palettes);
      palettes.forEach((palette) => {
        palette.colors.forEach((color) => {
          JSON.parse(color);
          console.log(color);
        });
      });
    });

    return this._colorsRepository.find({});
  }
}

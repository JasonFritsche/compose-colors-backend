import { EntityRepository, Repository } from 'typeorm';
import { ColorPaletteEntity } from './colors.entity';
import { CreateColorPaletteDTO } from './dto/create-color-palette.dto';

@EntityRepository(ColorPaletteEntity)
export class ColorsRepository extends Repository<ColorPaletteEntity> {
  async createColorPalette(
    createColorPaletteDTO: CreateColorPaletteDTO,
  ): Promise<ColorPaletteEntity> {
    const { paletteName, colors, description } = createColorPaletteDTO;
    const palette = new ColorPaletteEntity();

    palette.paletteName = paletteName;
    palette.colors = colors;
    palette.description = description;

    await palette.save();

    return palette;
  }
}

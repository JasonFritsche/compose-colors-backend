import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorsController } from './colors.controller';
import { ColorsRepository } from './colors.repository';
import { ColorsService } from './colors.service';

@Module({
  imports: [TypeOrmModule.forFeature([ColorsRepository])],
  controllers: [ColorsController],
  providers: [ColorsService],
})
export class ColorsModule {}

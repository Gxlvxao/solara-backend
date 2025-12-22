import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Market } from './market.entity.js';
import { MarketsService } from './markets.service.js';
import { MarketsController } from './markets.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([Market])],
  providers: [MarketsService],
  controllers: [MarketsController],
  exports: [MarketsService],
})
export class MarketsModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Market } from './market.entity.js';
import { MarketsService } from './markets.service.js';
import { MarketsController } from './markets.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([Market])],
  controllers: [MarketsController],
  providers: [
    {
      provide: 'MARKETS_SERVICE', // <--- Token Manual
      useClass: MarketsService,
    },
  ],
  exports: ['MARKETS_SERVICE'], // <--- Exporta o Token
})
export class MarketsModule {}
import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { MarketsService } from './markets.service.js';
import { Market } from './market.entity.js';

@Controller('markets')
export class MarketsController {
  constructor(private readonly marketsService: MarketsService) {}

  @Get()
  findAll() {
    return this.marketsService.findAll();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    const market = await this.marketsService.findOne(slug);
    if (!market) throw new NotFoundException('Market not found');
    return market;
  }

  @Post()
  create(@Body() market: Partial<Market>) {
    return this.marketsService.create(market);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() market: Partial<Market>) {
    return this.marketsService.update(+id, market);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marketsService.remove(+id);
  }
}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Market } from './market.entity.js';

@Injectable()
export class MarketsService {
  constructor(
    @InjectRepository(Market)
    private readonly marketsRepository: Repository<Market>,
  ) {}

  findAll(): Promise<Market[]> {
    return this.marketsRepository.find();
  }

  findOne(slug: string): Promise<Market | null> {
    return this.marketsRepository.findOneBy({ slug });
  }

  // --- NOVO MÉTODO ---
  findById(id: number): Promise<Market | null> {
    return this.marketsRepository.findOneBy({ id });
  }
  // -------------------

  create(market: Partial<Market>): Promise<Market> {
    const newMarket = this.marketsRepository.create(market);
    return this.marketsRepository.save(newMarket);
  }

  async update(id: number, market: Partial<Market>): Promise<Market | null> {
    await this.marketsRepository.update(id, market);
    return this.marketsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.marketsRepository.delete(id);
  }
}
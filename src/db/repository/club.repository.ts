import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Club } from '../entity/club';

@Injectable()
export class ClubService {
  constructor(
    @Inject('CLUB_REPOSITORY')
    private clubRepository: Repository<Club>,
  ) {}

  async findAll(): Promise<Club[]> {
    return this.clubRepository.find();
  }
}
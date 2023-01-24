import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Club } from '../entity/Club';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club) private readonly userRepository: Repository<Club>,
  ) {}

  getAllClub(): Promise<Club[]> {
    return this.userRepository.find();
  }
}

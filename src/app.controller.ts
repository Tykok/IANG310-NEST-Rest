import { Controller, Get } from '@nestjs/common';
import { ClubService } from './club/club.service';
import { Club } from './entity/Club';

@Controller()
export class AppController {
  constructor(private clubService: ClubService) {}

  @Get()
  getClub(): Promise<Club[]> {
    return this.clubService.getAllClub();
  }
}

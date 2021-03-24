import { Controller, Get, Param } from '@nestjs/common';
import { SharingService } from './sharing.service';

@Controller('sharing')
export class SharingController {
  constructor(private readonly sharingService: SharingService) {}

  @Get(':id')
  async getOne(@Param() params: { id: string }) {
    return await this.sharingService.findById(params.id);
  }
}

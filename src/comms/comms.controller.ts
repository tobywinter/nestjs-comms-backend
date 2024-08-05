import { Controller, Get, Param } from '@nestjs/common';
import { CommsService } from './comms.service';
import { YourNextDeliveryResponse } from './interfaces/comms.interface';

@Controller('comms')
export class CommsController {
  constructor(private readonly commsService: CommsService) {}

  @Get('your-next-delivery/:id')
  yourNextDelivery(@Param('id') id: string): YourNextDeliveryResponse {
    return this.commsService.yourNextDelivery(id);
  }
}

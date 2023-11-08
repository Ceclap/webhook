import { Body, Controller, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, Observable } from 'rxjs';
import { WebhookService } from './webhook.service';

@Controller()
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post('cookie')
  async create(@Body() data: any): Promise<any> {
    console.log(data);
  }
}
